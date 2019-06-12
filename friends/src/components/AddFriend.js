import React from "react";
import { Link } from "react-router-dom";

class AddFriends extends React.Component {
  render() {
    return (
      <>
        <Link to="/">Home</Link>
        <form classname="friend-input-form">
          <input type="text" placeholder="name" name="nameInput" />
          <input type="text" placeholder="age" name="ageInput" />
          <input type="text" placeholder="email address" name="emailInput" />
          <button>Add New Friend</button>
        </form>
      </>
    );
  }
}

export default AddFriends;
