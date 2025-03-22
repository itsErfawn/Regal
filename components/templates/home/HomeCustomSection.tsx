import Container from '@/components/modules/container/Container'
import { Scissor } from 'iconsax-react'
import Link from 'next/link'
import React from 'react'

function HomeCustomSection() {
    return (
        <div className="bg-neutral-1 py-16 max-tablet:py-8">
            <Container>
                <h1 className='col-span-12 text-center max-tablet:!text-[18px] ' ><span className='text-primary' >طراحـــــی</span> و دوخــــت بر اساس شکل بدن شما </h1>
                <p className='col-span-12 mt-4 text-center body-4 max-tablet:!text-[15px] max-tablet:!leading-[20px] text-neutral-11' >
                در این بخش از فروشگاه ما، لباس‌ها و استایل‌هایی را پیدا می‌کنید که با فرم بدنی شما همخوانی دارند. ما به شما کمک می‌کنیم تا بهترین انتخاب‌ها را بر اساس فرم بدنی‌تان داشته باشید.برای شروع، کافیست فرم بدنی خود را انتخاب کنید تا ما به شما لباس‌هایی را پیشنهاد دهیم که به شما احساس راحتی و زیبایی بیشتری ببخشند.
                </p>
                <div className="col-span-12 flex items-center justify-center mt-10">
                <Link className='btn neutral w-fit flex items-center gap-2 button-1 max-tablet:!text-[14px] max-tablet:!py-2.5' href={'/'} >
                <Scissor className='stroke-white w-5 h-5 max-tablet:w-3 max-tablet:h-3' />
                شخصی‌دوزی
                </Link>
                </div>
            </Container>
            <div className="flex items-center justify-between mt-10 w-full ">
                <img src="/assets/images/custom (5).png" className='block px-2 w-2/12 max-tablet:hidden'  alt="" />
                <img src="/assets/images/custom (3).png" className='block px-2 w-2/12 max-tablet:w-2/12' alt="" />
                <img src="/assets/images/custom (2).png" className='block px-2 w-4/12 max-tablet:w-4/12' alt="" />
                <img src="/assets/images/custom (4).png" className='block px-2 w-2/12 max-tablet:w-2/12' alt="" />
                <img src="/assets/images/custom (1).png" className='block px-2 w-2/12 max-tablet:hidden' alt="" />
            </div>
        </div>
    )
}

export default HomeCustomSection