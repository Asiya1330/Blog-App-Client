import React from 'react';
import './index.css'


export default function Modal() {

    const handleSubmit = (e) => {
        e.preventDefault();

    }
    return (
        <div className='modalContainer'>
            <div className='modalWrapper'>
                
                <form className='upPost' onSubmit={handleSubmit}>
                    {/* <label for="title">
                        Title
                    </label> */}
                    <input className='postUpInp' type="text" id="title" placeholder='Title of your post' />
                    <br />
                    {/* <label for="desc">
                        Description
                    </label> */}
                    <input className='postUpInp' type="text" id="desc" placeholder='Write detailed description of your post...' />
                    <br />
                    <button className='postUpdateBtn' type='submit'>Update</button>
                </form>
            </div>
        </div>
    )
}
