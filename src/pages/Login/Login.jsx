import { React, useRef, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context';
import './login.css';
import * as actionTypes from '../../context/constants';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



export default function Login() {

    const userRef = useRef();
    const passRef = useRef();

    const { dispatch, isFetching } = useContext(Context);
    // const location = useLocation();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({ type: actionTypes.LOGIN_START });
        try {
            const result = await axios.post("auth/login", {
                username: userRef.current.value,
                password: passRef.current.value
            })
            dispatch({ type: actionTypes.LOGIN_SUCCESS, payload: result.data });
            
            navigate('/');


        } catch (error) {
            console.log(error);
            dispatch({ type: actionTypes.LOGIN_FAILURE });
        }

    }
    console.log();
    return (
        <div className='login'>
            <span className='LoginTitle'> Login</span>
            <form className='loginForm'>
                <label >Username</label>
                <input type="text" placeholder='Enter Your Username' ref={userRef} />
                <label >Password</label>
                <input type="password" placeholder='Enter Your Password' ref={passRef} />

                <button className='loginBtn' onClick={(e) => handleSubmit(e)} disabled={isFetching}>
                    Login  </button>
            </form>
            <button className="registerBtn">

                <Link to='/register' className='link'>
                    REGISTER
                </Link></button>
        </div>
    )
}
