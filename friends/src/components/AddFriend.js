import React from "react";

class AddFriend extends React.Component {
  state = {
    friend: "",
    name: "",
    age: "",
    email: ""
  };

  handleAddChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleAddSubmit = e => {
    e.preventDefault();
    const newFriend = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    };
    this.props.addFriend(newFriend);
  };

  render() {
    // console.log(this.props);
    return (
      <>
        <form className="friend-input-form" onSubmit={this.handleAddSubmit}>
          <input
            type="text"
            placeholder="name"
            name="name"
            value={this.state.name}
            onChange={this.handleAddChange}
          />
          <input
            type="text"
            placeholder="age"
            name="age"
            value={this.state.age}
            onChange={this.handleAddChange}
          />
          <input
            type="text"
            placeholder="email address"
            name="email"
            value={this.state.email}
            onChange={this.handleAddChange}
          />
          <button>Add Friend</button>
        </form>
      </>
    );
  }
}

export default AddFriend;
