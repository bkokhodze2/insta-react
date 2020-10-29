import React, { useState } from "react";
import Header from "./components/header/Header";
import Feed from "./components/feed/Feed";
import Profile from "./components/profile/Profile";
import Myposts from "./components/myposts/Myposts";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route path="/" component={Feed} exact />
        <Route path="/profile" component={Profile} exact />
        <Route path="/MYPOSTS" component={Myposts} exact />
      </div>
    </Router>
  );
}

export default App;
