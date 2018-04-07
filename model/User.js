var mongoose = require("mongoose");
const bcrypt = require('bcrypt');

const WORK_FACTOR = 10;

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        index: true,
        match: [/.+\@.+\..+/, "Please enter a valid e-mail address"]
    },
    password: {
        type: String,
        required: "Password is required",
        validate: [
            function (input) {
                return input.length >= 6;
            },
            "Password should be longer."
        ]
    },
    handle: {
        type: String,
        unique: true,
        required: true,
        validate: [
            function (input) {
                return input.length >= 6;
            },
            "Handle should be longer."
        ]
    },
    posts: {
        questionsCreatedByUser: [{
            // Store ObjectIds in the array
            type: Schema.Types.ObjectId,
            // The ObjectIds will refer to the ids in the Question model
            ref: "Question"
        }],
        answersCreatedByUser: [{
            // Store ObjectIds in the array
            type: Schema.Types.ObjectId,
            // The ObjectIds will refer to the ids in the Answer model
            ref: "Answer"
        }],
    }

});

UserSchema.pre('save', function(next){
    const user = this;
    if (!user.isModified('password')) {
        return next();
    }
    bcrypt.genSalt(WORK_FACTOR, function(err, salt){
        if(err) return next(err);
        bcrypt.hash(user.password, salt, function(err, hash){
            if (err) return next(err);

            user.password = hash;
            next();
        });
    });
});

UserSchema.methods.validatePassword = function (candidatePassword) {
    return new Promise ((resolve, reject) => {
        bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
            if (err) return reject(err);
            resolve(isMatch);
        });
    });
};

// This creates our model from the above schema, using mongoose's model method
var User = mongoose.model("User", UserSchema);

// Export the User model
module.exports = User;