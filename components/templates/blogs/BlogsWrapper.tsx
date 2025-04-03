import React from 'react'
import BlogCategories from './BlogCategories'

function BlogsWrapper() {
  return (
    <div className="col-span-12 my-8 ">
        <h3 className='mb-4'>دسته‌بندی مطالب بلاگ</h3>
        <p className='body-4 text-neutral-11 mb-6' >رنگ‌ها نقش مهمی در استایل شما ایفا می‌کنند. در این مقاله یاد می‌گیرید که چگونه رنگ‌هایی را انتخاب کنید که.</p>
        <BlogCategories/>
    </div>
  )
}

export default BlogsWrapper