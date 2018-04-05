import axios from "axios";

export default {
  
  makeNewUser: function(email, password, handle) {
    // this api is called when we are making a new user object.
  //as a result, it will not need questions or answers.
    const newUser = {
      "email": email,
      "password": password,
      "handle": handle
    }
    return axios.post("/api/users", newUser);
  },
  getUser: function(id) {
    //this api is called to fetch a single user, probably just needed after login.
    //i am unable to get this to work.
    return axios.get("/api/users/" + id);
  },
  makeNewQuestion: function(originalQuestion, createdBy, reward, rewardAmount, rewardTimeLimit, topic,){
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
    }
    return axios.post("/api/questions", newQuestion);
  },
  getAllQuestions: function(){
    return axios.get("/api/questions");
  },
  getOneQuestion: function(id){
    return axios.get("../api/questions/"+id);
  }
};



