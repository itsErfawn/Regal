import { blogType } from '@/types/blogs'
import Link from 'next/link'
import React from 'react'

function BlogCard({blog}:{blog:blogType}) {
  let tags=blog.tags.split(',')
  return (
    <Link href={`/blogs/${blog.title.replace(/ /g, '-')}`} className='blog-card' >
        <img src="/assets/images/blog.png" className='blog-card-image'  />
        <div className="px-4">
        <h6 className='blog-card-title ' >{blog.title}</h6>
        <p className='body-4 text-neutral-10' >{blog.summery}</p>
            <p className='caption-1 blog-card-caption' >
            {blog.date_added}
            <span className='px-2' >|</span>
            {blog.read_time} دقیقه
            </p>
        <div className="blog-card-tag-wrapper">
          {tags.map(tag=>(
            <p key={Math.random()} className='caption-2 blog-card-tag' >{tag}</p>
          ))}
        </div>
        </div>
    </Link>
  )
}

export default BlogCard