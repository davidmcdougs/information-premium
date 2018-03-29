// Controller for our questions
// ========================
const db = require("../client/model");
module.exports = {
  // Find one question
  findOne: function(req, res) {
    db.Question
      .findOne(req.query)
      .then(function(dbQuestion) {
        res.json(dbQuestion);
      })
      .catch(err => res.status(422).json(err));
  },
  // Create a new question
  create: function(req, res) {
    db.Question
      .create(req.body)
      .then(function(dbQuestion) {
        res.json(dbQuestion);
      })
      .catch(err => res.status(422).json(err));
  },
  // Delete a question with a given id
  delete: function(req, res) {
    db.Question
      .remove({ _id: req.params.id })
      .then(function(dbQuestion) {
        res.json(dbQuestion);
      })
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Question
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(function(dbQuestion) {
        res.json(dbQuestion);
      })
      .catch(err => res.status(422).json(err));
  }
};