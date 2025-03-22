import React from 'react'

function ProductColorItem({mainColor,color,setColor}:{mainColor:string,color:string,setColor:(newColor:string)=>void}) {
    return (
        <div className={`product-color-item ${mainColor===color?'active':''} `} onClick={e=>{setColor(mainColor)}}  style={{ backgroundColor: mainColor }}>
            <div className="product-color-item_inner">
                <svg className='product-color-item_inner__icon' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.5795 15.58C10.3795 15.58 10.1895 15.5 10.0495 15.36L7.21945 12.53C6.92945 12.24 6.92945 11.76 7.21945 11.47C7.50945 11.18 7.98945 11.18 8.27945 11.47L10.5795 13.77L15.7195 8.62998C16.0095 8.33998 16.4895 8.33998 16.7795 8.62998C17.0695 8.91998 17.0695 9.39998 16.7795 9.68998L11.1095 15.36C10.9695 15.5 10.7795 15.58 10.5795 15.58Z" fill="white" /></svg>
            </div>
        </div>
    )
}

export default ProductColorItem