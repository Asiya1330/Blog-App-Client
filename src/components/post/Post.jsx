import React from 'react'
import { Link } from 'react-router-dom'
import './post.css'
import moment from 'moment';

export default function Post({ post }) {

  return (
    <div className='post'>
      <img className='postImg'
        src={post.postThumbnail ? `http://localhost:3000/images/${post.postThumbnail}` : `https://dummyimage.com/250/ffffff/000000`}
        alt="" />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
                    </div>
        <span className="postTitle">
          <Link className='link' to={`/post/${post._id}`}>
            {post.title}
          </Link>
        </span>
        <hr />
        <span className="postDate">
          {moment(post.createdAt).fromNow()}
        </span>
        </div>
        <p className="postBody">
        {post.description}
        </p>
    </div>
  )
}
