import React from 'react'
import RelatedBlogCard from './RelatedBlogCard'

function SingleBlogSideBar() {
  return (
    <aside className='blog-sidebar' >
        <h4 className='max-tablet:mb-4' >مقالات مرتبط</h4>
        <div className="related-wrapper">
        <RelatedBlogCard/>
        <RelatedBlogCard/>
        <RelatedBlogCard/>
        </div>
    </aside>
  )
}

export default SingleBlogSideBar