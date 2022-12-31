import React, { useContext, useEffect, useState } from 'react'
import './singlePost.css'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios';
import moment from 'moment';
import { Context } from '../../context/Context';


export default function SinglePost() {
    const { user } = useContext(Context);

    const location = useLocation('');
    const navigate = useNavigate();

    const [post, setPost] = useState([]);
    const [username, setUsername] = useState('');

    useEffect(() => {
        const getPost = async () => {
            const result = await axios.get(location.pathname);
            const userData = await axios.get(`/user/${result.data.authorId}`);
            setPost(result.data);
            setUsername(userData.data.username);
        }
        getPost();
    }, [location.pathname, username]);

    const handleDelete = async () => {
        try {
            await axios.delete(location.pathname, {
                data: { authorId: user._id }
            });
            navigate('/')
        }
        catch (e) {
            console.log(e.response.data);
        }
    }
    return (
        <div className='singlePost'>
            <div className="singlePostWraper">
                <img className='singlePostImg'
                    src={post.postThumbnail ? `http://localhost:3000/images/${post.postThumbnail}` : `https://dummyimage.com/250/ffffff/000000`} alt="" />
                <h1 className='singlePostTitle'>{post.title}
                    <div className="singlePostEdit">
                        <i className="singlePostIcon far fa-edit" ></i>
                        <i className="singlePostIcon far fa-trash-alt" onClick={handleDelete}></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>{username}</b></span>
                    <span className="singlePostDate">{moment(post.createdAt).fromNow()}</span>
                </div>
                <p className='singlePostBody'>
                    {post.description}
                </p>
            </div>
        </div>
    )
}
