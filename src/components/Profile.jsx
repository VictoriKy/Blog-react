import React from "react";
import './Profile.css'
function Profile(){
    return(
      <div className='content'>
      <div>
        <img  src='https://catherineasquithgallery.com/uploads/posts/2021-02/1612765127_30-p-fon-goluboi-gorod-40.jpg'/>
      </div>
      <div>
        ava
      </div>
      <div>Post main</div>
      <div>New post</div>
      <div className="posts">
        <div className="item">post1</div>
        <div className="item">post2</div>
      </div>
    </div>
    )
}
export default Profile;