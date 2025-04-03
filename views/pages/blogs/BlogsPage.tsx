import Container from '@/components/modules/container/Container'
import BlogsWrapper from '@/components/templates/blogs/BlogsWrapper'
import { Clock, Folder2 } from 'iconsax-react'
import Link from 'next/link'
import React from 'react'

function BlogsPage() {
  return (
    <>
    <Container className='max-tablet:!flex max-tablet:!flex-col-reverse' >
        <div className='col-span-5 flex items-center flex-col justify-center max-tablet:items-start' >
            <h1 className='desktop-1 blogs-title-heading' >جدیدترین نکات مد روز برای داشتن استایلی خاص</h1>
            <div className='flex items-center gap-2 mb-6 w-full max-tablet:mb-2'>
                <p className='blogs-title-text' >
                    <Folder2 className='blogs-title-icon' />
                    ترندهای طراحی
                </p>
                <p className='blogs-title-text' >
                    <Clock className='blogs-title-icon' />
                    سه روز قبل
                </p>
            </div>
                <p className='body-4 blogs-title-caption' >
                استایل خود را مطابق با آخرین تغییرات دنیای مد به‌روز کنید. از رنگ‌های برجسته تا پارچه‌های محبوب، همه‌چیز در این راهنما برای شما فراهم است...
                </p>
                <Link href={'/blogs/2'} className='btn neutral blogs-title-btn' >ادامه مطلب</Link>
        </div>
        <div className='col-span-7' >
            <div className="">
                <img src="/assets/images/blogs.png" className='blogs-main-image' alt="" />
            </div>
        </div>
    </Container>
    <Container>
        <BlogsWrapper/>
    </Container>
    </>
  )
}

export default BlogsPage