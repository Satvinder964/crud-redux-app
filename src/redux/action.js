import * as types from "./actionType";
import axios from "axios";


export const loadUsers = () => async (dispatch) => {
  const result = await axios.get("http://localhost:3000/users");
  dispatch({
    type: types.GET_USERS,
    payload: result.data,
  });
};

export const DeleteUsers = (id) => async (dispatch) => {
  await axios.delete(`http://localhost:3000/users/${id}`);
  dispatch({
    type: types.DELETE_USER,
    payload: id,
  });
  dispatch(loadUsers());
};

export const addUsers = (user) => async (dispatch) => {
 await axios.post("http://localhost:3000/users/", user);
  dispatch({
    type: types.ADD_USER,
    payload: user,
  });
  dispatch(loadUsers());
};

export const getSingleuser = (id) => async (dispatch) => {
  const result = await axios.get(`http://localhost:3000/users/${id}`);
  dispatch({
    type:  types.GET_SINGLE_USER,
    payload: result.data,
  });
};

export const updateSingleuser = (user,id) => async (dispatch) => {
  const result = await axios.put(`http://localhost:3000/users/${id}`,user)
  dispatch({
    type:  types.GET_SINGLE_USER,
    payload: result.data,
  });
  dispatch(loadUsers());
};


// export const updateSingleuser = (user,id) => {
//   return function (dispatch) {
//     axios
//       .put(`http://localhost:3000/users/${id}`,user)
//       .then((resp) => {
//         console.log(resp)
//         dispatch(updateUserAddded());
//       })
//       .catch((error) => console.log(error, "error"));
//   };
// };

export const blogPost = () => async (dispatch) => {
  const result = await axios.get("https://insights.invsta.com/wp-json/wp/v2/posts");
  dispatch({
    type: types.GET_POST,
    payload: result.data,
  });
};