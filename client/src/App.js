import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BrowsePosts from "./pages/BrowsePosts";
import CreateQuestion from "./pages/CreateQuestion";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PostTemplate from "./pages/PostTemplate";
import NoMatch from "./pages/NoMatch";
// import Nav from "./components/Nav";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/create_question" component={CreateQuestion} />
        <Route exact path="/search" component={BrowsePosts} />
        <Route exact path="/posts/:id" component={PostTemplate} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;