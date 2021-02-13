import {FETCH_USERS} from "./types"

export const fetchUsers = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users =>{
        console.log(users,"users")
        dispatch({
          type: FETCH_USERS,
          payload: users
        })
    }
      );
  };
