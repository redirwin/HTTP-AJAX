import React from "react";
import { Route } from "react-router-dom";

import DisplayFriends from "./components/DisplayFriends";
import EditFriend from "./components/EditFriend";
import "./App.scss";
import axios from "axios";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      activeFriend: null,
      friends: []
    };
  }

  addFriend = (e, friend) => {};

  editFriend = (e, friend) => {};

  deleteFriend = (e, friend) => {};

  render() {
    return (
      <div className="App">
        <Route exact path="/" component={DisplayFriends} />
        <Route
          path="/editfriend"
          render={props => (
            <EditFriend {...props} activeFriend={this.state.activeFriend} />
          )}
        />
      </div>
    );
  }
}

export default App;
