import React from 'react'
import './header.css';

export default function Header() {
    return (
        <div className='header'>
            <div className='headerTitles'>
                <span className='headerTitlesm'>Rac</span>
                <span className='headerTitleLg'>Blog</span>

            </div>
            <img className="headerImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfNBNeFIouVKu8Z6_A19lkAW6MGAx8E2mLug&usqp=CAU" alt="" />
        </div>
    )
}
