import Container from '@/components/modules/container/Container'
import { DiscountShape } from 'iconsax-react'
import React from 'react'
import HomeOfferSlider from './HomeOfferSlider'

function HomeOfferSection() {
  return (
    <div className='mt-16' >
        <Container>
            <h2 className='col-span-12 text-neutral-11 flex items-center gap-2 mb-8 max-mobile:!text-base' >
                <DiscountShape className='w-8 h-8 stroke-neutral-11' />
                محصولات تخفیف‌دار
            </h2>
            <div className="col-span-12">
            <HomeOfferSlider/>
            </div>
        </Container>
    </div>
  )
}

export default HomeOfferSection