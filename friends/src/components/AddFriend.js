import React from "react";
import { NavLink } from "react-router-dom";

class AddFriends extends React.Component {
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
    alert("submitting!");
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
        <form className="friend-input-form" onSubmit={this.handleSubmit()}>
          <input
            type="text"
            placeholder="name"
            name="nameInput"
            value={this.props.name}
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="age"
            name="ageInput"
            value={this.props.age}
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="email address"
            name="emailInput"
            value={this.props.email}
            onChange={this.handleChange}
          />
          <button>Add New Friend</button>
        </form>
      </>
    );
  }
}

export default AddFriends;
