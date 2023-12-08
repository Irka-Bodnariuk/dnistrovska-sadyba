import React from 'react'
import HeroImage from '../../public/hero_image.png'
const Hero = () => {
  return (
    <>
    <div className="font-bold text-teal-500 text-2xl">
     Hero 
      </div>
      <img src={HeroImage.src} alt='HeroImage'
      className='w-full'/>
      
      </>
  )
}

export default Hero
