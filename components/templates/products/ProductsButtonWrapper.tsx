import { useProductContext } from '@/contexts/product/ProductContext'
import { useProductStore } from '@/contexts/product/ProductStore'
import { ShoppingCart } from 'iconsax-react'
import { GitCompare } from 'lucide-react'
import React, { useState } from 'react'

function ProductsButtonWrapper() {
    const {size,color}=useProductStore()
    const product = useProductContext()
    const [cartLoad, setCartLoad] = useState(false)
    const [compareLoader,setCompareLoader]=useState(false)
    const {setActive,setMessage,setMessageHeading}=useProductStore()
    async function Handler(url:string,setState:(state:boolean)=>void) {
        setState(true)
        const res = await fetch(`/api/${url}`, {
            method: "POST",
            body: JSON.stringify({ product_id: product?.id, color, size })
        })
        const data = await res.json()
        setMessageHeading(data.heading);setMessage(data.message)
        setActive(true)
        setState(false)
    }
    return (
        <>
            <div className='flex items-stretch gap-2 mt-10 max-tablet:hidden' >
                <button className='btn-md out-line product-compare-btn' onClick={()=>{Handler('compare',setCompareLoader)}}>
                    {compareLoader? <div className="loader"></div>
                    :
                    <>
                    <GitCompare className='product-compare-icon' />
                    <span className='product-compare-text'>مقایسه محصول</span>
                    </>
                    }
                </button>
                <button className='btn-md primary product-addCart-btn' disabled={!size || !color} onClick={()=>{Handler('cart',setCartLoad)}} >
                    {cartLoad ?
                        <div className="loader"></div> :
                        <>
                            <ShoppingCart className='product-addCart-icon' />
                            <span className='product-addCart-text'>افزودن به سبد خرید</span>
                        </>
                    }
                </button>
            </div>
            <div className="tablet:hidden product-btn-container-mobile">
                <div className="product-btn-wrapper-mobile">
                    <div className="product-price-wrapper-mobile">
                        {product?.special&&product.special>0?
                        <>
                        <p className='product-info-price-discount caption-2' >{Math.floor(((product.price-product.special)/product.price)*100)}%</p>
                        <p className="product-info-price-old body-4"> {product.price.toLocaleString()} تومان</p>
                        </>:''
                        }
                        <h5 className="product-info-price"> {product?.special.toLocaleString()} تومان</h5>
                    </div>
                    <div className="product-btn-row-mobile">
                        <button className="btn-sm out-line product-compare-btn-mobile" onClick={()=>{Handler('compare',setCompareLoader)}} ><GitCompare className='product-compare-icon' /></button>
                        <button className='btn-sm primary product-addCart-btn-mobile' disabled={!size || !color} onClick={()=>{Handler('cart',setCartLoad)}} >
                            {cartLoad ?
                                <div className="loader"></div> :
                                <>
                                    <ShoppingCart className='product-addCart-icon' />
                                    <span className='product-addCart-text'>افزودن به سبد خرید</span>
                                </>
                            }
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductsButtonWrapper