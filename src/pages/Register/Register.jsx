import React from 'react'
import { Link } from 'react-router-dom'
import './register.css'
export default function register() {
    return (
        <div className='Register'>
            <span className='RegisterTitle'> Register</span>
            <form className='RegisterForm'>
                <label >Username</label>
                <input type="text" placeholder='Enter Your Username' />
                <label >Email</label>
                <input type="email" placeholder='Enter Your Email' />
                <label >Password</label>
                <input type="password" placeholder='Enter Your Password' />

                <button className='RegisterBtn'>
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
