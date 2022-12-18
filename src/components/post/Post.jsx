import React from 'react'
import './post.css'
export default function Post() {
  return (
    <div className='post'>
      <img className='postImg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFaF7BYd2iB4WGRrOC0k_D_FGasBJDxF6828D1LBei&s" alt="" />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
                    </div>
        <span className="postTitle">
            Lorem ipsum dolor
        </span>
        <hr />
        <span className="postDate">
            1 hour ago
        </span>
        </div>
        <p className="postBody">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus totam culpa cupiditate? Debitis, quia aliquid. Reiciendis earum illo temporibus at eius, architecto quia consequatur corrupti eos eveniet similique a nobis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus vero, pariatur fuga mollitia assumenda dolor, unde temporibus quibusdam alias quidem itaque quas distinctio! Debitis illo nobis placeat ea aspernatur non!.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, corrupti culpa cum beatae, veniam explicabo totam obcaecati nostrum, quo doloribus voluptas eaque. Corporis magni temporibus fugit atque assumenda officia doloremque.
        </p>
    </div>
  )
}
