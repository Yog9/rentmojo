import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./user.scss";
import { connect } from "react-redux";
import { fetchUsers } from "../../actions/userActions";
import { itemsLoading } from "../../actions/itemsLoadingActions";
import UserItem from "./UserItem";
import SearchBar from "../searchBar";
import Loading from "../Loading/Loading"

const User = ({ fetchUsers, users, itemsLoading, isLoading }) => {
  const [inputName, setInputName] = useState("");
  const [inputCompany, setInputCompany] = useState("");
  const [userSet, setUserSet] = useState(false);
  useEffect(() => {
    fetchUsers();
  }, []);
  const [usersFiltered, setUsersFiltered] = useState(users);

  if (!isLoading && !userSet) {
    setUsersFiltered(users);
    setUserSet(true);
  }

  let filteredName = users;
  let filteredCompany = users;
  const userItems = usersFiltered.map((user) => (
    <UserItem key={user.id} user={user} />
  ));
  const updateName = async (input) => {
    let trimInput = input.trim();
    if (trimInput) {
      filteredName = users.filter((user) => {
        return user.name.toLowerCase().includes(trimInput.toLowerCase());
      });
    }
    setInputName(input);
    setUsersFiltered(filteredName);
  };

  const updateCompanyName = async (input) => {
    let trimInput = input.trim();
    if (trimInput) {
      filteredCompany = users.filter((user) => {
        return user.company.name
          .toLowerCase()
          .includes(trimInput.toLowerCase());
      });
    }
    setInputCompany(input);
    setUsersFiltered(filteredCompany);
  };

  return (
    isLoading?<Loading/>:(
    <React.Fragment>
      <SearchBar
        input={inputName}
        onChange={updateName}
        placeholder="Search Name"
      />
      <SearchBar
        input={inputCompany}
        onChange={updateCompanyName}
        placeholder="Search Company"
      />
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
    )
  );
};

User.propTypes = {
  itemsLoading:PropTypes.func,
  fetchUsers:PropTypes.func,
  users:PropTypes.array,
  isLoading:PropTypes.bool
};

function mapStateToProps(state) {
  return { users: state.users.users, isLoading: state.isLoading.isLoading };
}

export default connect(mapStateToProps, { fetchUsers, itemsLoading })(User);
