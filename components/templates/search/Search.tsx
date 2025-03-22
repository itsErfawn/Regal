"use client"
import {CloseSquare, SearchNormal } from 'iconsax-react'
import React, { useState } from 'react'
import PopularSearch from './PopularSearch'
import FavoriteProductsSearch from './FavoriteProductsSearch'

function Search() {
    const [active,setActive]=useState(false);
  return (
    <>
    <button className='cursor-pointer' onClick={e=>{setActive(!active)}} >
        {active?
            <CloseSquare className='header-icons'/>
            :
            <SearchNormal className='header-icons'/>
        }
        </button>
    <div className={`container search-container ${active?'active':''} `}>
        <div className='search-wrapper' >
            <button className='search-icon' ><SearchNormal className='header-icons stroke-neutral-7'/></button>
            <input type="text" className='search-input' placeholder='محصول مورد نظر خود را جستجو کنید...' />
        </div>
        <PopularSearch/>
        <FavoriteProductsSearch/>
    </div>
    </>
  )
}

export default Search