import { Badge } from '@/components/ui/badge'
import { ArrowLeft2 } from 'iconsax-react'
import Link from 'next/link'
import React from 'react'

function PopularSearchItems() {
  return (
    <Link href={'/'}>
    <Badge className='bg-neutral-2 border border-neutral-4 text-neutral-11 py-2 px-3 rounded-full caption-2' >
        دخترانه
        <ArrowLeft2 className='stroke-neutral-11'/>
    </Badge>
    </Link>
  )
}

export default PopularSearchItems