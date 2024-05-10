import React from 'react'

const Profiting = () => {
  return (
    <section className='w-full min-h-[970px] flex flex-col gap-[30px] 2xl:gap-[83px] pt-[120px] pb-[141px] px-[15px] lg:px-[50px] xl:px-[100px] 2xl:px-[240px]'>
        {/* Top Section */}
        <section className='flex flex-col items-center gap-[20px]'>
            <h2 className=' font-monument font-[400] text-[32px] xl:text-[68px] uppercase 2xl:self-start'>Profiting Through</h2>
            <h3 className=' font-monument font-[400] text-[24px] xl:text-[38px] leading-[120%] uppercase bg-gradient-to-r from-[#3D8BFF] to-[#AB23FF] text-transparent bg-clip-text 2xl:self-end'>AI Innovation & Decentralization</h3>
        </section>
        {/* Bottom Section */}
        <section className='flex flex-col items-center justify-center gap-[40px] xl:flex-row'>
        <video
        autoPlay
        muted
        loop
        className="w-full xl:w-[947px] h-[458px]"
      >
        <source
          src={"https://res.cloudinary.com/duxego3ja/video/upload/v1714938660/front-end-tech-test/dxolw7nerrs6cr5netg3.mp4"}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className='flex items-center justify-center xl:px-[30px] xl:h-[485px] xl:border-x xl:border-[#13171D]'>
        <div className='flex flex-col gap-[28px] xl:w-[371px] h-fit'>
            <h4 className='text-[22px] font-[700] leading-[130%]'>The dynamic community driven business model of the future.</h4>
            <p className='text-[18px] font-[400] leading-[130%]'>At Creon, we blend the power of AI tools with the dynamic crypto and NFT markets, utilizing an innovative business model to drive profitability. This approach empowers our community, as our NFT and token holders directly benefit from the growth and prosperity of the Creon network, creating a win-win scenario for both our community and for the projects we launch.</p>
        </div>
      </div>
        </section>
    </section>
  )
}

export default Profiting