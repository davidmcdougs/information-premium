var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

var AnswerSchema = new Schema ({
    createdOn: {
        type: Date,
        default: Date.now
    },
    
    questionID: {
        // Store ObjectId
        type: Schema.Types.ObjectId,
        // The ObjectIds will refer to the ids in the Question model
        ref: "Question"
    },
    answerText: {
        type: String,
        required: true,
        minlength: [2, "Answer is too short"],
        maxlength: [1000, "Answer is too long"]
    },
    replyNumber: Number,
    chosenAnswer: {
        type: Boolean,
        default: false
    },
    thread: {
        type: Boolean,
        default: false
    }
});

// This creates our model from the above schema, using mongoose's model method
var Answer = mongoose.model("Answer", AnswerSchema);

// Export the Answer model
module.exports = Answer;