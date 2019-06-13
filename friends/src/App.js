import React from "react";
import { Route } from "react-router-dom";

import DisplayFriends from "./components/DisplayFriends";
import AddFriend from "./components/AddFriend";
import "./App.scss";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      activeFriend: null,
      friends: []
    };
  }

  addFriend = e => {
    e.preventDefault();
    console.log("In Add Friend method!");
  };

  render() {
    return (
      <div className="App">
        <Route exact path="/" component={DisplayFriends} />
        <Route
          path="/addfriend"
          render={props => (
            <AddFriend {...props} activeFriend={this.state.activeFriend} />
          )}
        />
      </div>
    );
  }
}

export default App;
