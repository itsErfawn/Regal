import Container from '@/components/modules/container/Container'
import { DiscountShape } from 'iconsax-react'
import React from 'react'
import HomeOfferSlider from './HomeOfferSlider'
import { ProductCardCollectionType } from '@/types';

function HomeOfferSection({products}:{products:ProductCardCollectionType}) {
  if(!products)return;
  return (
    <div className='mt-16' >
        <Container>
            <h2 className='col-span-12 text-neutral-11 flex items-center gap-2 mb-8 max-mobile:!text-base' >
                <DiscountShape className='w-8 h-8 stroke-neutral-11' />
                محصولات تخفیف‌دار
            </h2>
            <div className="col-span-12">
            <HomeOfferSlider products={products}/>
            </div>
        </Container>
    </div>
  )
}

export default HomeOfferSection