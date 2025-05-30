"use client"
import Breadcrumb from '@/components/modules/breadcrumb/Breadcrumb'
import Container from '@/components/modules/container/Container'
import ProductContentWrapper from '@/components/templates/products/ProductContentWrapper'
import ProductInfoWrapper from '@/components/templates/products/ProductInfoWrapper'
import RelatedProductWrapper from '@/components/templates/products/RelatedProductWrapper'
import ProductProvider from '@/contexts/product/ProductContext'
import { ProductCardCollectionType, ProductInterFace } from '@/types'
import React from 'react'

function ProductsPage({product,colors,related_product}:{colors:string[],product:ProductInterFace,related_product:ProductCardCollectionType}) {
  return (
    <ProductProvider data={product}>
    <Breadcrumb/>
    <Container>
        <ProductInfoWrapper colors={colors}/>
        <ProductContentWrapper/>
        <RelatedProductWrapper related_product={related_product}/>
    </Container>
    </ProductProvider>
  )
}

export default ProductsPage