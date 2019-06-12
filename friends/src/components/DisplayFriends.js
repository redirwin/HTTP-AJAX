import React from "react";
import axios from "axios";

class DisplayFriends extends React.Component {
  constructor(props) {
    super(props);
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
    console.log(this.state.friends);
    return (
      <div className="friends-list">
        {this.state.friends.map(friend => (
          <div key={friend.id} className="friend-card">
            <h2>{friend.name}</h2>
            <p>age: {friend.age}</p>
            <p>email: {friend.email}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default DisplayFriends;
