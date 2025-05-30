"use client"
import ProductCard from '@/components/modules/products/ProductCard'
import { ProductCardCollectionType } from '@/types'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

function HomeOfferSlider({products}:{products:ProductCardCollectionType}) {
  return (
    <Swiper
    slidesPerView={2}
    spaceBetween={24}
    breakpoints={{
        576:{
            slidesPerView:2.5
        },
        768:{
            slidesPerView:3
        },
        992:{
            slidesPerView:4
        }
    }}
    >
        {products.map(product=>(
        <SwiperSlide key={product.id}>
            <ProductCard {...{product}} />
        </SwiperSlide>
        ))}
    </Swiper>
  )
}

export default HomeOfferSlider