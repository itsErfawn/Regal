import Container from '@/components/modules/container/Container'
import { ArrowLeft } from 'iconsax-react'
import Link from 'next/link'
import React from 'react'
import HomeBannerSlider from './HomeBannerSlider'
import HomeBannerCategoriesSliderBadge from './HomeBannerCategoriesSliderBadge'
function HomeBannerSection() {
  return (
      <Container className='items-stretch'>
      <div className="col-span-4 max-laptop:hidden">
        <img src="/assets/images/homeBanner.png" className='h-full'/>
      </div>
        <div className='col-span-8 max-laptop:col-span-12 max-laptop:mt-8' >
            <h1 className='display-3 home-banner-title' >
            لباس‌هایی که <span className='display-3 home-heading-title ' >داستان</span> شما را روایت می‌کنند
            </h1>
            <p className='body-3 text-neutral-13 mt-2 max-tablet:text-[14px]' >هر لباس با دقت و عشق طراحی شده تا به شما احساس زیبایی و اعتماد به نفس بدهد.</p>
            <HomeBannerCategoriesSliderBadge/>
            <div className='flex gap-5 my-8'>
                <Link href={'/'} className='btn-md primary button-2  home-banner-see' >
                مشاهده کالکشن‌ها
                <ArrowLeft className='stroke-white w-5 h-5'/>
                </Link>
                <svg width="49" height="41" viewBox="0 0 49 41" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M0.401914 1.3266C0.242364 2.73332 4.48583 17.8908 6.03993 21.3914C8.35437 26.6047 12.0806 31.2712 15.957 33.8109C19.0408 35.8314 22.4665 36.6431 25.2574 36.0148C26.8701 35.6517 27.6812 35.2361 29.0758 34.059L30.2799 33.0426L31.5072 33.7922C35.5806 36.2798 40.632 37.7351 44.8304 37.6304C45.47 37.6144 45.9889 37.6406 45.9835 37.6885C45.978 37.7363 44.9815 38.1451 43.7691 38.5968C42.5566 39.0484 41.5061 39.5167 41.4347 39.6373C41.1944 40.0434 41.6434 40.3427 42.2977 40.2126C43.5305 39.9675 48.0243 38.2446 48.5897 37.8002C49.0381 37.4479 49.0215 37.2766 48.4718 36.576C48.1376 36.1503 47.5461 35.7611 45.9185 34.8964C43.275 33.492 42.8082 33.3023 42.5296 33.5197C42.3392 33.6684 42.3677 33.7469 42.7324 34.0808C42.9656 34.2945 43.8043 34.8693 44.5961 35.3583C45.388 35.8472 46.0331 36.2807 46.0298 36.3213C46.0181 36.4683 43.315 36.2802 41.8127 36.0279C38.9855 35.553 36.7679 34.8713 34.4457 33.7633C33.1767 33.1578 31.0367 31.9514 31.0643 31.857C31.0726 31.8287 31.2875 31.444 31.5421 31.002C32.4189 29.4798 33.1603 26.8983 33.3412 24.7384C33.8538 18.6139 30.8137 12.2784 26.7434 10.989C26.2195 10.823 25.5743 10.777 24.9827 10.8635C24.1658 10.9828 23.9389 11.0868 23.1684 11.6946C21.8879 12.7047 21.3514 13.8881 21.0834 16.2933C20.7827 18.9895 21.2751 21.6245 22.607 24.4481C23.3315 25.984 26.3962 29.8964 27.919 31.2293C28.4882 31.7276 28.9479 32.1874 28.9407 32.2514C28.9334 32.3152 28.5584 32.6892 28.1075 33.0823C26.667 34.3383 24.9666 34.9092 22.9267 34.822C17.1899 34.5763 10.8774 28.9961 7.27376 20.9848C6.03435 18.2297 1.41336 3.02807 1.26376 1.28337C1.21255 0.685736 1.13171 0.467172 0.946585 0.426189C0.57184 0.343334 0.499831 0.462266 0.401914 1.3266ZM24.486 12.1081C26.3414 11.3409 28.6211 12.8861 30.3306 16.0696C31.8715 18.9393 32.3606 21.9612 31.8518 25.4689C31.568 27.4261 31.0677 29.0801 30.4061 30.2502C29.8468 31.2395 29.9958 31.2808 28.2142 29.6413C26.7328 28.2782 24.3671 25.338 23.7668 24.114C23.0469 22.6461 22.4709 20.9454 22.1772 19.422C21.7023 16.9577 22.2239 14.1723 23.39 12.9447C23.6477 12.6736 23.8796 12.4242 23.9053 12.3903C23.9311 12.3566 24.1924 12.2295 24.486 12.1081Z" fill="#0B0C17"/></svg>
            </div>
            <HomeBannerSlider/>
        </div>
      </Container>
  )
}

export default HomeBannerSection