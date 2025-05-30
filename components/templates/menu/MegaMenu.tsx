import Container from '@/components/modules/container/Container'
import MegaMenuItems from '@/components/modules/megaMenu/MegaMenuItems'
import React from 'react'
import PopularCategoriesMenu from './PopularCategoriesMenu'
import { CtegoriesCollectionType } from '@/types'

function MegaMenu({open,setOpen,categories}:{open:Boolean,setOpen:(value:Boolean)=>void,categories:CtegoriesCollectionType}) {
  return (
    <div className={`mega-menu ${open?'active':''} `} >
        <Container className='justify-items-center'>
        <div className="col-span-7 max-laptop:col-span-6">
            <div className=' flex items-stretch flex-wrap '>
              {categories.map(category=>(
                <MegaMenuItems category={category} key={category.id}/>
              ))}
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