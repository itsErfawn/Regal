'use client'
import { CloseSquare, Filter } from 'iconsax-react'
import React, { useState } from 'react'
import CategoriesFilterItem from './CategoriesFilterItem'

function CategoriesFilterMobile() {
    const [active,setActive]=useState(false)
  return (
    <>
    <div className='col-span-12 tablet:hidden'>
        <div className="flex justify-between items-center">
            <p className='text-neutral-8'>تعداد محصولات:56</p>
            <button className='p-3 border border-neutral-8 rounded-sm cursor-pointer'>
            <Filter onClick={()=>setActive(true)} className='stroke-neutral-11 w-4 h-4'/>
            </button>
        </div>
    </div>
        <div className={`filter-mobile ${active?'active':''} tablet:hidden`}>
        <div className="filter-mobile_header">
            <CloseSquare className='w-5 h5 stroke-black cursor-pointer' onClick={()=>setActive(!active)} />
            <p className='body-3 text-neutral-13' >فیلترها</p>
        </div>
        <div className="filter-mobile_body">
            <div className="filter-mobile_body__content">
            <CategoriesFilterItem/>
            <CategoriesFilterItem/>
            <CategoriesFilterItem/>
            <CategoriesFilterItem/>
            <CategoriesFilterItem/>
            <CategoriesFilterItem/> 
            </div>
            <div className="filter-mobile_btn_wrapper">
                <button className='btn-md out-line-neutral w-5/12' disabled>حذف فیلترها</button>
                <button className='btn-md primary w-5/12' disabled >اعمال کنید</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default CategoriesFilterMobile