var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true,
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
        questionsCreated: [{
            // Store ObjectIds in the array
            type: Schema.Types.ObjectId,
            // The ObjectIds will refer to the ids in the Question model
            ref: "Question"
        }],
        answersCreated: [{
            // Store ObjectIds in the array
            type: Schema.Types.ObjectId,
            // The ObjectIds will refer to the ids in the Answer model
            ref: "Answer"
        }],
    }

});

// This creates our model from the above schema, using mongoose's model method
var User = mongoose.model("User", UserSchema);

// Export the User model
module.exports = User;