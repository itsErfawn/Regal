import { ArrowDown2 } from 'iconsax-react'
import Link from 'next/link'
import React, { useState } from 'react'

function MobileMenuItem() {
  const [active,setActive]=useState(false)
  return (
    <ul className={`mobile-menu-items ${active?'active':''} `}>
        <div className='mobile-menu-header' onClick={e=>{setActive(!active)}} >
            <span className='mobile-menu-header__text body-4' >پیراهن کوتاه</span>
            <ArrowDown2 className={`mobile-menu-header__icon ${active?"rotate-180":''} `} />
        </div>
        <li className="mobile-menu__item"><Link className='mobile-menu__item__link button-3' href={'/'} >مجلسی</Link></li>
        <li className="mobile-menu__item"><Link className='mobile-menu__item__link button-3' href={'/'} >مخمل</Link></li>
        <li className="mobile-menu__item"><Link className='mobile-menu__item__link button-3' href={'/'} >ساده</Link></li>
        <li className="mobile-menu__item"><Link className='mobile-menu__item__link button-3' href={'/'} >گیپور</Link></li>
    </ul>
  )
}

export default MobileMenuItem