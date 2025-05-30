import Container from '@/components/modules/container/Container'
import Logo from '@/components/modules/logo/Logo'
import React from 'react'
import Menu from '../menu/Menu'
import Link from 'next/link'
import { Heart, ShoppingCart, User } from 'iconsax-react'
import HambergerMenuMobile from '../menu/HambergerMenuMobile'
import Search from '../search/Search'
import LoginPopUp from './LoginPopUp'
import CookieStore from '@/lib/cookies/CookieStore'
import HeaderCategoryContent from './HeaderCategoryContent'
import { CtegoriesCollectionType } from '@/types'
async function Header() {
  const isLogin=await CookieStore.get("token")?true:false;
  const categories=HeaderCategoryContent as CtegoriesCollectionType
  return (
    <header className='header'>
      <div className="header-content-wrapper">
      <Container className= ' items-center justify-between'>
        <div className="col-span-3 max-tablet:col-span-2"><Link href={'/'}><Logo/></Link></div>
        <div className='col-span-6 max-tablet:hidden' ><Menu {...{categories}}/></div>
        <div className='col-span-3 header-icons-wrapper' >
          <HambergerMenuMobile {...{categories}} />
          <Search/>
          <Link href={'/cart'} className='max-tablet:hidden' ><ShoppingCart className='header-icons'/></Link>
          <Link href={'/'} className='max-tablet:hidden' ><Heart className='header-icons'/></Link>
          {isLogin?<Link href={'/'} ><User className='header-icons'/></Link>:<LoginPopUp/>}
        </div>
      </Container>
      </div>
    </header>
  )
}

export default Header