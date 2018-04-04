var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

//added a timelimit input. input will be minutes.
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
            type: Boolean,
            default: false
        },
        rewardAmount: {
            type: Number,
            default: 0,
            min: [0, 'Insufficient reward']
        },
        rewardTimeLimit: {
            type: Number
        },
        topic: {
            type: String
        },
        posts: {
            originalQuestion: {
                type: String,
                required: true,
                minlength: [1, 'Question is too short'],
                maxlength: [288, 'Question is too long.']
            },
            answers: [{
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