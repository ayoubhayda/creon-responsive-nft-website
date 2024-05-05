import Image from 'next/image'
import React from 'react'

const CreonPass = () => {
  return (
    <section className='w-full min-h-[970px] flex flex-col-reverse items-center text-center justify-center gap-[40px] px-[15px] lg:px[50px] xl:flex-row xl:pr-[132] xl:pl-[240px] py-[81px]'>
        {/* Left Section */}
        <section className='w-full flex flex-col items-center xl:w-[700px] xl:items-start xl:text-start'>
            <h2 className='text-[68px] uppercase font-monument pb-[30px] border-b border-[#13171D]'>creon pass nft</h2>
            <p className="w-fit text-[18px] lg:text-[22px] font-[700] leading-[130%] pt-[7px] pb-[12px] bg-gradient-to-r from-[#3D8BFF] to-[#AB23FF] text-transparent bg-clip-text my-[30px]">The Creon NFT pass unlocks access to AI projects, the Creon launchpad, and a ticket to generate passive income through AI-driven tools</p>
            <ul className='flex flex-col items-center xl:items-start list-none gap-[10px]'>
                <li className='px-[18px] py-[16px] border border-[#13171D] rounded-md w-fit'>Pre-launch investment opportunities for upcoming AI projects</li>
                <li className='px-[18px] py-[16px] border border-[#13171D] rounded-md w-fit'>Free and early access to Creon built AI projects</li>
                <li className='px-[18px] py-[16px] border border-[#13171D] rounded-md w-fit'>Higher allocation limits on the Creon AI Launchpad</li>
                <li className='px-[18px] py-[16px] border border-[#13171D] rounded-md w-fit'>Revenue share distribution from Creon built AI projects</li>
            </ul>
            <button className='flex w-[453px] h-[54px] items-center justify-center rounded-md bg-gradient-to-r from-[#3D8BFF] to-[#AB23FF] mt-[72px] text-[18px] font-[700]'>Buy Creon Pass</button>
        </section>
        {/* Right Section */}
        <section className='relative lg:w-[808px] h-[808px]'>
        <video
        width="100%"
        height="100%"
        autoPlay
        muted
        loop
        className="w-full h-full object-cover"
      >
        <source
          src={"https://res.cloudinary.com/duxego3ja/video/upload/v1714938599/front-end-tech-test/zpto5xl21w8lru625esy.mp4"}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <img src={"./assets/images/Dark_shape.png"} alt='Shadow' className='absolute top-0 right-0 left-0 bottom-0 w-full h-full'/>
        </section>
    </section>
  )
}

export default CreonPass