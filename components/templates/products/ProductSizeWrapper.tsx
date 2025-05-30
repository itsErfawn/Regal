import React from 'react';
import ProductColorItem from './ProductColorItem';
import ProductSizeItem from './ProductSizeItem';
import { useProductStore } from '@/contexts/product/ProductStore';

function ProductSizeWrapper() {
  const {size,setSize}=useProductStore()
  return (
    <div>
      <p className="mb-1 mt-6">سایزبندی</p>
      <div className="product-color-wrapper">
        <ProductSizeItem {...{mainSize:'md',size,setSize}} />
        <ProductSizeItem {...{mainSize:'lg',size,setSize}} />
        <ProductSizeItem {...{mainSize:'xl',size,setSize}} />
        <ProductSizeItem {...{mainSize:'xxl',size,setSize}} />
        <ProductSizeItem {...{mainSize:'xxxl',size,setSize}} />
      </div>
    </div>
  );
}

export default ProductSizeWrapper;
