import React from 'react'
import './index.css'

const Profile = () => {
  return (
    <div>
      <div>contents</div>
      <div className="bg-image">
        <img
          src="https://images.unsplash.com/photo-1610809027249-86c649feacd5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          alt=""/>
      </div>

      <div>
        <div className='my-posts'>my posts</div>
        <div className='new-post'>new post</div>
        <div className='post'> post 1</div>
        <div className='post'> post 2</div>
        <div className='post'> post 3</div>
      </div>
    </div>
  )
}

export default Profile