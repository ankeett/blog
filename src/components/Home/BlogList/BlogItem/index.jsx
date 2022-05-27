import React from 'react'
import "./style.css"
import Chip from '../../../common/Chip'
import { Link } from 'react-router-dom'

const BlogItem = ({blog:{
    id,
    description,
    title,
    createdAt,
    authorName,
    authorAvatar,
    category,
    cover,
},
}) => {
  return (
    <div className='BlogItem-wrap'>
         <img src={cover} alt="cover" className='BlogItem-cover'/>
         <Chip label={category}/>
         <h3>{title}</h3>
         <p className='BlogItem-des'>{description}</p>

         <footer>
             <div className='BlogItem-author'>
                 <img src={authorAvatar} alt="avatar"/>
                 <div>
                     <h6>{authorName}</h6>
                     <p>{createdAt}</p>
                 </div>
             </div>

             <Link className='BlogItem-link' to={`/blog/${id}`}>➝</Link>
         </footer>

    </div>
  )
}

export default BlogItem