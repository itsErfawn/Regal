import React from 'react';
import ProductColorItem from './ProductColorItem';

function ProductColorWrapper({ color, setColor }: { color: string; setColor: (newColor: string) => void }) {
  return (
    <div>
      <p className="mb-1 max-tablet:mb-4">رنگبندی</p>
      <div className="product-color-wrapper">
        <ProductColorItem {...{mainColor:'red',color,setColor}} />
        <ProductColorItem {...{mainColor:'blue',color,setColor}} />
        <ProductColorItem {...{mainColor:'green',color,setColor}} />
      </div>
    </div>
  );
}

export default ProductColorWrapper;
