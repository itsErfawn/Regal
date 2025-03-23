"use client"
import Breadcrumb from '@/components/modules/breadcrumb/Breadcrumb'
import ProductCard from '@/components/modules/products/ProductCard'
import { Add, CloseSquare } from 'iconsax-react'
import { Search } from 'lucide-react'
import React, { useState } from 'react'

function ComparePage() {
    const [active,setActive]=useState(false)
  return (
    <>
    <Breadcrumb/>
    <div className="container mt-12">
        <div className="col-span-12">
            <div className="compare-wrapper">
                <div className="compare">
                    <div className="compare-image-wrapper">
                        <img src="/assets/images/categoryCard.png" className='compare-image' />
                    </div>
                    <div className="compare-body">
                        <p className="body-3 compare-title">لباس میدی دکلته الی</p>
                        <p className='body-3 compare-price' >تومان3,200,000</p>
                    </div>
                    <button className='compare-del-btn' >
                        <CloseSquare className='compare-del-btn-icon' />
                    </button>
                </div>
                <div className="compare-empty">
                    <div className='compare-add-btn-wrapper' onClick={e=>{setActive(true)}} >
                        <button className='compare-add-btn' ><Add className='compare-add-btn-icon'/></button>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-span-12">
            <div className="compare-table">
                <div className="compare-row">
                    <p className='compare-row_title' >قیمت:</p>
                    <p className='compare-row_text' >تومان3,200,000</p>
                </div>
                <div className="compare-row even">
                    <p className='compare-row_title' >قیمت:</p>
                    <p className='compare-row_text' >تومان3,200,000</p>
                </div>
                <div className="compare-row">
                    <p className='compare-row_title' >قیمت:</p>
                    <p className='compare-row_text' >تومان3,200,000</p>
                </div>
                <div className="compare-row even">
                    <p className='compare-row_title' >قیمت:</p>
                    <p className='compare-row_text' >تومان3,200,000</p>
                </div>
                <div className="compare-row">
                    <p className='compare-row_title' >قیمت:</p>
                    <p className='compare-row_text' >تومان3,200,000</p>
                </div>
                <div className="compare-row even">
                    <p className='compare-row_title' >قیمت:</p>
                    <p className='compare-row_text' >تومان3,200,000</p>
                </div>
                <div className="compare-row">
                    <p className='compare-row_title' >قیمت:</p>
                    <p className='compare-row_text' >تومان3,200,000</p>
                </div>
                <div className="compare-row even">
                    <p className='compare-row_title' >قیمت:</p>
                    <p className='compare-row_text' >تومان3,200,000</p>
                </div>
            </div>
        </div>
    </div>
    <div className={`bg-overlay !top-0 !z-50 ${active?'active':''}`} ></div>
    <div className={`compare-products-container ${active?'active':''} `} onClick={e=>{setActive(false)}}>
        <div className="compare-products-wrapper" onClick={e=>{e.stopPropagation()}}>
        <div className="compare-products-header">
            <h6 className="compare-products-title">انتخاب محصول برای مقایسه</h6>
            <button className='compare-products-btn' onClick={e=>{setActive(false)}}><CloseSquare className='compare-products-btn-icon'/></button>
        </div>
        <div className="compare-products-search-wrapper">
            <button className="compare-products-search-btn" ><Search className='compare-products-search-btn-icon'/></button>
            <input className="compare-products-search" placeholder='جستجوی محصول'/>
        </div>
        <div className="compare-products-item-wrapper">
            <div className="compare-products-item"><ProductCard/></div>
            <div className="compare-products-item"><ProductCard/></div>
            <div className="compare-products-item"><ProductCard/></div>
            <div className="compare-products-item"><ProductCard/></div>
            <div className="compare-products-item"><ProductCard/></div>
        </div>
        </div>
    </div>
    </>
  )
}

export default ComparePage