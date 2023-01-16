import axios from 'axios';
import React, { useContext, useEffect, useRef, useState } from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import { Context } from '../../context/Context'
import './settings.css';
import * as actionTypes from '../../context/constants'

export default function Settings() {

    const { user, dispatch } = useContext(Context);

    const [username, setUsername] = useState(user.username);
    const [email, setEmail] = useState(user.email);
    const [password, setPass] = useState(null);
    const [CPass, setCPass] = useState(null);

    const [error, setError] = useState(false);

    useEffect(() => {
        if (password != CPass) {
            setError('Password and confirm Password should be same!')
        }
        else {
            setError(false)
        }
    }, [error, CPass, password])


    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            setError(false);
            const updatedUser = {
                username,
                email
            }
            if (!error && password) updatedUser['password'] = password;
            const userRec = await axios.put(`/user/${user._id}`, updatedUser);
            dispatch({ type: actionTypes.LOGIN_SUCCESS, payload: userRec.data });
        }
        catch (error) {
            setError(error.message)
            console.log(error.message);
            dispatch({ type: actionTypes.LOGIN_FAILURE });

        }
    }
    return (
        <div className='settings'>
            <div className="settingWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update your Account</span>
                    <span className="settingsDeleteTitle">Delete your Account</span>
                </div>
                <form className='settingsForm' onSubmit={handleSubmit}>
                    <label>Profile Pic</label>
                    <div className="settingsProfilePic">
                        <img className='settingProfileImage' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI3vvVZ-pOGsyhaNEm9s-tm96lh7OGxJrpPQ&usqp=CAU" alt="" />
                        <label htmlFor="filePic">
                            <i className='settingsPPIcon far fa-user-circle'></i>
                        </label>
                        <input type="file" name="" id="filePic" hidden />
                    </div>
                    <label >UserName</label>
                    <input type="text" name="" id="" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <label >Email</label>
                    <input type="email" name="" id="" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <label >Password</label>
                    <input type="password" name="" id="Pass" onChange={(e) => setPass(e.target.value)} />
                    <label >Confirm Password</label>
                    <input type="password" name="" id="CPass" onChange={(e) => setCPass(e.target.value)} />

                    <button className='settingSubmit' type='submit' disabled={error}>  Update  </button>
                </form>
                {
                    error &&
                    <div className='error' style={{ color: 'red' }}>{error}</div>}
            </div>
            <Sidebar />
        </div>
    )
}
