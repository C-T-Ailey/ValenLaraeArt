import React from 'react'
import Image from 'next/image';
import Frame from '/public/images/frame.png'
import { avenir } from '@/app/fonts';

export default function Gallery(props) {
  
  const detectOrientation = (image) => {
      if (image.height > image.width) {
        return true
      }
      else if ( image.height <= image.width ) {
        return false
      }
  }
  
  const galleryContents = props.galleryContents
  
  const plaques = props.plaques

  const imageContainerStyle = 'w-fit h-auto relative my-6'

  const landscapeFrameStyle = 'w-[32rem] h-[32rem] relative z-10 drop-shadow-[3px_-3px_3px_rgba(0,0,0,0.6)]'

  const portraitFrameStyle = 'w-[24rem] h-[32rem] relative z-10 drop-shadow-[3px_3px_3px_rgba(0,0,0,0.6)]'

  const landscapeImageStyle = 'w-[27rem] h-[18rem] absolute top-[7rem] left-[2.5rem]'

  const portraitImageStyle = 'w-[18rem] h-[27rem] absolute top-[2.5rem] left-[3rem]'

  return (
    <div className='w-full flex h-fit justify-center py-12'>
      <div className='flex w-[80%] justify-around flex-wrap'>

        {
          galleryContents.map((portrait, index) => (

            
            // orientation = landscape
            
            <div key={index}>
              <div className='flex flex-col items-center'>

                { !detectOrientation(portrait) ?


                  <div className={imageContainerStyle}>
                    <div className={landscapeFrameStyle} style={{rotate: "90deg"}}>
                      <Image className='nXy44zmWO5dj' src={Frame} alt="Gallery portrait frame overlay" fill style={{objectFit: "contain"}} sizes='(max-width: 32rem)' priority/>
                    </div>
                    <div className={landscapeImageStyle}>
                      <Image className='nXy44zmWO5dj' src={portrait} alt={`artwork thumbnail ${index+1}`} fill style={{objectFit: "cover"}} sizes='(max-width: 27rem)'/>
                    </div>
                  </div>

                  :

                  <div className={imageContainerStyle}>
                    <div className={portraitFrameStyle}>
                      <Image className='nXy44zmWO5dj' src={Frame} alt="Gallery portrait frame overlay" fill style={{objectFit: "contain"}} sizes='(max-width: 24rem)' priority/>
                    </div>
                    <div className={portraitImageStyle}>
                      <Image className='nXy44zmWO5dj' src={portrait} alt={`artwork thumbnail ${index+1}`} fill style={{objectFit: "cover"}} sizes='(max-width: fit-content)'/>
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