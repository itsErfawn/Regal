import HomeCategoriesItem from '@/components/modules/categories/HomeCategoriesItem'
import Container from '@/components/modules/container/Container'
import React from 'react'

function HomeCategoriesSection() {
  return (
    <div className='my-20' >
      <Container>
        <h2 className='col-span-12 max-tablet:!text-[18px] tablet:mb-10 ' >دسته بندی محصولات</h2>
        <div className="col-span-12">
          <div className="flex items-stretch max-tablet:flex-wrap max-tablet:">
          <div className="w-6/12 flex items-stretch max-tablet:w-full max-tablet:my-5">
          <div className="w-6/12">
          <HomeCategoriesItem classNames={'h-full'} />
          </div>
          <div className="w-6/12 flex flex-col gap-5">
          <HomeCategoriesItem classNames={'h-[256px] max-tablet:h-full'} />
          <HomeCategoriesItem classNames={'h-[256px] max-tablet:h-full'}/>
          </div>
          </div>
          <div className="w-6/12 flex items-stretch max-tablet:w-full">
          <div className="w-6/12 flex flex-col gap-5">
          <HomeCategoriesItem classNames={'h-[164px]'} />
          <HomeCategoriesItem classNames={'h-[164px]'} />
          <HomeCategoriesItem classNames={'h-[164px]'} />
          </div>
          <div className="w-6/12 flex flex-col gap-5 ">
          <HomeCategoriesItem classNames={'h-[164px]'} />
          <HomeCategoriesItem classNames={'h-[350px]'} />
          </div>
          </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default HomeCategoriesSection