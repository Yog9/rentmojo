import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "./user.scss";
import { connect } from "react-redux";
import { fetchUsers } from "../../actions/userActions";
import UserItem from "./UserItem";

const User = ({ fetchUsers, users }) => {
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);
  
  const userItems = users.map((user) => <UserItem key={user.id} user={user} />);

  return (
    <React.Fragment>
      <table>
        <caption>Users</caption>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Company</th>
            <th scope="col">Blog Posts</th>
          </tr>
        </thead>
        <tbody>{userItems}</tbody>
      </table>
    </React.Fragment>
  );
};

User.propTypes = {};

const mapStateToProps = (state) => ({
  users: state.users.users,
});
export default connect(mapStateToProps, { fetchUsers })(User);
