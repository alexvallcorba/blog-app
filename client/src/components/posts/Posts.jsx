import { Link } from 'react-router-dom'
import './Posts.css'



export const Posts = (props) => {



  return (
    <>
      <Link clasName='post' to={`/posts/${props._id}`}>
        <img className='post-image' src={props.img_url} alt={props.title} />
        <div className="post-title">{props.title}</div>
        <div className="post-description">{props.descripton}</div>
      </Link>
      </>
  )
}
