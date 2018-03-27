const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const PORT = process.env.PORT || 8080;
const app = express();

// If deployed, use the deployed database. Otherwise use the local informationPremium database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/informationPremium";
// Connect to the Mongo DB
mongoose.connect(MONGODB_URI);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
app.get("/api/user/test", function(req,res){
  res.json(testUser))
});
app.get("/api/post/test", function(req,res){
  res.json(testPost))
});

// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});


const TestUser = {
  credentials: {
  email: "davidmcdougs@gmail.com",
  password: "davidisdope"
  },
  handle: "davidmcdougs",
  posts: {
      questionsCreatedByUser: ["questionID", "questionID2","questionIDECT"],
      answersCreatedByUser: [
        //   answer1 
          {
              createdON: "Date",
              question: "questionID",
              link: "https://information-premium/questionID",
              replyNumber: "3",
              choosenAnswer: false,
              thread: false,
          },
        //   answer2 
          {
              createdON: "Date",
              question: "questionID",
              link: "https://information-premium/questionID",
              replyNumber: "3",
              choosenAnswer: true,
              thread: false,
          }
      ]
  }
};

const TestPost = {
  general: {    
      questionid: "string or number or whatever",
      url: "http://information-premium/questionID"
      createdBy: "username",
      createdOn: "date"
  },
  details: {
      active: true,
      reward: true,
      rewardAmount: 4.5,
      posts: {
          originalQuestion: "how do i tie my shoes?",
          replies: [
            //   answer0 
              {
                  createdByUser: "davidmcdougs",
                  createOn: "date",
                  content: "you totally cant, nerd!",
                  choosen: false,
              },
            //   answer1 
              {
                  createdByUser: "davidmcdougs",
                  createOn: "date",
                  content: "sorry that was mean. Try doing the criss cross round the tree trick..",
                  choosen: true,
              }
          ]
      }

  }
}
