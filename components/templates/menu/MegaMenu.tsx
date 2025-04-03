import Container from '@/components/modules/container/Container'
import MegaMenuItems from '@/components/modules/megaMenu/MegaMenuItems'
import React from 'react'
import PopularCategoriesMenu from './PopularCategoriesMenu'
import { QueryResult } from 'mysql2'

function MegaMenu({open,setOpen,menuItems}:{open:Boolean,setOpen:(value:Boolean)=>void,menuItems:Array<{url:string,name:string,children:Array<any>}>}) {
  return (
    <div className={`mega-menu ${open?'active':''} `} >
        <Container className='justify-items-center'>
        <div className="col-span-7 max-laptop:col-span-6">
            <div className=' flex items-start flex-wrap '>
              {menuItems.map((item)=>(
                <MegaMenuItems key={item.url} {...{title:item.name,link:item.url,children:item.children}}/>
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