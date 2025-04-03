"use client"
import BlogCard from '@/components/modules/blog/BlogCard'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

function BlogCategories() {
    return (
        <>
            <div className='blog-category-wrapper' >
                <Swiper className='w-full'
                slidesPerView={3}
                spaceBetween={25}
                breakpoints={{
                    700:{
                        slidesPerView:5
                    },
                    900:{
                        slidesPerView:6
                    },
                    1000:{
                        slidesPerView:7
                    }
                }}
                >
                    <SwiperSlide className='flex items-center'>
                        <div className="blog-cateogry active">
                            <p className='blog-category-text' >همه</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='flex items-center'>
                        <div className="blog-cateogry">
                            <p className='blog-category-text' >شخصی‌سازی</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='flex items-center'>
                        <div className="blog-cateogry">
                            <p className='blog-category-text' >هفته مد</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='flex items-center'>
                        <div className="blog-cateogry">
                            <p className='blog-category-text' >ترندهای طراحی</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='flex items-center'>
                        <div className="blog-cateogry">
                            <p className='blog-category-text' >فرم بدن</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='flex items-center'>
                        <div className="blog-cateogry">
                            <p className='blog-category-text' >اکسسوری</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="blogs-wrapper">
                <div className="w-4/12 p-2 max-tablet:w-full"><BlogCard /></div>
                <div className="w-4/12 p-2 max-tablet:w-full"><BlogCard /></div>
                <div className="w-4/12 p-2 max-tablet:w-full"><BlogCard /></div>
                <div className="w-4/12 p-2 max-tablet:w-full"><BlogCard /></div>
                <div className="w-4/12 p-2 max-tablet:w-full"><BlogCard /></div>
                <div className="w-4/12 p-2 max-tablet:w-full"><BlogCard /></div>
                <div className="w-4/12 p-2 max-tablet:w-full"><BlogCard /></div>
                <div className="w-4/12 p-2 max-tablet:w-full"><BlogCard /></div>
                <div className="w-4/12 p-2 max-tablet:w-full"><BlogCard /></div>
                <div className="w-4/12 p-2 max-tablet:w-full"><BlogCard /></div>
                <div className="w-4/12 p-2 max-tablet:w-full"><BlogCard /></div>
                <div className="w-4/12 p-2 max-tablet:w-full"><BlogCard /></div>
            </div>
        </>
    )
}

export default BlogCategories