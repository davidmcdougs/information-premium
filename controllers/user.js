// Controller for our users
// ========================
const db = require("../model");
module.exports = {
  // Find all users
  findAll: function(req, res) {
    db.User
      .find({})
      .then(function(dbUser) {
        res.json(dbUser);
      })
      .catch(err => res.status(422).json(err));
  },
  // Find one user by id
  findOne: function(req, res) {
    db.User
      .findOne({
        _id: req.params.id
      })
      .then(function(dbUser) {
        res.json(dbUser);
      })
      .catch(err => res.status(422).json(err));
  },
  findEmail: function(req, res) {
    db.User
      .findOne({
        email: req.params.email
      })
      .then(function(dbUser) {
        res.json(dbUser);
      })
      .catch(err => res.status(422).json(err));
  },
  // Create a new user
  create: function(req, res) {
    db.User
      .create(req.body)
      .then(function(dbUser) {
        delete dbUser.password;
        res.json(dbUser);
      })
      .catch(err => res.status(422).json(err));
  },
  // Delete a user with a given id
  delete: function(req, res) {
    db.User
      .remove({ _id: req.params.id })
      .then(function(dbUser) {
        res.json(dbUser);
      })
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.dbUser
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(function(dbdbUser) {
        res.json(dbUser);
      })
      .catch(err => res.status(422).json(err));
  }
};