// Controller for our answers
// ========================
const db = require("../model");
module.exports = {
  // Find all answers
  findAll: function (req, res) {
    db.Answer
      .find({})
      .then(function (dbAnswer) {
        res.json(dbAnswer);
      })
      .catch(err => res.status(422).json(err));
  },
  // Find one answer by id
  findOne: function (req, res) {
    db.Answer
      .findOne({
        _id: req.params.id
      })
      .then(function (dbAnswer) {
        res.json(dbAnswer);
      })
      .catch(err => res.status(422).json(err));
  },
  // Create a new Answer
  create: function (req, res) {
    db.Answer
      .create(req.body)
      .then(function (dbAnswer) {
        res.json(dbAnswer);
      })
      .catch(err => res.status(422).json(err));
  },
  // Update existing answer by id
  update: function(req, res) {
    db.Answer
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(function(dbAnswer) {
        res.json(dbAnswer);
      })
      .catch(err => res.status(422).json(err));
  },
  // Delete an answer by id
  delete: function (req, res) {
    db.Answer
      .remove({
        _id: req.params.id
      })
      .then(function (dbAnswer) {
        res.json(dbAnswer);
      })
      .catch(err => res.status(422).json(err));
  }
};