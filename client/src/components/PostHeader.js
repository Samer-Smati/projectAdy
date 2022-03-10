import React from 'react'
import Likes from './Likes'
import Comments from './Comments'

function PostHeader({time,img,name,description,media,avatar,post_id}) {
  console.log(media?.slice(-4))
  if(media?.slice(-4) == '.png' || media?.slice(-4) == '.jpg' || media?.slice(-3) == '.jpeg'){
    var pimg = media;
  }else if(media?.slice(-4) == '.mp4'){
    var pvideo = media;
  }else{
    var paudio = media; 
  }
  return (
    <div className="Post">
      <div className="post-header">
          <div className="media">
            <div className="user_img">
              <img className="postImg" src={img ??"https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"}alt=""/>
            </div>
          <div className="Info">
            <div className="UserName">
              <a href="https://">{name}</a>
              <span>posted an update</span>
            </div>
            <div className="Time">{time}</div>
          </div>
          </div>
      </div>
      <div className="PostBody">
        <div className="Body">
          <p className="description">{description}</p>
          <div className="mypost">
            {pimg != '' ? <img src={`${media}`} alt="post_12"></img>
            :
            paudio != '' ?
          <audio src={`${media}`} controls=""></audio>
          :
          pvideo != '' ?
          <video src={`${media}`} controls=""></video>
          :
          ''
          }
          </div>
        </div>
        <div className="PostFooter">
          <div className="LikesComments">
            <Likes
            name="azerty"
            tag="@azer"
            />
            <Comments post_id={post_id} username={name} avatar={avatar} />
          </div>  
        </div>
      </div>
    </div>
  )
}

export default PostHeader