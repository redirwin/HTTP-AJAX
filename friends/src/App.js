import React from "react";
import { Route } from "react-router-dom";

import Header from "./components/Header";
import DisplayFriends from "./components/DisplayFriends";
import AddFriend from "./components/AddFriend";
import "./App.scss";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path="/" component={DisplayFriends} />
        <Route path="/addfriend" component={AddFriend} />
      </div>
    );
  }
}

export default App;
