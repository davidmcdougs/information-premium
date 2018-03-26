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
        required: true
    },
    replyNumber: Number,
    chosenAnswer: Boolean,
    thread: Boolean
});

// This creates our model from the above schema, using mongoose's model method
var Answer = mongoose.model("Answer", AnswerSchema);

// Export the Answer model
module.exports = Answer;