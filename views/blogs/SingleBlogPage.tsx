import Breadcrumb from '@/components/modules/breadcrumb/Breadcrumb'
import Container from '@/components/modules/container/Container'
import BlogCommentForm from '@/components/templates/blogs/BlogCommentForm'
import BlogComments from '@/components/templates/blogs/BlogComments'
import SingleBlogSideBar from '@/components/templates/blogs/SingleBlogSideBar'
import { blogType } from '@/types/blogs'
import React from 'react'

function SingleBlogPage({blog}:{blog:blogType}) {
  return (
    <>
    <Breadcrumb/>
    <Container className='my-5' >
        <div className="col-span-8 max-tablet:col-span-12">
        <h1 className='text-neutral-12 max-tablet:!text-[20px] mb-6 '>{blog.title}</h1>
        <img src="/assets/images/singleblog.png" alt="" className='blog-main-image' />
        <div className="blog-content" dangerouslySetInnerHTML={{ __html: blog.content }}></div>

        </div>
        <div className="col-span-4 max-tablet:col-span-12 max-tablet:mt-4 tablet:py-10">
            <SingleBlogSideBar/>
        </div>
    <BlogComments/>
    <BlogCommentForm/>
    </Container>

    </>
  )
}

export default SingleBlogPage