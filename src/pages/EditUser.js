import React, { useState,useEffect } from "react";
import { useNavigate,useParams } from 'react-router-dom'
import { updateSingleuser,getSingleuser } from '../redux/action';
import { useDispatch,useSelector } from 'react-redux'

const EditUser = () => {
    const navigate = useNavigate();
    const [error, setError] = useState('')
    const [nameError, setErrorName] = useState('')
    let dispatch = useDispatch();
    let {id} = useParams()
   
    const { user } = useSelector((state) => ({
        user: state.AllData.user,
    }));

    useEffect(() => {
        if(user){
         setUser({...user})
        }
     }, [user]);
 
     useEffect(() => {
         dispatch(getSingleuser(id));
     }, []);

    const [users, setUser] = useState({
        username: "",
        email: "",
        phone: "",
    });
  
    const { username, email, phone } = users;
    const onInputChange = e => {
        setUser({ ...users, [e.target.name]: e.target.value });
    };

    const onSubmit = async e => {
        e.preventDefault();
        if (!username || !email || !phone) {
            setError('Please required')
        } else if (!username.match('^[a-zA-Z ]*$')) {
            setErrorName('Please Only Charchter')
        }
        else {
            dispatch(updateSingleuser(users, id))
            navigate('/')
            setError('')
        }
    };

    return (
        <div className="container">
            <button onClick={() => navigate('/')} style={{ background: "red" }}>BackToHome</button>
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Add A User</h2>
                <span style={{ color: 'red', textAlign: 'center' }}>{error && error}</span>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Name"
                            name="username"
                            value={username}
                            onChange={e => onInputChange(e)}
                        />
                        {nameError && nameError}
                    </div>

                    <div className="form-group">
                        <input
                            type="email"
                            className="form-control form-control-lg"
                            placeholder="Enter Your E-mail Address"
                            name="email"
                            value={email}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Phone Number"
                            name="phone"
                            value={phone}
                            onChange={e => onInputChange(e)}
                        />
                    </div>

                    <button className="btn btn-primary btn-block">Add User</button>
                </form>
            </div>
        </div>
    );
};

export default EditUser;
