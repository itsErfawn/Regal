import Link from 'next/link'
import React from 'react'

function BlogCard() {
  return (
    <Link href={'/'} className='blog-card' >
        <img src="/assets/images/blog.png" className='blog-card-image'  />
        <div className="px-4">
        <h6 className='blog-card-title ' >انتخاب لباس‌های زنانه در هر فصل</h6>
        <p className='body-4 text-neutral-10' >در تابستان از پارچه‌های نخی و سبک استفاده کنید که نفس‌گیر هستند و در زمستان از پارچه‌های گرم مانند پشم و مخمل که گرمای بدن را حفظ می‌کنند.</p>
            <p className='caption-1 blog-card-caption' >
            ۱۴ شهریور
            |
            ۱۰ دقیقه
            </p>
        <div className="blog-card-tag-wrapper">
            <p className='caption-2 blog-card-tag' >استایل</p>
            <p className='caption-2 blog-card-tag' >انتخاب پارچه</p>
        </div>
        </div>
    </Link>
  )
}

export default BlogCard