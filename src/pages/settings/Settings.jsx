import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import './settings.css'

export default function Settings() {
    return (
        <div className='settings'>
            <div className="settingWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update ytour Acc</span>
                    <span className="settingsDeleteTitle">Deletee ytour Acc</span>
                </div>
                <form className='settingsForm'>
                    <label>Profile Pic</label>
                    <div className="settingsProfilePic">
                        <img className='settingProfileImage' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI3vvVZ-pOGsyhaNEm9s-tm96lh7OGxJrpPQ&usqp=CAU" alt="" />
                        <label htmlFor="filePic">
                            <i className='settingsPPIcon far fa-user-circle'></i>
                        </label>
                        <input type="file" name="" id="filePic" hidden />
                    </div>
                        <label >UserName</label>
                        <input type="text" name="" id="" placeholder='Asiya1330' />
                        <label >Email</label>
                        <input type="email" name="" id="" placeholder='asiya@gmail.com' />
                        <label >Password</label>
                        <input type="password" name="" id="" />

                        <button className='settingSubmit'>  Update  </button>
                </form>


            </div>
            <Sidebar />
        </div>
    )
}
