import Breadcrumb from '@/components/modules/breadcrumb/Breadcrumb'
import CategoriesFilter from '@/components/modules/filter/CategoriesFilter'
import Container from '@/components/modules/container/Container'
import React from 'react'
import CategoriesContent from '@/components/templates/categories/CategoriesContent'
import CategoriesFilterMobile from '@/components/modules/filter/CategoriesFilterMobile'
function Categoriespage() {
  return (
    <>
    <Breadcrumb/>
    <Container>
    <h3 className='category-heading-title my-8' >
    لباس مجلسی میدی
    <span className='category-heading-title_count' > (56 کالا) </span>
    </h3>
    <CategoriesFilter/>
    <CategoriesFilterMobile/>
    <CategoriesContent/>
    </Container>
    </>
  )
}

export default Categoriespage