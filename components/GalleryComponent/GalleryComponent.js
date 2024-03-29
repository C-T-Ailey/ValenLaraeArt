'use client'

import React, { useState } from 'react'
import Image from 'next/image';
import LandFrame from '/public/images/frame-land.png'
import PortFrame from '/public/images/frame-port.png'
import { avenir } from '@/app/fonts';

export default function GalleryComponent(props) {
  
  const detectOrientation = (image) => {
      // if portrait
      if (image.height > image.width) {
        return true
      }
      // if landscape
      else if ( image.height <= image.width ) {
        return false
      }
  }
  
  const galleryContents = props.galleryContents
  
  const plaques = props.plaques

  const imageContainerStyle = 'w-fit h-auto relative my-6'

  const landscapeFrameStyle = 'aspect-[4/3] w-[22rem] h-auto md:w-[32rem] md:h-auto relative z-10 drop-shadow-[3px_3px_3px_rgba(0,0,0,0.6)]'

  const landscapeImageStyle = 'aspect-[3/2] w-[19rem] h-auto md:w-[27rem] md:h-auto absolute top-[2rem] left-[1.5rem] md:top-[7rem] md:left-[2.5rem]'
  
  const portraitFrameStyle = 'aspect-[3/4] h-[22rem] w-auto md:w-[24rem] md:h-auto relative z-10 drop-shadow-[3px_3px_3px_rgba(0,0,0,0.6)]'

  const portraitImageStyle = 'aspect-[2/3] h-[18.5rem] w-auto md:w-[18rem] md:h-auto absolute top-[1.8rem] left-[2.1rem] md:top-[2.6rem] md:left-[3rem]'

  return (
    <div className='w-full flex h-fit justify-center xl:py-6 tracking-normal'>
      <div className='flex w-full md:w-[80%] justify-center md:justify-around flex-wrap'>

        {
          galleryContents.map((portrait, index) => (

            
            // orientation = landscape
            
            <div key={index}>
              <div className='w-fit flex flex-col items-center px-auto'>

                { !detectOrientation(portrait) ?

                // landscape orientation

                  <div className={`${imageContainerStyle} md:pt-16`}>
                    <div className={landscapeFrameStyle}>
                      <Image className='nXy44zmWO5dj' src={LandFrame} alt="Gallery portrait frame overlay" fill style={{objectFit: "contain"}} sizes='(max-width: 32rem)' priority/>
                    </div>
                    <div className={landscapeImageStyle}>
                      <Image className='nXy44zmWO5dj' src={portrait} alt={`artwork thumbnail ${index+1}`} fill style={{objectFit: "cover"}} sizes='(max-width: 27rem)' placeholder='blur'/>
                    </div>
                  </div>

                  :

                // portrait orientation

                  <div className={imageContainerStyle}>
                    <div className={portraitFrameStyle}>
                      <Image className='nXy44zmWO5dj' src={PortFrame} alt="Gallery portrait frame overlay" fill style={{objectFit: "contain"}} sizes='(max-width: 24rem)' priority/>
                    </div>
                    <div className={portraitImageStyle}>
                      <Image className='nXy44zmWO5dj' src={portrait} alt={`artwork thumbnail ${index+1}`} fill style={{objectFit: "cover"}} sizes='(max-width: fit-content)' placeholder='blur'/>
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