import React from 'react'
import './write.css'

export default function Write() {
  return (
    <div className='write'>
        <img className='writeImg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFaF7BYd2iB4WGRrOC0k_D_FGasBJDxF6828D1LBei&s" alt="" />
      <form className='writePost'> 
      <div className="writeformGroup">
        <label htmlFor="fileInput">
            <i className='fileInputIcon fas fa-plus'></i>
        </label>
        <input type="file" name="" id="fileInput" hidden/>
        <input type="text" name="" id="" placeholder='Title' className='writeInputTitle' autoFocus={true}/>
      </div>
      <div className="writeformGroup">
        <textarea name="" id="" cols="30" rows="10" placeholder='Tell your stroy...' className='writePostInfo'></textarea>
      </div>
      <button className='writeSubmit'> Publish</button>
      </form> 
    </div>
  )
}
