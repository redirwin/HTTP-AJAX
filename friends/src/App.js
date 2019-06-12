import React from "react";
import { Route } from "react-router-dom";

import DisplayFriends from "./components/DisplayFriends";
import AddFriend from "./components/AddFriend";
import "./App.scss";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      formInput: ""
    };
  }

  inputChangeHandler = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <Route exact path="/" component={DisplayFriends} />
        <Route
          path="/addfriend"
          render={props => (
            <AddFriend
              {...props}
              inputChangeHandler={this.inputChangeHandler}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
