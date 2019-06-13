import React from "react";
import { Link } from "react-router-dom";

class AddFriends extends React.Component {
  inputChangeHandler = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <>
        <Link to="/" className="nav-link">
          Home
        </Link>
        <form
          className="friend-input-form"
          onSubmit={event => this.props.addFriend(event)}
        >
          <input
            type="text"
            placeholder="name"
            name="nameInput"
            value={this.props.name}
            onChange={event => this.inputChangeHandler(event)}
          />
          <input
            type="text"
            placeholder="age"
            name="ageInput"
            value={this.props.age}
            onChange={event => this.inputChangeHandler(event)}
          />
          <input
            type="text"
            placeholder="email address"
            name="emailInput"
            value={this.props.email}
            onChange={event => this.inputChangeHandler(event)}
          />
          <button>Add New Friend</button>
        </form>
      </>
    );
  }
}

export default AddFriends;
