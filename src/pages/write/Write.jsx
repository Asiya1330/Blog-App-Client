import './write.css';
import { React, useRef, useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../context/Context'
import _ from 'underscore'

export default function Write() {

  const titleRef = useRef();
  const descRef = useRef();
  const [file, setFile] = useState('');
  const [error, setError] = useState(null);

  const { user, dispatch, isFetching } = useContext(Context);
  const navigate = useNavigate();
  useEffect(() => {
    setError(null)
  }, [file])
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      const newPostData = {
        title: titleRef.current.value,
        description: descRef.current.value,
        authorId: user._id
      }
      console.log(file);
      if (!file) {
        setError('Post thumbnail is required!')
        throw new Error(error)
      }
      try {
        const data = new FormData();
        const filename = Date.now() + file.name;
        data.append("name", filename)
        data.append("file", file)
        console.log(data);
        newPostData['postThumbnail'] = file.name
        await axios.post('/upload', data)
      } catch (e) {
        console.log(e);
      }

      const newPost = await axios.post("post/", newPostData)
      navigate(`/post/${newPost.data._id}`);
      console.log(titleRef, descRef, file.name);
    } catch (error) {
      console.log(error);
    }

  }
  return (
    <div className='write'>
      {file &&
        <img className='writeImg'
          src={URL.createObjectURL(file)} alt="" />
      }
      {
        error &&
        <div className="error" style={{ color: 'red' }}>{error}</div>
      }
      <form className='writePost' onSubmit={handleSubmit}>
        <div className="writeformGroup">
          <label htmlFor="fileInput">
            <i className='fileInputIcon fas fa-plus'></i>
          </label>
          <input type="file" name="" id="fileInput" hidden onChange={(e) => setFile(e.target.files[0])} />
          <input type="text" name="" id="" placeholder='Title' className='writeInputTitle' autoFocus={true} ref={titleRef} required />
        </div>
        <div className="writeformGroup">
          <textarea name="" id="" cols="30" rows="10" placeholder='Tell your stroy...' className='writePostInfo' ref={descRef} required></textarea>
        </div>
        <button className='writeSubmit' type='submit'> Publish</button>
      </form>
    </div>
  )
}
