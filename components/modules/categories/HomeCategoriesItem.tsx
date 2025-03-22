import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import React from 'react';

function HomeCategoriesItem({ classNames }: { classNames?: string | null }) {
    return (
        <Link href={'/'} className={`popular-menu-categories ${classNames?classNames:''} `}>
            <img src="/assets/images/categoryCard.png" className="popular-home-categories__image" />
            <div className="popular-menu-categories__content--wrapper">
                <p className="popular-menu-categories__text">پیراهن کوتاه</p>
                <div className="flex">
                    <Badge className='ml-1 mirror-badge-menu' >دخترانه</Badge>
                    <Badge className='mirror-badge-menu max-tablet:hidden' >کالکشن جدید</Badge>
                </div>
            </div>
        </Link>
    );
}

export default HomeCategoriesItem;
