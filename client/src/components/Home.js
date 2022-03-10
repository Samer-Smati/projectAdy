import React,{useEffect} from 'react'
import { useDispatch,useSelector} from 'react-redux'
import {getAllPosts,getAllComments,commentDeleted,deletePost} from '../Redux/Action/Action'
import PostHeader from './PostHeader'
import Posts from './posts/post'
function Home({img,name,post,date}) {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllPosts())
    dispatch(getAllComments())
  }, [])
  const deletComment = (ID) => {
    dispatch(commentDeleted(ID))
  }
  const deletedPost = (ID) => {
    dispatch(deletePost(ID))
  }
  
  const posts = useSelector((state) => state.UserReducer.posts)
  const comments = useSelector((state) => state.UserReducer.comments)
  const current_user = JSON.parse(localStorage.getItem('current_user'))
  return (
    <div>
      <div>
        <div className="d-flex justify-content-center m-3">
          <Posts />
        </div>
          {posts?.map(data => 
          <div className="Home">
            <div className="postHeader">
              <div className="btn" onClick={() => deletedPost(data._id)}><i class="fas fa-trash-alt"></i></div>
                <div className="activity-time">{data.email}</div>
            </div>
            <div >
              <PostHeader time={data.createdAt} avatar={data.avatar} post_id={data._id} description={data.description} name={data.username} media={data.media} />
              {comments?.map(comment => {
                if(comment.post_id == data._id) {
                  
                  return(
                    <div className='comment'> 
                      <span className="">{comment.avatar}</span>
                      <span className="">{comment.username}</span>
                      <span className="">{comment.comment}</span>
                      <span className="">{comment.createdAt}</span>
                      <span className="action d-flex">
                        {comment.username == current_user.username ?
                        <div className='d-flex justify-content-around'>
                          <span className="btn" onClick={()=> deletComment(comment._id)}> <i class="fas fa-trash-alt"></i></span>
                          <span className="btn"><i class="fas fa-cog"></i></span>
                        </div>
                         : 
                         current_user.role == 'admin' || current_user.username == data.username ?
                         <div className='d-flex justify-content-around'>
                           <span className="btn" onClick={()=> deletComment(comment._id)}> <i class="fas fa-trash-alt"></i></span>
                         </div>
                         :
                         ''
                         }
                        
                      
                      </span>
                    </div> 
                  )
                }
                 
              }
                
                ) }
            </div>
          </div>
          )}
      </div>
    </div>
  )
}

export default Home