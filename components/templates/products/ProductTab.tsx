import React from 'react'

function ProductTab({text,tab,setTab}:{text:string,tab:string,setTab:(prevTab:string)=>void}) {
  return (
    <div className={`product-tab ${text===tab?'active':''} `} onClick={()=>{setTab(text)}} >
        <p className='body-3 product-tab-text'>{text}</p>
    </div>
  )
}

export default ProductTab