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
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};



