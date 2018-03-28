// Controller for our questions
// ========================
// var db = require("../models");
const db = require("../client/model");
module.exports = {
  // Find one question
  findOne: function(req, res) {
    db.Question
      .findOne(req.query)
      .then(function(dbQuestion) {
        res.json(dbQuestion);
      });
  },
  // Create a new question
  create: function(req, res) {
    db.Question
      .create(req.body)
      .then(function(dbQuestion) {
        res.json(dbQuestion);
      });
  },
  // Delete a question with a given id
  delete: function(req, res) {
    db.Question
      .remove({ _id: req.params.id })
      .then(function(dbQuestion) {
        res.json(dbQuestion);
      });
  }
};