'use client'
import React, { useState } from 'react'
import ProductTab from './ProductTab'

function ProductContentWrapper() {
    const [tab,setTab]=useState('')
  return (
    <div className="col-span-12 max-tablet:hidden">
        <div className="product-tab-wrapper">
            <ProductTab {...{text:'توضیحات محصول',tab,setTab}} />
            <ProductTab {...{text:'ویژگی های محصول',tab,setTab}} />
            <ProductTab {...{text:'نحوه نگهداری',tab,setTab}} />
            <ProductTab {...{text:'راهنمای سایز',tab,setTab}} />
            <ProductTab {...{text:'نظرات مشتریان',tab,setTab}} />
            <ProductTab {...{text:'سوالات متداول',tab,setTab}} />
            <ProductTab {...{text:'اکسسوری ها',tab,setTab}} />
        </div>
        <div className="py-5 border-b border-b-neutral-4">
            <p>
                لباس میدی دکلته "الی" با طراحی الهام‌گرفته از استایل‌های کلاسیک و مدرن، انتخابی بی‌نظیر برای خانم‌هایی است که به دنبال ظاهری شیک و همزمان راحت هستند. این لباس از پارچه‌ای نرم و لطیف تهیه شده که به زیبایی روی بدن می‌نشیند و حس آزادی و راحتی را به ارمغان می‌آورد. طراحی بدون شانه (دکلته) با خطوطی ساده و جذاب، جلوه‌ای زنانه و ظریف به لباس می‌بخشد.
با استفاده از جزئیات مینیمال و ظریفی، این لباس به راحتی با استایل‌های مختلف قابل ترکیب است. این لباس می‌تواند در موقعیت‌های متنوع و مهمانی‌های نیمه‌رسمی، شما را همراهی کند و به استایل شما جلوه‌ای خاص ببخشد.
ویژگی‌های بارز:
ظاهری ظریف و شیک که استایل شما را برجسته می‌کند.
به زیبایی روی بدن می‌نشیند و راحتی را تضمین می‌کند.
امکان ایجاد استایلی شخصی‌سازی‌شده و جذاب برای موقعیت‌های مختلف.
</p>
        </div>
        
    </div>
  )
}

export default ProductContentWrapper