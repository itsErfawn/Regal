import { CtegoriesInterFace } from '@/types'
import Link from 'next/link'
import React from 'react'

function MegaMenuItems({category}:{category:CtegoriesInterFace}) {
  return (
    <ul className='w-3/12 px-4 ' >
    <Link className='body-3 mega-menu_title' href={`/categories/${category.url}`} >{category.name}</Link>
    {category.children&&category.children.map(child=>(
      <li key={child.id} className="mega-menu_item pt-5"><Link href={`/categories/${child.url}`} className='button-3 mega-menu_item__link' >{child.name}</Link></li>
    ))}
</ul>
  )
}

export default MegaMenuItems