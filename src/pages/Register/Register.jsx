import { React, useRef, useContext } from 'react'
import { Link } from 'react-router-dom'
import './register.css';
import * as actionTypes from '../../context/constants'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../context/Context'

export default function Register() {

    const usernameRef = useRef();
    const passwordRef = useRef();
    const emailRef = useRef();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("auth/register", {
                username: usernameRef.current.value,
                password: passwordRef.current.value,
                email: emailRef.current.value
            })
            navigate('/login');
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className='Register'>
            <span className='RegisterTitle'> Register</span>
            <form className='RegisterForm'>
                <label >Username</label>
                <input type="text" placeholder='Enter Your Username' ref={usernameRef} />
                <label >Email</label>
                <input type="email" placeholder='Enter Your Email' ref={emailRef} />
                <label >Password</label>
                <input type="password" placeholder='Enter Your Password' ref={passwordRef} />

                <button className='RegisterBtn' onClick={handleSubmit}>
                    SignUp
                </button>
            </form>
            <button className="regloginBtn">
                <Link to='/login' className='link'>
                    Login
                </Link>
            </button>
        </div>
    )
}
