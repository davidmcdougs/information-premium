var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

var QuestionSchema = new Schema ({
    questionText: {
        type: String,
        required: true
    },
    createdOn: {
        type: Date,
        default: Date.now
    },
    answered: {
        type: Boolean,
        default: false
    }
});