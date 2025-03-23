import Container from '@/components/modules/container/Container'
import Logo from '@/components/modules/logo/Logo'
import React from 'react'
import Menu from '../menu/Menu'
import Link from 'next/link'
import { Heart, ShoppingCart, User } from 'iconsax-react'
import HambergerMenuMobile from '../menu/HambergerMenuMobile'
import Search from '../search/Search'
function Header() {
  return (
    <header className='header'>
      <div className="header-content-wrapper">
      <Container className= ' items-center justify-between'>
        <div className="col-span-3 max-tablet:col-span-2"><Link href={'/'}><Logo/></Link></div>
        <div className='col-span-6 max-tablet:hidden' ><Menu/></div>
        <div className='col-span-3 header-icons-wrapper' >
          <HambergerMenuMobile/>
          <Search/>
          <Link href={'/cart'} className='max-tablet:hidden' ><ShoppingCart className='header-icons'/></Link>
          <Link href={'/'} className='max-tablet:hidden' ><Heart className='header-icons'/></Link>
          <Link href={'/'} ><User className='header-icons'/></Link>
        </div>
      </Container>
      </div>
    </header>
  )
}

export default Header