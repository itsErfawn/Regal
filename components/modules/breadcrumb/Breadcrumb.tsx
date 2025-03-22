"use client"
import { ArrowLeft2 } from 'iconsax-react'
import Link from 'next/link'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

const breadcrumbItems = [
  { title: 'صفحه اصلی', href: '/' },
  { title: 'دسته‌بندی محصولات', href: '/categories' },
  { title: 'لباس مجلسی', href: '/categories/formal' },
  { title: 'لباس مجلسی میدی', href: null }
]

function Breadcrumb() {
  return (
    <div className="container">
      {/* Desktop Version */}
      <div className="col-span-12 items-center gap-2 py-4 max-tablet:hidden flex">
        {breadcrumbItems.map((item, index) => (
          <React.Fragment key={index}>
            {item.href ? (
              <Link href={item.href} className="text-neutral-8 caption-1">{item.title}</Link>
            ) : (
              <span className="text-neutral-11 caption-1">{item.title}</span>
            )}
            {index < breadcrumbItems.length - 1 && (
              <ArrowLeft2 className="w-4 h-4 stroke-neutral-8" />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Mobile Version */}
      <div className="col-span-12 hidden max-tablet:block py-4">
        <Swiper
          spaceBetween={8}
          slidesPerView={3.1}
          dir="rtl"
        >
          {breadcrumbItems.map((item, index) => (
            <SwiperSlide key={index}>
              {item.href ? (
                <Link href={item.href} className="text-neutral-8 caption-1 whitespace-nowrap flex items-center justify-center gap-2">{item.title}<ArrowLeft2 className='w-4 h-4 stroke-neutral-8'/></Link>
              ) : (
                <span className="text-neutral-11 caption-1 whitespace-nowrap">{item.title}</span>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Breadcrumb