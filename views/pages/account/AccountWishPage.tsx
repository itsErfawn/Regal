"use client"
import EmptyWrapper from '@/components/modules/emptyWrapper/EmptyWrapper';
import React from 'react'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import ProductCard from '@/components/modules/products/ProductCard';
function AccountWishPage() {
  return (
    <div className="account-content-wrapper max-mobile:border-none max-mobile:!p-0">
    <div className="account-content-header">
      <h6 className="account-content-header-title">لیست علاقه‌مندی‌ها</h6>
      <Select onValueChange={e=>{console.log(e); 
                }}>
                    <SelectTrigger className="!h-fit flex-row-reverse search-wrapper w-3/12 max-tablet:w-5/12"  >
                        <SelectValue placeholder="مرتب سازی" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel className='text-right'>مرتب سازی</SelectLabel>
                            <SelectItem className='flex-row-reverse' value="filter0">ارزان ترین</SelectItem>
                            <SelectItem className='flex-row-reverse' value="filter1">گران ترین</SelectItem>
                            <SelectItem className='flex-row-reverse' value="filter2">جدیدترین</SelectItem>
                            <SelectItem className='flex-row-reverse' value="filter3">قدیمی ترین</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
    </div>
    <div className="account-content-body h-full">
      {1>2?<EmptyWrapper {...{title:'در حال حاضر هیچ سفارشی ثبت نکرده‌اید.',link:'/account',text:"بازگشت"}}/>:''}
      <div className='flex flex-wrap' >
        <div className="w-4/12 px-3 pb-3 max-tablet:w-6/12 max-tablet:px-1.5">
        <ProductCard/>
        </div>
        <div className="w-4/12 px-3 pb-3 max-tablet:w-6/12 max-tablet:px-1.5">
        <ProductCard/>
        </div>
        <div className="w-4/12 px-3 pb-3 max-tablet:w-6/12 max-tablet:px-1.5">
        <ProductCard/>
        </div>
        <div className="w-4/12 px-3 pb-3 max-tablet:w-6/12 max-tablet:px-1.5">
        <ProductCard/>
        </div>
        <div className="w-4/12 px-3 pb-3 max-tablet:w-6/12 max-tablet:px-1.5">
        <ProductCard/>
        </div>
        <div className="w-4/12 px-3 pb-3 max-tablet:w-6/12 max-tablet:px-1.5">
        <ProductCard/>
        </div>
      </div>
    </div>
    </div>
  )
}

export default AccountWishPage