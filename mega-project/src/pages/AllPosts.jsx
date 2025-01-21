import React, { useState, useEffect } from 'react'
import { Container, PostCard } from '../components'
import service from '../appwrite/config'
import
  function AllPosts() {
    const [post, setPost] = useState([]);
    useEffect(() => {
      service.getPosts([]).then((posts) => {
        if (posts) {
          setPosts(posts.documents);
        }
      });
    })
    return (
      <div>
        <Container>
          <div className='flex flex-wrap'>
            {posts.map((post) => (
              <div key={post.$id} className='p-3 w-1/4'>
                <PostCard post={post} />
              </div>
            ))}
          </div>
        </Container>
      </div>
    )
  }

export default AllPosts
