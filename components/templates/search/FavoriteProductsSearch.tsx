"use client"
import ProductCard from '@/components/modules/products/ProductCard'
import { ArrowLeft } from 'iconsax-react'
import Link from 'next/link'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
function FavoriteProductsSearch() {
  return (
    <div className='col-span-12' >
        <div className='flex items-center justify-between mt-6 mb-4'>
        <p className='text-neutral-13 body-3 ' >محبوب ترین ها</p>
        <Link href={'/'} className='button-3 flex items-center gap-0.5' >
        مشاهده همه
        <ArrowLeft className='stroke-black w-4 h-4' />
        </Link>
        </div>
        <Swiper
        slidesPerView={2.2}
        spaceBetween={20}
        breakpoints={{
            576:{
                slidesPerView:3
            },
            700:{
                slidesPerView:4
            },
            992:{
                slidesPerView:5
            }
        }}
        >
            <SwiperSlide>
            {/*  @ts-ignore */}
                <ProductCard/>
            </SwiperSlide>
            <SwiperSlide>
            {/*  @ts-ignore */}
                <ProductCard/>
            </SwiperSlide>
            <SwiperSlide>
            {/*  @ts-ignore */}
                <ProductCard/>
            </SwiperSlide>
            <SwiperSlide>
            {/*  @ts-ignore */}
                <ProductCard/>
            </SwiperSlide>
            <SwiperSlide>
            {/*  @ts-ignore */}
                <ProductCard/>
            </SwiperSlide>
            <SwiperSlide>
            {/*  @ts-ignore */}
                <ProductCard/>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default FavoriteProductsSearch