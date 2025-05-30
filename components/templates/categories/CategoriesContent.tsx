import ProductCard from '@/components/modules/products/ProductCard'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import { ProductCardCollectionType } from '@/types'
import { SearchNormal } from 'iconsax-react'
import React, { useEffect, useState } from 'react'

function CategoriesContent({products}:{products:ProductCardCollectionType}) {
    // const [loading,setLoading]=useState(true)
    // const [productData,setProductData]=useState<null|ProductCardCollectionType>(null)
    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //       setProductData(products);
    //       setLoading(false);
    //     }, 500); // مثلا نیم ثانیه لودینگ نشون بده
      
    //     return () => clearTimeout(timer);
    //   }, []);
      
    // if(loading){
    //     return <p>loading</p>
    // }
    return (
        <div className="col-span-9 max-tablet:col-span-12">
            <div className=" flex items-stretch justify-between mb-5 max-tablet:hidden">
                <div className='search-wrapper w-[70%]' >
                    <button className='search-icon' ><SearchNormal className='header-icons stroke-neutral-7' /></button>
                    <input type="text" className='search-input' placeholder='جستجو کنید' />
                </div>
                <div className="w-[28%]" >
                <Select onValueChange={e=>{console.log(e);
                }}>
                    <SelectTrigger className="w-full !h-fit flex-row-reverse search-wrapper">
                        <SelectValue placeholder="مرتب سازی بر اساس" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel className='text-right'>مرتب سازی بر اساس</SelectLabel>
                            <SelectItem className='flex-row-reverse' value="filter0">نام</SelectItem>
                            <SelectItem className='flex-row-reverse' value="filter1">گران ترین</SelectItem>
                            <SelectItem className='flex-row-reverse' value="filter2">ارزان ترین</SelectItem>
                            <SelectItem className='flex-row-reverse' value="filter3">جدیدترین</SelectItem>
                            <SelectItem className='flex-row-reverse' value="filter4">قدیمی ترین</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
                </div>
            </div>
            <div className="flex flex-wrap">
                {products.map(product=>(
                    <div key={product.id} className="w-4/12 p-2 max-mobile:w-6/12"><ProductCard {...{product}} /></div>
                ))}
            </div>
        </div>
    )
}

export default CategoriesContent