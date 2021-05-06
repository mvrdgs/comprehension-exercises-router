import React, { Component } from 'react';

class Users extends Component {
  render() {
    const { greetingMessage, match } = this.props;
    const { id } = match.params;
    return (
      <div>
        <h2>Users</h2>
        <p> { greetingMessage }{ id ? ` ${id}` : null }, this is my awesome Users component </p>
      </div>
    );
  }
};

export default Users;
