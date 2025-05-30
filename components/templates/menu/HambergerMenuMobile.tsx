"use client"
import { CloseSquare, HambergerMenu } from 'iconsax-react'
import React, { useState } from 'react'
import MobileMenuItem from './MobileMenuItem'
import { CtegoriesCollectionType } from '@/types'

function HambergerMenuMobile({categories}:{categories:CtegoriesCollectionType}) {
  const [open,setOpen]=useState<Boolean>(false)
  return (
    <>
    <button className='cursor-pointer' onClick={e=>{setOpen(!open)}} >
      {
        open?
        <CloseSquare className='header-icons tablet:hidden'/>:
        <HambergerMenu className='header-icons tablet:hidden'/>
        
      }
      </button>
    <div className={`mobile-menu ${open?'active':''} `}>
    {categories.map(category=>(
      <MobileMenuItem category={category} key={category.id}/>
    ))}
    </div>
    <div className={`bg-overlay tablet:hidden ${open?'active':''}`} onClick={e=>{setOpen(false)}} ></div>
    </>
  )
}

export default HambergerMenuMobile