import React from "react";
import PropTypes from "prop-types";
import "./user.scss";
import { Link } from "react-router-dom";

const UserItem = ({ user }) => {
  return (
    <tr>
      <td scope="row" data-label="Name">
        {user.name}
      </td>
      <td data-label="Company">{user.company.name}</td>
      <td data-label="Blog Posts">
        <Link to={`/${user.id}/posts/`}>Posts</Link>
      </td>
    </tr>
  );
};

UserItem.propTypes = {
    user:PropTypes.object,
};

export default UserItem;

