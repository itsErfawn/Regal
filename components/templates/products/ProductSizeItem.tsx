import React from 'react'

function ProductSizeItem({mainSize,size,setSize}:{mainSize:string,size:string,setSize:(prevSize:string)=>void}) {
  return (
    <div className={`product-size-item ${mainSize===size?'active':''} `} onClick={e=>{setSize(mainSize)}}>
      <div className="product-size-item__size">{mainSize}</div>
    </div>
  )
}

export default ProductSizeItem