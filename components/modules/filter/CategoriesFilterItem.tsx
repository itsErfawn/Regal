"use client"
import { ArrowDown2 } from 'iconsax-react'
import React, { useState } from 'react'

function CategoriesFilterItem() {
    const [active,setActive]=useState(false)
  return (
    <div className={`filter-item ${active?'active':''} `}>
    <div className="filter-item-header" onClick={e=>{setActive(!active)}}>
      <p className='filter-item-header_text body-3' >نوع لباس</p>
      <ArrowDown2 className={` filter-item-header_icon ${active?'active':''}`} />
    </div>
    <div className="filter-item-body">
        <div className="filter-item-row">
        <input type="checkbox" className='filter-item_checkBox' />
        <p className='filter-item_text' >لباس مجلسی</p>
        </div>
        <div className="filter-item-row">
        <input type="checkbox" className='filter-item_checkBox' />
        <p className='filter-item_text' >لباس مجلسی</p>
        </div>
        <div className="filter-item-row">
        <input type="checkbox" className='filter-item_checkBox' />
        <p className='filter-item_text' >لباس مجلسی</p>
        </div>
        <div className="filter-item-row">
        <input type="checkbox" className='filter-item_checkBox' />
        <p className='filter-item_text' >لباس مجلسی</p>
        </div>
        <div className="filter-item-row">
        <input type="checkbox" className='filter-item_checkBox' />
        <p className='filter-item_text' >لباس مجلسی</p>
        </div>
        <div className="filter-item-row">
        <input type="checkbox" className='filter-item_checkBox' />
        <p className='filter-item_text' >لباس مجلسی</p>
        </div>
    </div>
  </div>
  )
}

export default CategoriesFilterItem