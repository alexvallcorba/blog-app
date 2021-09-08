import { useEffect, useState } from "react"
import {getPosts} from '../../services/Posts'
import Posts from '../../components/posts/Posts'

  const PostScreen = () => {

  const [posts, setPosts] = useState([])


  useEffect(() => {
    const fetchPosts = async () => {
      const allPosts = await getPosts()
      setPosts(allPosts)
    }
    fetchPosts()
  }, [])

  return (
    <div>
      {/* {posts.map((post, index) => {
        <Posts
          key={index}
          title={post.title}
          img_url={post.img_url}
          description={post.description}
        />
      })} */}
      
    </div>
  )
  }

  export default PostScreen


  