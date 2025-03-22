'use client'
import { Badge } from '@/components/ui/badge'
import React from 'react'

function HomeBannerCategoriesSliderBadge() {
    return (
        <>
        <div className='flex items-center gap-2 mt-4 max-tablet:hidden' >
        <Badge className='home-banner-badge caption-1' >
        کالکشن‌های متنوع
        </Badge>
        <Badge className='home-banner-badge caption-1' >
        مد و فشن
        </Badge>
        <Badge className='home-banner-badge caption-1' >
        استایل‌های خاص
        </Badge>
        <Badge className='home-banner-badge caption-1 flex items-center gap-3' >
        <span>رنگ‌بندی‌های جذاب</span>
        <div className='home-product-color' style={{backgroundColor:"#D5AC97"}} ></div>
        <div className='home-product-color' style={{backgroundColor:"#C5AF86"}} ></div>
        <div className='home-product-color' style={{backgroundColor:"#977B71"}} ></div>
        <span>...</span>
        </Badge>
            </div>
        </>
    )
}

export default HomeBannerCategoriesSliderBadge