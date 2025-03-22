import Container from '@/components/modules/container/Container'
import MegaMenuItems from '@/components/modules/megaMenu/MegaMenuItems'
import React from 'react'
import PopularCategoriesMenu from './PopularCategoriesMenu'

function MegaMenu({open,setOpen}:{open:Boolean,setOpen:(value:Boolean)=>void}) {
  return (
    <div className={`mega-menu ${open?'active':''} `} >
        <Container className='justify-items-center'>
        <div className="col-span-7 max-laptop:col-span-6">
            <div className=' flex items-center flex-wrap justify-center'>
            <MegaMenuItems/>
            <MegaMenuItems/>
            <MegaMenuItems/>
            <MegaMenuItems/>
            <MegaMenuItems/>
            <MegaMenuItems/>
            <MegaMenuItems/>
            <MegaMenuItems/>
            </div>
        </div>
        <div className="col-span-5 max-laptop:col-span-6">
            <PopularCategoriesMenu/>
        </div>
        </Container>
    </div>
  )
}

export default MegaMenu