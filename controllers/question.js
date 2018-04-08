// Controller for our questions
// ========================
const db = require("../model");
module.exports = {
  // Find all questions
  findAll: function(req, res) {
    db.Question
      .find({})
      .then(function(dbQuestion) {
        res.json(dbQuestion);
      })
      .catch(err => res.status(422).json(err));
  },
  // Find one question by id
  findOne: function(req, res) {
    db.Question
      .findOne({
        _id: req.params.id
      })
      .then(function(dbQuestion) {
        res.json(dbQuestion);
      })
      .catch(err => res.status(422).json(err));
  },
  findTopic: function(req, res) {
    db.Question
      .findOne({
        "details.topic": req.params.topic
      })
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
  },
  addAnswer: function(req, res) {
    db.Answer
      .create(req.body)
      .then(function(dbAnswer) {
        return db.Question.findOneAndUpdate({_id: req.params.id}, { $push: {"details.posts.answers": dbAnswer._id }}, {new: true});
      })
      .then(function(dbQuestion) {
        res.json(dbQuestion);
      })
      .catch(err => res.status(422).json(err));
  },
  popAllReply: function(req, res) {
    db.Question
      .find({})
      .populate("details.posts.answers")
      .then(function(dbQuestion) {
        res.json(dbQuestion);
      })
      .catch(err => console.log(err));
  },
  getTopics: function(req, res) {
    db.Question
      .distinct('details.topic', function(err, results) {
        console.log(results);
      })
      .then(function(dbQuestion){
        res.json(dbQuestion);
      });
  }
};