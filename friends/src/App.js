import React from "react";
import { Route } from "react-router-dom";

import DisplayFriends from "./components/DisplayFriends";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={DisplayFriends} />
      </div>
    );
  }
}

export default App;
