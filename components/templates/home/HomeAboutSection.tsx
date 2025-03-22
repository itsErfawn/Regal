import Container from '@/components/modules/container/Container'
import { Headphone, Like1, MagicStar, Ruler } from 'iconsax-react'
import React from 'react'

function HomeAboutSection() {
  return (
    <section className='bg-neutral-1 py-16 max-tablet:py-8 mt-16' >
        <Container className='items-end' >
            <div className="col-span-7 max-laptop:col-span-12">
                <h2 className=" max-tablet:!text-[18px] ">کشف شیک‌پوشی با <span className='text-primary'>رگــــــــــــال</span></h2>
                <p className="text-neutral-11 mt-4 body-4 max-tablet:!text-[15px] max-tablet:!leading-[20px]">
                رگال جایی است که مد سلطنتی با ظرافت مدرن پیوند می‌خورد. ما مجموعه‌ای از لباس‌های بی‌نظیر و منحصر به فرد را برای بانوان باوقار و شیک‌پوش ارائه می‌دهیم که با انتخاب آن‌ها، اعتماد به نفس و زیبایی شما بیش از پیش نمایان خواهد شد.
                </p>
                <div className="mt-8 flex items-center flex-wrap">
                    <div className="home-about-card">
                    <i className='home-about-card-icon--wrapper' >
                        <Ruler className='home-about-card-icon' />
                    </i>
                    <h6 className='home-about-card-title' >طراحی منحصر به‌فرد</h6>
                    <p className='body-4 text-neutral-11' >هر لباس با طراحی سفارشی برای شما آماده می‌شود. ما با الهام از استایل شما، بهترین لباس‌ها را خلق می‌کنیم.</p>
                    </div>
                    <div className="home-about-card">
                    <i className='home-about-card-icon--wrapper' >
                        <Like1 className='home-about-card-icon' />
                    </i>
                    <h6 className='home-about-card-title' >دوخت حرفه‌ای و اختصاصی</h6>
                    <p className='body-4 text-neutral-11' >تیم خیاطی ما هر لباس را با دقت و تخصص کامل می‌دوزد، تا لباسی با بالاترین استانداردهای دوخت داشته باشید.</p>
                    </div>
                    <div className="home-about-card">
                    <i className='home-about-card-icon--wrapper' >
                        <MagicStar className='home-about-card-icon' />
                    </i>
                    <h6 className='home-about-card-title' >تعهد به کیفیت</h6>
                    <p className='body-4 text-neutral-11' >ما به ارائه لباس‌هایی با بالاترین کیفیت پارچه و دوخت افتخار می‌کنیم، تمام مراحل تولید با دقت تمام انجام می‌شود.</p>
                    </div>
                    <div className="home-about-card">
                    <i className='home-about-card-icon--wrapper' >
                        <Headphone className='home-about-card-icon' />
                    </i>
                    <h6 className='home-about-card-title' >پشتیبانی آنلاین و حضوری</h6>
                    <p className='body-4 text-neutral-11' >تیم ما همیشه آماده است تا به سوالات شما پاسخ دهد و در انتخاب و خرید لباس مورد نظرتان به شما کمک کند.</p>
                    </div>
                </div>
            </div>
            <div className="col-span-5 max-laptop:col-span-12 ">
                <div className="flex max-laptop:justify-center ">
                <div className="flex flex-col gap-4">
                    <img src="/assets/images/image-3.png" alt="" />
                    <img src="/assets/images/image-2.png" alt="" />
                </div>
                <div className="px-4">
                    <img src="/assets/images/image.png" alt="" />
                </div>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default HomeAboutSection