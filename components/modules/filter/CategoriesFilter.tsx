import React from 'react'
import CategoriesFilterItem from './CategoriesFilterItem'

function CategoriesFilter() {
  return (
    <div className='col-span-3 max-tablet:hidden'>
      <h5 className='text-neutral-13 mb-6'>فیلترها</h5>
      <div className="filter-wrapper">
        <CategoriesFilterItem/>
        <CategoriesFilterItem/>
        <CategoriesFilterItem/>
        <CategoriesFilterItem/>
        <CategoriesFilterItem/>
        <CategoriesFilterItem/>
      </div>
    </div>
  )
}

export default CategoriesFilter