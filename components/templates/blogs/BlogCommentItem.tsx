import { Clock } from 'iconsax-react'
import React from 'react'

function BlogCommentItem() {
  return (
    <div className="blog-comment">
        <div className="blog-comment-header">
            <h6 className="blog-comment-subject">بسیار عالی</h6>
            <p className="blog-comment-name">غزاله شیری</p>
        </div>
        <div className="blog-comment-body">
            <p className='blog-comment-text' >من واقعاً از نکاتی که در این مقاله ارائه شد الهام گرفتم! مخصوصاً ترکیب رنگ‌ها و پارچه‌های متفاوت. برای اولین بار لباس‌هایی با رنگ‌های جسورانه امتحان کردم و نتیجه فوق‌العاده بود. حالا حس می‌کنم استایلم خیلی خاص‌تر شده!</p>
        </div>
        <div className="blog-comment-footer">
            <div className="blog-comment-time">
               <Clock className="blog-comment-time_icon"/>
                <p className="blog-comment-time_text">5 روز پیش</p>
            </div>
        </div>
    </div>
  )
}

export default BlogCommentItem