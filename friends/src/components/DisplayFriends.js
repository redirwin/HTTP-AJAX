import React from "react";
import axios from "axios";

import { NavLink } from "react-router-dom";

class DisplayFriends extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(response => {
        this.setState(() => ({ friends: response.data }));
      })
      .catch(error => {
        console.error("Server Error", error);
      });
  }

  render() {
    return (
      <>
        <div className="friends-list">
          <NavLink to="/addfriend" className="nav-link friend-card">
            <h2>Add Friend</h2>
          </NavLink>
          {this.state.friends.map(friend => (
            <div key={friend.id} className="friend-card">
              <h2>{friend.name}</h2>
              <p>age: {friend.age}</p>
              <p>email: {friend.email}</p>
              <div className="card-edit-links">
                <NavLink to="/editfriend">Edit</NavLink>
                <NavLink>Delete</NavLink>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default DisplayFriends;
