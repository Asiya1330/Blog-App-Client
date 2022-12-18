import React from 'react'
import './sidebar.css'

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>ABOUT ME</span>
        <img src="https://images.unsplash.com/photo-1526385159909-196a9ac0ef64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9ybmluZ3xlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad modi et sint aliquid voluptatem dicta iste necessitatibus magni odio.</p>
      </div>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>CATEGORIES</span>
        <div className='sidebarList'>
          <li className='sidebarListItem'>Life</li>
          <li className='sidebarListItem'>Music</li>
          <li className='sidebarListItem'>Sports</li>
          <li className='sidebarListItem'>Tech</li>
          <li className='sidebarListItem'>Cinema</li>

        </div>
      </div>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>FOLLOWUS</span>
        <div className='sidebarSocial'>

          <i className="sidebarIcon fa-brands fa-square-facebook"></i>
          <i className="sidebarIcon fa-brands fa-square-twitter"></i>
          <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
          <i className="sidebarIcon fa-brands fa-square-instagram"></i>

        </div>
      </div>
    </div>
  )
}
