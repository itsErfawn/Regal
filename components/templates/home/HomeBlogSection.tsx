"use client"
import BlogCard from '@/components/modules/blog/BlogCard'
import Container from '@/components/modules/container/Container'
import { ArrowLeft } from 'iconsax-react'
import Link from 'next/link'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

function HomeBlogSection() {
  return (
    <section className='home-blog-section' >
        <Container>
            <div className="col-span-12 flex items-center justify-between mb-6">
            <h2 className='max-mobile:!text-base' >مقالات مد و استایل زنانه</h2>
            <Link href={'/'} className='button-3 flex items-center gap-2' >
            مشاهده همه
            <ArrowLeft className='stroke-neutral-11 w-4 h-4' />
            </Link>
            </div>
            <div className="col-span-12">
            <Swiper
            slidesPerView={1.3}
            spaceBetween={24}
            breakpoints={{
                576:{
                    slidesPerView:2
                },
                992:{
                    slidesPerView:3
                }
            }}
            >
                <SwiperSlide>
                    <BlogCard/>
                </SwiperSlide>
                <SwiperSlide>
                    <BlogCard/>
                </SwiperSlide>
                <SwiperSlide>
                    <BlogCard/>
                </SwiperSlide>
                <SwiperSlide>
                    <BlogCard/>
                </SwiperSlide>
            </Swiper>
            </div>
        </Container>
    </section>
  )
}

export default HomeBlogSection