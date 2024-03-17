import Image from 'next/image'
import React from 'react'
import Heroes from '/public/images/fan/HomebrewHeroesLogo.jpg'
import Hopes from '/public/images/fan/HopesAndDreams.jpg'
import Jojo from '/public/images/fan/Jojo_Stone_Ocean.jpg'
import Garden from '/public/images/fan/OverTheGardenWall.jpg'
import Jelly from '/public/images/fan/PrincessJellyfish.jpg'
import Frame from '/public/images/frame.png'

export const metadata = {
  title: 'Fan Art | Valen LaRae'
}

const galleryContents = [Heroes, Hopes, Jojo, Garden, Jelly]

export default function OriginalWork() {
  return (
    <div className='w-full flex h-fit justify-center py-12'>
      <div className='flex w-[80%] justify-around flex-wrap'>

        {
          galleryContents.map((portrait, index) => (
            <div key={index} className='w-fit h-fit relative my-6'>
              <div className='w-[24rem] h-[32rem] relative'>
                <Image src={Frame} alt="Gallery portrait frame overlay" fill className='z-10' style={{objectFit: "contain"}} sizes='(max-width: 24rem)' priority/>
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
