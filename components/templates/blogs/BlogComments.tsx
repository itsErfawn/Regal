import Container from '@/components/modules/container/Container'
import React from 'react'
import BlogCommentItem from './BlogCommentItem'

function BlogComments() {
  return (
        <div className="col-span-12 my-5">
            <h4 className='mb-6'>نظرات کاربران درباره پست</h4>
            <div className="blog-comment-wrapper">
            <BlogCommentItem/>
            <BlogCommentItem/>
            <BlogCommentItem/>
            <BlogCommentItem/>
            <BlogCommentItem/>
            </div>
        </div>
  )
}

export default BlogComments