import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadUsers, DeleteUsers } from "../redux/action";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
export default function Home() {
    let dispatch = useDispatch();
    const navigate = useNavigate();
    const { users } = useSelector((state) => ({
        users: state.AllData.users,
    }));

    useEffect(() => {
        dispatch(loadUsers());
    }, []);

    const HandleDelete = (id) => {
        if (window.confirm("Please Confirm Delete Yes or No")) {
            dispatch(DeleteUsers(id));
        }
    };
    const list = users && users.slice().reverse();
    return (
        <div>
            <>
                <Link to="/AddUser">
                    <button style={{ background: "Green" }}> Add User</button>
                </Link>
                <table id="customers">
                    <tr>
                        <th>UserName</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Delete</th>
                        <th>Edit</th>
                    </tr>
                    <tbody>
                        {list &&
                            list.map((user, index) => (
                                <tr key={index}>
                                    <td> {user.username}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                    <td className="Delete" onClick={() => HandleDelete(user.id)}>Delete</td>
                                    <td className="Delete" onClick={() => navigate(`/editUser/${user.id}`)}>Edit</td>
                                </tr>
                            ))}
                    </tbody>
                </table>


            </>
        </div>
    );
}

//   const [list, updateList] = useState([]);
//   useEffect(() => {
//     const listSaleOnly =
//       users &&
//       users.length > 0 &&
//       users.filter((n) => n.username !== "Antonette");
//     if (listSaleOnly && listSaleOnly.length > 0) {
//       updateList(listSaleOnly);
//     } else {
//       updateList(users);
//     }
//   }, [users]);