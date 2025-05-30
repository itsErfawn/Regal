import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import Province_Cities, { ProvinceKey } from '@/lib/cities/CitiesUtil';
import { CloseCircle } from 'iconsax-react'
import React, { useState } from 'react'
function AccountAddressAdd({active,setActive}:{active:boolean,setActive:(active:boolean)=>void}) {
    const [me,setMe]=useState(false)
    const [city, setCity] = useState<string[] | null>(null);
    const provinces=generateProvinces()
  return (
    <>
    <div className={`bg-overlay ${active?'active':''} !z-30 !top-0`}></div>
    <div className={`address-form-container ${active?'active':''} `} onClick={e=>{setActive(false)}}>
        <div className="address-form-wrapper" onClick={e=>{e.stopPropagation()}}>
            <div className="address-form-header">
                <p className='address-form-title' >جزئیات آدرس</p>
                <button className='address-form-btn' onClick={e=>{setActive(false)}} ><CloseCircle className='address-form-btn_icon' /></button>
            </div>
            <div className="address-form-body">
                <textarea name="" placeholder='آدرس کامل' className='address-form-area'></textarea>
                <div className="address-form-input-container">
                <div className="address-form-input-wrapper">
                <Select onValueChange={(e:ProvinceKey)=>{
                    setCity(Province_Cities[e].cities)
                }}>
                    <SelectTrigger className="address-form-input"  >
                        <SelectValue placeholder="استان" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel className='text-right'>استان</SelectLabel>
                            {provinces.map(pr=>(
                                <SelectItem key={pr.value} className='flex-row-reverse' value={pr.value}>{pr.title}</SelectItem>
                            ))}
                        </SelectGroup>
                    </SelectContent>
                </Select>
                </div>
                <div className="address-form-input-wrapper">
                    
                <Select>
                    <SelectTrigger className="address-form-input"  >
                        <SelectValue placeholder="شهر" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel className='text-right'>شهر</SelectLabel>
                            {city?.map(c=>(
                                <SelectItem key={c} className='flex-row-reverse' value={c}>{c}</SelectItem>
                            ))}
                        </SelectGroup>
                    </SelectContent>
                </Select>
                </div>
                <div className="address-form-input-wrapper">
                <input type="text" className='address-form-input' placeholder='کد پستی'  />
                </div>
                <div className="address-form-input-wrapper">
                <input type="text" className='address-form-input' placeholder='جزئیات آدرس (پلاک، طبقه و ...)'  />
                </div>
                </div>
                <div className="flex items-center gap-2 mt-5 mb-4">
                    <input type="checkbox" name="" className='accent-primary w-5 h-5' onChange={e=>{setMe(!me)}} id="" />
                    <p className='text-neutral-13'>گیرنده سفارش خودم هستم</p>
                </div>
                <div className={`address-form-input-container ${me?'!hidden':''} `}>
                <div className="address-form-input-wrapper">
                <input type="text" className='address-form-input' placeholder='نام و نام خانوادگی گیرنده'  />
                </div>
                <div className="address-form-input-wrapper">
                <input type="text" className='address-form-input' placeholder='شماره موبایل گیرنده'  />
                </div>
                </div>
                <button className='btn primary address-form-input-btn' disabled >ثبت آدرس</button>
            </div>
        </div>
    </div>
    </>
  )
}
function generateProvinces():Array<{value:string,title:string}>{
    let ProvinceArray=[]
    for(let pr in Province_Cities){
        const key = pr as ProvinceKey;
        ProvinceArray.push({value:pr,title:Province_Cities[key].title})
    }
    return ProvinceArray
}
export default AccountAddressAdd