import Breadcrumb from '@/components/modules/breadcrumb/Breadcrumb'
import Container from '@/components/modules/container/Container'
import ProductContentWrapper from '@/components/templates/products/ProductContentWrapper'
import ProductInfoWrapper from '@/components/templates/products/ProductInfoWrapper'
import RelatedProductWrapper from '@/components/templates/products/RelatedProductWrapper'
import React from 'react'

function ProductsPage() {
  return (
    <>
    <Breadcrumb/>
    <Container>
        <ProductInfoWrapper/>
        <ProductContentWrapper/>
        <RelatedProductWrapper/>
    </Container>
    </>
  )
}

export default ProductsPage