import React from "react";
import { Link } from "react-router-dom";

const AddFriends = props => {
  return (
    <>
      <Link to="/" className="nav-link">
        Home
      </Link>
      <form
        className="friend-input-form"
        onSubmit={event => props.addFriend(event)}
      >
        <input
          type="text"
          placeholder="name"
          name="nameInput"
          value={props.name}
          onChange={event => props.inputChangeHandler(event)}
        />
        <input
          type="text"
          placeholder="age"
          name="ageInput"
          value={props.age}
          onChange={event => props.inputChangeHandler(event)}
        />
        <input
          type="text"
          placeholder="email address"
          name="emailInput"
          value={props.email}
          onChange={event => props.inputChangeHandler(event)}
        />
        <button>Add New Friend</button>
      </form>
    </>
  );
};

export default AddFriends;
