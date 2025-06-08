"use client"
import {  ArrowDown2 } from 'iconsax-react'
import Link from 'next/link'
import React, { useState } from 'react'
import MegaMenu from './MegaMenu'
import { CtegoriesCollectionType } from '@/types'

function Menu({categories}:{categories:CtegoriesCollectionType}) {
    const [open,setOpen]=useState<Boolean>(false)
  return (
    <nav className='bg-neutral-1 rounded-[99px] py-2.5 border border-neutral-3 ' >
        <ul className='flex items-center gap-4 justify-center' >
            <li>
                <Link className='button-3 text-neutral-11' href={'/'}>صفحه اصلی</Link>
            </li>
            <li onClick={e=>{setOpen(!open)}} >
                <p className='button-3 text-neutral-11 flex items-center gap-2 cursor-pointer '>
                دسته بندی ها
                <ArrowDown2 className={`header-icons ${open?'rotate-180 ':''}`} />
                </p>
                <MegaMenu {...{open,setOpen,categories}}/>
            </li>
            <li>
                <Link className='button-3 text-neutral-11' href={'/blogs'}>مقالات</Link>
            </li>
            <li>
                <Link className='button-3 text-neutral-11' href={'/about'}>درباره ما</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Menu