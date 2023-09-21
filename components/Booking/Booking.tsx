import React, { useEffect } from 'react'
import AutocompleteAddress from './AutocompleteAddress'

export default function Booking() {
  const screenHeight = typeof window !== 'undefined' ? (window.innerHeight * 0.72) : 520;
  
  return (
    <div className='p-5'>
      <h2 className='text-[20px] mb-4 font-semibold'>Booking</h2>
      <div className='p-5 border-[1px] rounded-md' style={{ height: screenHeight }}>
        <AutocompleteAddress />
      </div>
    </div>
  )
}
