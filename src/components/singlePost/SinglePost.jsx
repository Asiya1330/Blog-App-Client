import React from 'react'
import './singlePost.css'

export default function SinglePost() {
    return (
        <div className='singlePost'>
            <div className="singlePostWraper">
                <img className='singlePostImg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFaF7BYd2iB4WGRrOC0k_D_FGasBJDxF6828D1LBei&s" alt="" />
                <h1 className='singlePostTitle'>Lorem ipsum dolor sit amet consectetur.

                    <div className="singlePostEdit">
                        <i className="singlePostIcon far fa-edit"></i>
                        <i className="singlePostIcon far fa-trash-alt"></i>

                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>Asiya</b></span>
                    <span className="singlePostDate">1 hour ago</span>

                </div>
                <p className='singlePostBody'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore corporis suscipit repudiandae obcaecati officia dolorem maxime dolore, et iste voluptatum adipisci. Doloribus, labore! Consequatur dolorem non dolore quo nulla est!Lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et magnam neque, harum dolorum fuga eveniet non fugit corrupti, adipisci deleniti quos amet maxime corporis? Deleniti quae ad beatae iste consectetur.
                </p>
            </div>
        </div>
    )
}
