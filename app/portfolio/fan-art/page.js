import Image from 'next/image'
import React from 'react'
import Heroes from '/public/images/fan/HomebrewHeroesLogo.jpg'
import Hopes from '/public/images/fan/HopesandDreams.jpg'
import Jojo from '/public/images/fan/Jojo_Stone_Ocean.jpg'
import Garden from '/public/images/fan/OvertheGardenWall.jpg'
import Jelly from '/public/images/fan/PrincessJellyfish.jpg'
import Frame from '/public/images/frame.png'
import { avenir } from '@/app/fonts';

export const metadata = {
  title: 'Fan Art | Valen LaRae'
}

const detectOrientation = (image) => {
  return image.height >= image.width
}

const galleryContents = [Heroes, Jelly, Hopes, Jojo, Garden,]

const plaques = [
  {
    title: "Homebrew Heroes Logo",
    medium: "Digital Media, Clip Studio Paint",
    details: ''
  },
  {
    title: "Princess Jellyfish",
    medium: "Digital Media, Clip Studio Paint",
    details: '17"x11"'
  },
  {
    title: "Hopes and Dreams",
    medium: "Digital Media, Clip Studio Paint",
    details: '11"x17"'
  },
  {
    title: "Stone Ocean Trio",
    medium: "Digital Media, Procreate",
    details: '11"x17'
  },
  {
    title: "Into the Unknown",
    medium: "Digital Media, Clip Studio Paint",
    details: '11"x17'
  },
]

export default function FanArt() {
  return (
    <div className='w-full flex h-fit justify-center pb-12'>
      <div className='flex w-[80%] justify-around flex-wrap'>

        {
          galleryContents.map((portrait, index) => (

            
            // orientation = landscape
            
            <div key={index}>
              <div className='flex flex-col items-center'>

                { !detectOrientation(portrait) ?


                  <div className='w-fit h-auto relative my-6'>
                    <div className='w-[32rem] h-[32rem] relative z-10' style={{rotate: "90deg"}}>
                      <Image src={Frame} alt="Gallery portrait frame overlay" fill style={{objectFit: "contain"}} sizes='(max-width: 32rem)' priority/>
                    </div>
                    <div className='w-[27rem] h-[18rem] absolute top-[7rem] left-[2.5rem]'>
                      <Image src={portrait} alt={`artwork thumbnail ${index+1}`} fill style={{objectFit: "cover"}} sizes='(max-width: 27rem)'/>
                    </div>
                  </div>

                  :

                  <div className='w-fit h-auto relative my-6'>
                    <div className='w-[24rem] h-[32rem] relative z-10'>
                      <Image src={Frame} alt="Gallery portrait frame overlay" fill style={{objectFit: "contain"}} sizes='(max-width: 24rem)' priority/>
                    </div>
                    <div className='w-[18rem] h-[27rem] absolute top-[2.5rem] left-[3rem]'>
                      <Image src={portrait} alt={`artwork thumbnail ${index+1}`} fill style={{objectFit: "cover"}} sizes='(max-width: fit-content)'/>
                    </div>
                  </div>

                }
              
                <div className='relative h-[8rem] w-[18rem] shadow-plaque border-[#f7f7f7] border-2 rounded-sm flex flex-col justify-around items-center p-2 bg-white plaque-bg'>
                  <div className={`${avenir.className} font-bold italic text-xl`}>
                    {plaques[index].title}
                  </div>
                  <div className={`${avenir.className} font-bold text-lg`}>
                    {plaques[index].medium}
                  </div>
                  <div className={`${avenir.className} font-normal text-base`}>
                    {plaques[index].details}
                  </div>
                </div>
              </div>
            </div>
          ))
        }

      </div>
    </div>
  )
}
