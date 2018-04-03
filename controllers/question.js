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
  // addAnswer: function(req, res) {
  //   db.Answer
  //     .create(req.body)
  //     .then(function(dbAnswer) {
  //       console.log("FINDIND QUESIONS TO UDPATE");
  //       return db.Question.findOneAndUpdate({}, { $push: { "posts.replies": dbAnswer._id } }, { new: true });
  //     })
  //     .then(function(dbQuestion) {
  //       res.json(dbQuestion);
  //     })
  //     .catch(err => res.status(422).json(err));
  // },
  popAllReply: function(req, res) {
    db.Question
      .find({})
      .populate("details.posts.answers")
      .then(function(dbQuestion) {
        res.json(dbQuestion);
      })
      .catch(err => console.log(err));
  }
};