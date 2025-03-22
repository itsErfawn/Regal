"use client"
import { CloseSquare, HambergerMenu } from 'iconsax-react'
import React, { useState } from 'react'
import MobileMenuItem from './MobileMenuItem'

function HambergerMenuMobile() {
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
    <MobileMenuItem/>
    <MobileMenuItem/>
    <MobileMenuItem/>
    <MobileMenuItem/>
    </div>
    <div className={`bg-overlay tablet:hidden ${open?'active':''}`} onClick={e=>{setOpen(false)}} ></div>
    </>
  )
}

export default HambergerMenuMobile