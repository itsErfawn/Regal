import Link from 'next/link'
import React from 'react'

function MegaMenuItems({title,link,children}:{title:string,link:string,children:Array<{url:string,name:string}>}) {
  return (
    <ul className='w-4/12 px-4 ' >
    <Link className='body-3 mega-menu_title' href={`/categories/${link}`} >{title}</Link>
    {children.map(child=>(
      <li key={child.name} className="mega-menu_item pt-5"><Link href={`/categories/${child.url}`} className='button-3 mega-menu_item__link' >{child.name}</Link></li>
    ))}
</ul>
  )
}

export default MegaMenuItems