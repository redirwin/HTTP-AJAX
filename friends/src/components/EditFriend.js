import React from "react";

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
    this.setState({
      [e.target.name]: e.target.value
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
    return (
      <>
        <form className="friend-input-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="name"
            name="name"
            value={this.state.friend.name}
            onChange={name => this.handleChange(name)}
          />
          <input
            type="text"
            placeholder="age"
            name="age"
            value={this.state.friend.age}
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="email address"
            name="email"
            value={this.state.friend.email}
            onChange={this.handleChange}
          />
          <button>Edit Friend</button>
        </form>
      </>
    );
  }
}

export default EditFriend;
