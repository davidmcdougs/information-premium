import axios from "axios";

export default {
  
  makeNewUser: function(email, password, handle) {
    // this api is called when we are making a new user object.
  //as a result, it will not need questions or answers.
    const newUser = {
      "email": email,
      "password": password,
      "handle": handle
    };
    return axios.post("/api/users", newUser);
  },
  login: function(userObj) {
    //this one should do login.
    return axios.post("/api/auth", userObj);
  },
  makeNewQuestion: function(originalQuestion, createdBy, reward, rewardAmount, rewardTimeLimit, topic){
    //this api will be called to post a new question to the db.
    const newQuestion = {
      "general": {
        "createdBy": createdBy
      },
      "details": {
        "reward": reward,
        "rewardAmount": rewardAmount,
        "rewardTimeLimit": rewardTimeLimit,
        "topic": topic,
        "posts": {
          "answers": [],
          "originalQuestion": originalQuestion
        }
      }
    };
    return axios.post("/api/questions", newQuestion);
  },
  getAllQuestions: function(){
    return axios.get("/api/questions");
  },
  getOneQuestion: function(id){
    return axios.get("../api/questions/"+id);
  },
  makeNewAnswer: function (questionID, answerText, replyNumber, createdBy) {
    const newAnswer = {
      "questionID": questionID,
      "replyNumber": replyNumber,
      "createdBy": createdBy,
      "answerText": answerText
    };
    return axios.post("/api/answers", newAnswer);
  },
  getAllTopics: function() {
    return axios.get("api/questions/topics/all");
  }
};



