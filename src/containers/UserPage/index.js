import React from 'react';
import { connect } from 'react-redux';
import UserList from './List';

function UserPage() {
  return (
    <UserList />
  );
}

export default connect()(UserPage);
