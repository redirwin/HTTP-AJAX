import React from "react";
import { Route } from "react-router-dom";
import axios from "axios";

import DisplayFriends from "./components/DisplayFriends";
import EditFriend from "./components/EditFriend";
import AddFriend from "./components/AddFriend";

import "./App.scss";

class App extends React.Component {
  state = {
    activeFriend: ""
  };

  addFriend = newFriend => {
    axios
      .post("http://localhost:5000/friends", newFriend)
      .then(response => {
        this.setState({
          friends: response.data
        });
        this.props.history.push("/");
      })
      .catch(err => {
        console.log(err);
      });
  };

  setEditForm = (e, friend) => {
    // console.log(friend);
    e.preventDefault();
    this.setState({
      activeFriend: friend
    });
    this.props.history.push(`/editfriend/${friend.id}/${friend.name}`);
  };

  // deleteFriend = (e, friend) => {};

  render() {
    return (
      <div className="App">
        <Route
          exact
          path="/"
          render={props => (
            <DisplayFriends {...props} setEditForm={this.setEditForm} />
          )}
        />
        <Route
          path="/addfriend"
          render={props => <AddFriend {...props} addFriend={this.addFriend} />}
        />
        <Route
          path="/editfriend/:id/:name"
          render={props => (
            <EditFriend {...props} activeFriend={this.state.activeFriend} />
          )}
        />
      </div>
    );
  }
}

export default App;
