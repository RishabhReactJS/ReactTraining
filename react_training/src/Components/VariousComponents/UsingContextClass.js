import React, { Component } from "react";
import { UserContext } from "../../Context";

class ClassComponentWithContext extends Component {
  render() {
    return (
      <UserContext.Consumer>
        {({ username, updateUser }) => (
          <div>
            <h2>Class Component</h2>
            <p>Username: {username}</p>
            <button onClick={() => updateUser("NewUser")}>Update User</button>
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}

export default ClassComponentWithContext;
