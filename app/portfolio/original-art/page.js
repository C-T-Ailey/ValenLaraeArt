import Image from 'next/image';
import React from 'react'
import BCard from '/public/images/original/BusinessCards2023.jpg'
import Galaxy from '/public/images/original/GalaxyHairGirl.jpg'
import Helios from '/public/images/original/Helios.jpg'
import HeliosTwo from '/public/images/original/Helios-2.jpg'
import Hazel from '/public/images/original/HazelWitch.jpg'
import Frame from '/public/images/frame.png'

export const metadata = {
  title: 'Original Art | Valen LaRae'
}

const detectOrientation = (image) => {
  return image.height >= image.width
}

const galleryContents = [BCard, Galaxy, Hazel, Helios, HeliosTwo]

export default function OriginalWork() {
  return (
    <div className='w-full flex h-fit justify-center py-12'>
      <div className='flex w-[80%] justify-around flex-wrap'>

        {
          galleryContents.map((portrait, index) => (

            !detectOrientation(portrait) ?

            // orientation = landscape

            <div key={index} className='w-fit h-auto relative my-6'>
              <div className='w-[32rem] h-[32rem] relative z-10' style={{rotate: "90deg"}}>
                <Image src={Frame} alt="Gallery portrait frame overlay" fill style={{objectFit: "contain"}} sizes='(max-width: 32rem)' priority/>
              </div>
              <div className='w-[27rem] h-[18rem] absolute top-[7rem] left-[2.5rem]'>
                <Image src={portrait} alt={`artwork thumbnail ${index+1}`} fill style={{objectFit: "cover"}} sizes='(max-width: fit-content)'/>
              </div>
            </div>

            :

            // orientation = portrait

            <div key={index} className='w-[24rem] h-[32rem] relative my-6'>
              <div className='w-[24rem] h-[32rem] relative z-10'>
                <Image src={Frame} alt="Gallery portrait frame overlay" fill style={{objectFit: "contain"}} sizes='(max-width: 24rem)' priority/>
              </div>
              <div className='w-[18rem] h-[27rem] absolute top-[2.5rem] left-[3rem]'>
                <Image src={portrait} alt={`artwork thumbnail ${index+1}`} fill style={{objectFit: "cover"}} sizes='(max-width: fit-content)'/>
              </div>
            </div>

          ))
        }

      </div>
    </div>
  )
}
