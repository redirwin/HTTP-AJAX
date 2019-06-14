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
    e.preventDefault();
    this.setState({
      activeFriend: friend
    });
    this.props.history.push(`/editfriend/${friend.id}`);
  };

  editFriend = (e, editedFriend) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/friends/${editedFriend.id}`, editedFriend)
      .then(res => {
        this.setState({
          activeFriend: "",
          friends: res.data
        });
        this.props.history.push("/");
      })
      .catch(err => {
        console.log(err);
      });
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
          path="/editfriend/:id"
          render={props => (
            <EditFriend
              {...props}
              activeFriend={this.state.activeFriend}
              editFriend={this.editFriend}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
