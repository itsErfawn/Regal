import Link from 'next/link'
import React from 'react'

function EmptyWrapper({title,text,link}:{title:string,text:string,link:string}) {
  return (
    <div className='empty-wrapper' >
        <img src="/assets/images/empty.png" className='empty-wrapper-image'/>
        <p className='empry-wrapper-title' >{title}</p>
        <Link href={link} className='btn primary empty-wrapper-btn'  >{text}</Link>
    </div>
  )
}

export default EmptyWrapper