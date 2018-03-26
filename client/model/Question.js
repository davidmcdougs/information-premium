var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

var QuestionSchema = new Schema ({
    questionText: String,
    createdOn: Date,
    answered: Boolean
});