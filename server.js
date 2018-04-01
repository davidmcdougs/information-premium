const express = require("express");
const mongoose = require("mongoose");
// const path = require("path");
const bodyParser = require("body-parser");
const morgan = require('morgan');



const PORT = process.env.PORT || 8080;
const app = express();
//this will grab the passport file and run the function with app as param.
require('./passport')(app);

const routes = require("./routes");

// Use bodyParser in our app
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//morgan for more clarvoyant errors in our console, can be removed in prod
app.use(morgan('dev'));

app.use(routes);

//moved mongoose config to function below in order to permit a promise.
// //If deployed, use the deployed database. Otherwise use the local informationPremium database
// var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/informationPremium";
// // Connect to the Mongo DB
// mongoose.connect(MONGODB_URI);

//moved the server starter to begin after mongoose middleware
require('./mongoose')()
.then(() => {
  // mongo is connected, so now we can start the express server.
  app.listen(PORT, () => console.log(`Server up and running on ${PORT}.`));
})
.catch(err => {
  // an error occurred connecting to mongo!
  // log the error and exit
  console.error('Unable to connect to mongo.')
  console.error(err);
});

// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//     app.use(express.static("client/build"));
// }

// Send every request to the React app
// app.get("/api/user/test", function (req, res) {
//     res.json(testUser);
// });
// app.get("/api/post/test", function (req, res) {
//     res.json(testPost);
// });

// // Define any API routes before this runs
// app.get("*", function (req, res) {
//     res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });



const TestUser = {
    credentials: {
        email: "davidmcdougs@gmail.com",
        password: "davidisdope"
    },
    handle: "davidmcdougs",
    posts: {
        questionsCreatedByUser: ["questionID", "questionID2", "questionIDECT"],
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
        url: "http://information-premium/questionID",
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
};