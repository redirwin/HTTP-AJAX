import React from "react";

import { NavLink } from "react-router-dom";

class DisplayFriends extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: []
    };
  }

  render() {
    return (
      <>
        <NavLink to="/editfriend" className="nav-link">
          Add Friend
        </NavLink>
        <div className="friends-list">
          {this.state.friends.map(friend => (
            <div key={friend.id} className="friend-card">
              <h2>{friend.name}</h2>
              <p>age: {friend.age}</p>
              <p>email: {friend.email}</p>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default DisplayFriends;
