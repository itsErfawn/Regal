import Link from 'next/link'
import React from 'react'

function MegaMenuItems() {
  return (
    <ul className='w-3/12 px-4 ' >
    <Link className='body-3 mega-menu_title' href={'/'} >پیراهن کوتاه</Link>
    <li className="mega-menu_item pt-5"><Link href={'/'} className='button-3 mega-menu_item__link' >مجلسی</Link></li>
    <li className="mega-menu_item"><Link href={'/'} className='button-3 mega-menu_item__link' >مخمل</Link></li>
    <li className="mega-menu_item"><Link href={'/'} className='button-3 mega-menu_item__link' >ساده</Link></li>
    <li className="mega-menu_item"><Link href={'/'} className='button-3 mega-menu_item__link' >گیپور</Link></li>
</ul>
  )
}

export default MegaMenuItems