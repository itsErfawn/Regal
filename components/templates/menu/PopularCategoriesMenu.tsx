import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import React from 'react'

function PopularCategoriesMenu() {
  return (
    <div>
        <p className='body-3 text-neutral-13 mb-3'>دسته‌بندی‌های پربازدید</p>
        <div className='flex'>
            <div>
                <Link href={'/'} className='popular-menu-categories' >
                <img src="/assets/images/categoryCard.png" className='popular-menu-categories__image'/>
                <div className='popular-menu-categories__content--wrapper' >
                    <p className='popular-menu-categories__text' >پیراهن کوتاه</p>
                    <div className="flex">
                    <Badge className='ml-1 mirror-badge-menu' >دخترانه</Badge>
                    <Badge className='mirror-badge-menu' >کالکشن جدید</Badge>
                    </div>
                </div>
                </Link>
            </div>
            <div className='flex flex-col gap-5' >
            <Link href={'/'} className='popular-menu-categories' >
                <img src="/assets/images/categoryCard2.png" className='popular-menu-categories__image w-full'/>
                <div className='popular-menu-categories__content--wrapper' >
                    <p className='popular-menu-categories__text' >پیراهن کوتاه</p>
                    <div className="flex">
                    <Badge className='ml-1 mirror-badge-menu' >دخترانه</Badge>
                    <Badge className='mirror-badge-menu' >کالکشن جدید</Badge>
                    </div>
                </div>
                </Link>
                <Link href={'/'} className='popular-menu-categories' >
                <img src="/assets/images/CategoryCard3.png" className='popular-menu-categories__image'/>
                <div className='popular-menu-categories__content--wrapper' >
                    <p className='popular-menu-categories__text' >پیراهن کوتاه</p>
                    <div className="flex">
                    <Badge className='ml-1 mirror-badge-menu' >دخترانه</Badge>
                    <Badge className='mirror-badge-menu' >کالکشن جدید</Badge>
                    </div>
                </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default PopularCategoriesMenu