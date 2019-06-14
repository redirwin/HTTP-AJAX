import React from "react";

class EditFriend extends React.Component {
  state = {
    activeFriend: this.props.activeFriend
  };

  handleEditChange = e => {
    e.preventDefault();
    e.persist();
    this.setState(prevState => ({
      activeFriend: {
        ...prevState.activeFriend,
        [e.target.name]: e.target.value
      }
    }));
  };

  handleEditSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <>
        <form
          className="friend-input-form"
          onSubmit={e => this.handleSubmit(e)}
        >
          <input
            type="text"
            placeholder="name"
            name="name"
            value={this.state.activeFriend.name}
            onChange={this.handleEditChange}
          />
          <input
            type="text"
            placeholder="age"
            name="age"
            value={this.state.activeFriend.age}
            onChange={this.handleEditChange}
          />
          <input
            type="text"
            placeholder="email address"
            name="email"
            value={this.state.activeFriend.email}
            onChange={this.handleEditChange}
          />
          <button>Save Changes</button>
        </form>
      </>
    );
  }
}

export default EditFriend;
