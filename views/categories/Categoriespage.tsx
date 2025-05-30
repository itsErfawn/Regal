"use client"
import Breadcrumb from '@/components/modules/breadcrumb/Breadcrumb'
import CategoriesFilter from '@/components/modules/filter/CategoriesFilter'
import Container from '@/components/modules/container/Container'
import React from 'react'
import CategoriesContent from '@/components/templates/categories/CategoriesContent'
import CategoriesFilterMobile from '@/components/modules/filter/CategoriesFilterMobile'
import { ProductCardCollectionType } from '@/types'
import { CategoryContext } from '@/contexts/categories/CategoryContext'
import { CategoryInterFace } from '@/types/categories'
function Categoriespage({category,products}:{category:CategoryInterFace,products:ProductCardCollectionType}) {
  return (
    <CategoryContext value={category}>
    <Breadcrumb/>
    <Container>
    <h3 className='category-heading-title my-8' >
    {category.name}
    <span className='category-heading-title_count' > ({products.length} کالا) </span>
    </h3>
    <CategoriesFilter/>
    <CategoriesFilterMobile/>
    <CategoriesContent {...{products}}/>
    </Container>
    </CategoryContext>
  )
}

export default Categoriespage