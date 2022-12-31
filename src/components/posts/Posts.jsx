import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Post from '../post/Post'
import './posts.css'

export default function Posts() {

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const result = await axios.get('/post/list');
      setPosts(result.data.record);
    }
    fetchPosts();
  }, [])

  return (
    <div className='posts'>
      {
      posts.map(post => {
          return <Post key={post._id} post={post} />
        })
      }
    </div>
  )
}
