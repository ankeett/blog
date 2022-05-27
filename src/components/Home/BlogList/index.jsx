import React from 'react'
import "./style.css"
import BlogItem from './BlogItem'

const BlogList = ({blogs}) => {
  return (
    <div className='BlogList-wrap'>
        {blogs.map(blog=>
        <BlogItem blog ={blog} id={blog.id}/>)}
    </div>
  )
}

export default BlogList