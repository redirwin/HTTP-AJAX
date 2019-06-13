import React from "react";
import { NavLink } from "react-router-dom";

class EditFriend extends React.Component {
  state = {
    friend: this.props.activeFriend || {
      name: "",
      age: "",
      email: ""
    }
  };

  componentDidUpdate(prevProps) {
    if (
      this.props.activeFriend &&
      prevProps.activeFriend !== this.props.activeFriend
    ) {
      this.setState({
        friend: this.props.activeFriend
      });
    }
  }

  handleChange = e => {
    e.preventDefault();
    let value = e.target.value;
    this.setState({
      [e.target.name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.props.activeFriend) {
      this.props.updateFriend(e, this.state.friend);
    } else {
      this.props.addItem(e, this.state.friend);
    }
    this.setState = {
      name: "",
      age: "",
      email: ""
    };
  };

  render() {
    console.log(this.props);
    return (
      <>
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
        <form className="friend-input-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="name"
            name="nameInput"
            value={this.state.friend.name}
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="age"
            name="ageInput"
            value={this.state.friend.age}
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="email address"
            name="emailInput"
            value={this.state.friend.email}
            onChange={this.handleChange}
          />
          <button>{`${
            this.props.activeFriend ? "Edit" : "Add"
          } Friend`}</button>
        </form>
      </>
    );
  }
}

export default EditFriend;
