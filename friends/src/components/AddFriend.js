import React from "react";
import { Link } from "react-router-dom";

const AddFriends = props => {
  //   console.log(props);
  return (
    <>
      <Link to="/">Home</Link>
      <form className="friend-input-form">
        <input
          type="text"
          placeholder="name"
          name="nameInput"
          onChange={event => props.inputChangeHandler(event)}
        />
        <input
          type="text"
          placeholder="age"
          name="ageInput"
          onChange={event => props.inputChangeHandler(event)}
        />
        <input
          type="text"
          placeholder="email address"
          name="emailInput"
          onChange={event => props.inputChangeHandler(event)}
        />
        <button>Add New Friend</button>
      </form>
    </>
  );
};

export default AddFriends;
