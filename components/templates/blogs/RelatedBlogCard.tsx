import Link from 'next/link'
import React from 'react'

function RelatedBlogCard() {
  return (
    <Link href={'/blog/2'} className="related-blog">
        <img src="/assets/images/relatedBlog.png" className='related-blog-image' alt="" />
        <div className="related-blog-content">
            <p className="related-blog-title">انتخاب لباس‌های زنانه در هر فصل</p>
            <p className='caption-2 related-blog-text' >
            در تابستان از پارچه‌های نخی و سبک استفاده کنید که نفس‌گیر هستند و در زمستان از پارچه‌های گرم مانند پشم و مخمل که گرمای بدن را حفظ می‌کنند.
            </p>
        </div>
    </Link>
  )
}

export default RelatedBlogCard