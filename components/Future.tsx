import React from 'react'
import FutureCard from './FutureCard'
import { FutureItem } from '@/constants'

const Future = () => {
  return (
    <section className='w-full min-h-[1106px] px-[15px] py-[80px] flex items-center justify-center xl:flex-col flex-wrap gap-[20px] lg:px-[50px] xl:px-[100px] 2xl:px-[240px]'>
        {FutureItem.map((item, index)=><FutureCard key={index} {...item} />)}
    </section>
  )
}

export default Future