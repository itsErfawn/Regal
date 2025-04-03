import React from 'react'

function BlogCommentForm() {
  return (
    <div className='col-span-12 mb-5'>
        <h4 className='text-neutral-12 mb-6'>نظر خود را درباره بلاگ ثبت کنید</h4>
        <form className='blog-comment-form' action="/">
        <div className="flex items-center mb-4 flex-wrap">
        <div className="blog-comment-form-input-wrapper !pr-0">
            <input type="text" className='blog-comment-form-input ' placeholder='نام خود را وارد کنید' />
        </div>
        <div className="blog-comment-form-input-wrapper !pl-0">
            <input type="text" className='blog-comment-form-input' placeholder='عنوان مورد نظر' />
        </div>
        </div>
        <textarea name="" className='blog-comment-form-input h-[116px]' id="" placeholder='نظر'></textarea>
        <div className="blog-comment-form-footer">
            <button className='btn-md primary blog-comment-form-btn' >ثبت نظر</button>
        </div>
        </form>
    </div>
  )
}

export default BlogCommentForm