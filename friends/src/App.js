import React from "react";
import { Route } from "react-router-dom";

import DisplayFriends from "./components/DisplayFriends";
import EditFriend from "./components/EditFriend";
import AddFriend from "./components/AddFriend";

import "./App.scss";
import axios from "axios";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      activeFriend: ""
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

  addFriend = newFriend => {
    // console.log(newFriend);
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

  // editFriend = (e, friend) => {};

  // deleteFriend = (e, friend) => {};

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
          path="/addfriend"
          render={props => <AddFriend {...props} addFriend={this.addFriend} />}
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
