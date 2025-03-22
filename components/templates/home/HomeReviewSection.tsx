"use client"
import Container from '@/components/modules/container/Container'
import {  StarSlash } from 'iconsax-react'
import { Quote, StarIcon } from 'lucide-react'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

function HomeReviewSection() {
  return (
    <section className='my-10' >
        <Container>
            <h2 className='col-span-12 mb-8 max-mobile:!text-base' >
            رضایت شما
            <br />
            ارزشمندترین دارایی ماست
            </h2>
            <div className="col-span-12">
            <Swiper 
            slidesPerView={1.1}
            spaceBetween={20}
            breakpoints={{
                560:{
                    slidesPerView:1.5
                },
                850:{
                    slidesPerView:2.2
                },
                992:{
                    slidesPerView:2.5
                },
                1100:{
                    slidesPerView:3
                },
            }}
             >
                <SwiperSlide>
                    <div>
                        <div className='flex items-center justify-between' >
                            <div className="flex items-center gap-2">
                            <img src="/assets/images/review.png" alt="" />
                            <div>
                                <p className='body-3' >زهرا محمدی</p>
                                <p className='caption-2 text-neutral-11' >تهران</p>
                            </div>
                            </div>
                            <Quote className='fill-neutral-5 stroke-neutral-5' />
                        </div>
                        <div>
                            <p className='body-2 text-neutral-13' >سفارش راحت و بی‌دردسر</p>
                            <p className="body-3 text-neutral-13 ">همه‌چیز دقیقاً همون‌طوری بود که تصور می‌کردم! از انتخاب پارچه گرفته تا جزئیات مدل، می‌شد همه چیز رو طبق سلیقه شخصی تنظیم کنم، خرید راحت و بدون استرسی بود.</p>
                            <div className="flex items-center gap-1">
                                <StarIcon className='home-review-star--empty' />
                                <StarSlash className='home-review-star--fill' />
                                <StarSlash className='home-review-star--fill' />
                                <StarSlash className='home-review-star--fill' />
                                <StarSlash className='home-review-star--fill' />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <div className='flex items-center justify-between' >
                            <div className="flex items-center gap-2">
                            <img src="/assets/images/review2.png" alt="" />
                            <div>
                                <p className='body-3' >سیما پاشا</p>
                                <p className='caption-2 text-neutral-11' >کرج</p>
                            </div>
                            </div>
                            <Quote className='fill-neutral-5 stroke-neutral-5' />
                        </div>
                        <div>
                            <p className='body-2 text-neutral-13' >کیفیت، فراتر از انتظار</p>
                            <p className="body-3 text-neutral-13 ">واقعاً از کیفیت لباس‌هایی که سفارش دادم جا خوردم! پارچه‌ها همون‌قدر که گفته بودن باکیفیت بود، دوختشون هم خیلی خوب بود. حس خوبیه که یه فروشگاه اینقدر به کیفیت اهمیت می‌ده.</p>
                            <div className="flex items-center gap-1">
                                <StarIcon className='home-review-star--empty' />
                                <StarSlash className='home-review-star--fill' />
                                <StarSlash className='home-review-star--fill' />
                                <StarSlash className='home-review-star--fill' />
                                <StarSlash className='home-review-star--fill' />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <div className='flex items-center justify-between' >
                            <div className="flex items-center gap-2">
                            <img src="/assets/images/review3.png" alt="" />
                            <div>
                                <p className='body-3' >رها احمدی</p>
                                <p className='caption-2 text-neutral-11' >کاشان</p>
                            </div>
                            </div>
                            <Quote className='fill-neutral-5 stroke-neutral-5' />
                        </div>
                        <div>
                            <p className='body-2 text-neutral-13' >تحویل سریع</p>
                            <p className="body-3 text-neutral-13 ">خرید کردم و خیلی سریع به دستم رسید! بسته‌بندی خوب و مرتب بود و لباس‌ها سالم و تمیز بودن. این سرعت تو تحویل خیلی بهم حس اطمینان می‌ده.</p>
                            <div className="flex items-center gap-1">
                                <StarIcon className='home-review-star--empty' />
                                <StarSlash className='home-review-star--fill' />
                                <StarSlash className='home-review-star--fill' />
                                <StarSlash className='home-review-star--fill' />
                                <StarSlash className='home-review-star--fill' />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <div className='flex items-center justify-between' >
                            <div className="flex items-center gap-2">
                            <img src="/assets/images/review.png" alt="" />
                            <div>
                                <p className='body-3' >زهرا محمدی</p>
                                <p className='caption-2 text-neutral-11' >تهران</p>
                            </div>
                            </div>
                            <Quote className='fill-neutral-5 stroke-neutral-5' />
                        </div>
                        <div>
                            <p className='body-2 text-neutral-13' >سفارش راحت و بی‌دردسر</p>
                            <p className="body-3 text-neutral-13 ">همه‌چیز دقیقاً همون‌طوری بود که تصور می‌کردم! از انتخاب پارچه گرفته تا جزئیات مدل، می‌شد همه چیز رو طبق سلیقه شخصی تنظیم کنم، خرید راحت و بدون استرسی بود.</p>
                            <div className="flex items-center gap-1">
                                <StarIcon className='home-review-star--empty' />
                                <StarSlash className='home-review-star--fill' />
                                <StarSlash className='home-review-star--fill' />
                                <StarSlash className='home-review-star--fill' />
                                <StarSlash className='home-review-star--fill' />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            </div>
        </Container>
    </section>
  )
}

export default HomeReviewSection