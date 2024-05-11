import React from 'react'
import ComingSoonCard from './ComingSoonCard'
import { ComingSoonItems } from '@/constants'

type Props = {}

const ComingSoon = (props: Props) => {
  return (
    <section className='w-full min-h-[970px] px-[20px] py-[100px] flex flex-wrap items-center justify-center gap-[40px] lg:px-[50px] xl:px-[100px] 2xl:px-[240px] 2xl:py-[155px]'>
        {ComingSoonItems.map((item, index)=><ComingSoonCard key={index} {...item}/>)}
    </section>
  )
}

export default ComingSoon