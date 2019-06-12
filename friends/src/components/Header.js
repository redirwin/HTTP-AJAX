import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <Link to="/addfriend">Add Friend</Link>
      </div>
    );
  }
}

export default Header;
