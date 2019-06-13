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

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(response => {
        this.setState(() => ({ friends: response.data }));
      })
      .catch(error => {
        console.error("Server Error", error);
      });
  }

  addFriend = (e, friend) => {};

  editFriend = (e, friend) => {};

  deleteFriend = (e, friend) => {};

  render() {
    return (
      <div className="App">
        <Route
          exact
          path="/"
          render={props => (
            <DisplayFriends {...props} friends={this.state.friends} />
          )}
        />
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
