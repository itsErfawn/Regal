import React from 'react';
import ProductColorItem from './ProductColorItem';
import ProductSizeItem from './ProductSizeItem';

function ProductSizeWrapper({ size, setSize }: { size: string;setSize: (newColor: string) => void }) {
  return (
    <div>
      <p className="mb-1 mt-6">سایزبندی</p>
      <div className="product-color-wrapper">
        <ProductSizeItem {...{mainSize:'md',size,setSize}} />
        <ProductSizeItem {...{mainSize:'lg',size,setSize}} />
        <ProductSizeItem {...{mainSize:'xl',size,setSize}} />
      </div>
    </div>
  );
}

export default ProductSizeWrapper;
