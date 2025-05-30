import { CategoryInterFace } from '@/types/categories'
import { ArrowDown2 } from 'iconsax-react'
import Link from 'next/link'
import React, { useState } from 'react'

function MobileMenuItem({category}:{category:CategoryInterFace}) {
  const [active,setActive]=useState(false)
  return (
    <ul className={`mobile-menu-items ${active?'active':''} `}>
        <div className='mobile-menu-header' onClick={e=>{setActive(!active)}} >
            <span className='mobile-menu-header__text body-4' >{category.name}</span>
            <ArrowDown2 className={`mobile-menu-header__icon ${active?"rotate-180":''} `} />
        </div>
        {category?.children&&category.children.map(child=>(
          <li key={child.id} className="mobile-menu__item"><Link className='mobile-menu__item__link button-3' href={`/categories/${child.url}`} >{child.name}</Link></li>
        ))}
    </ul>
  )
}

export default MobileMenuItem