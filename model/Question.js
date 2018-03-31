var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

var QuestionSchema = new Schema ({
    general: {
        url: {
            type: String
        },
        createdBy: {
            type: String
        },
        createdOn: {
            type: Date,
            default: Date.now
        }
    },
    details: {
        active: {
            type: Boolean,
            default: true
        },
        reward: {
            type: Boolean
        },
        rewardAmount: {
            type: Number
        },
        topic: {
            type: String
        },
        posts: {
            originalQuestion: {
                type: String,
                required: true
            },
            replies: [{
                // Store ObjectIds in the array
                type: Schema.Types.ObjectId,
                // The ObjectIds will refer to the ids in the Answer model
                ref: "Answer"
            }]
        }
    }
});

// This creates our model from the above schema, using mongoose's model method
var Question = mongoose.model("Question", QuestionSchema);

// Export the Question model
module.exports = Question;