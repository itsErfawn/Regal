"use client"
import React from 'react'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import EmptyWrapper from '@/components/modules/emptyWrapper/EmptyWrapper';
import AccountOrderItem from './AccountOrderItem';
function AccountOrderPageComponent() {
  return (
    <div className="account-content-wrapper max-mobile:border-none max-mobile:!p-0">
    <div className="account-content-header">
      <h6 className="account-content-header-title">تاریخچه سفارشات</h6>
      <Select onValueChange={e=>{console.log(e); 
                }}>
                    <SelectTrigger className="!h-fit flex-row-reverse search-wrapper w-3/12 max-tablet:w-5/12"  >
                        <SelectValue placeholder="نوع سفارش" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel className='text-right'>نوع سفارش</SelectLabel>
                            <SelectItem className='flex-row-reverse' value="filter0">همه</SelectItem>
                            <SelectItem className='flex-row-reverse' value="filter1">تکمیل شده</SelectItem>
                            <SelectItem className='flex-row-reverse' value="filter2">در انتظار</SelectItem>
                            <SelectItem className='flex-row-reverse' value="filter3">لغو شده</SelectItem>
                            <SelectItem className='flex-row-reverse' value="filter4">مرجوع</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
    </div>
    <div className="account-content-body h-full">
      {1>2?<EmptyWrapper {...{title:'در حال حاضر هیچ سفارشی ثبت نکرده‌اید.',link:'/account',text:"بازگشت"}}/>:''}
      <AccountOrderItem/>
      <AccountOrderItem/>
      <AccountOrderItem/>
      <AccountOrderItem/>
    </div>
  </div>
  )
}

export default AccountOrderPageComponent