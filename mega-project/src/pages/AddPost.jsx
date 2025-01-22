import React from 'react'
import PostForm from '../components/post-form/PostForm'
import Container_ from '../components/container/Container'
function AddPost() {
  return (
    <div className='py-8'>
      <Container>
        <PostForm />
      </Container>
    </div>
  )
}

export default AddPost
