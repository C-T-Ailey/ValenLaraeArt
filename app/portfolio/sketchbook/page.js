import Image from 'next/image'
import React from 'react'
import Mermaid from '/public/images/sketch/Mermaid-tub.jpg'
import Gallery from '@/components/Gallery/Gallery';

export const metadata = {
  title: 'Sketchbook | Valen LaRae'
}


export default function Sketchbook() {
  
  const galleryContents = [Mermaid]
  
  const plaques = [
    {
      title: "Mermaid Bath",
      medium: "Digital Media, Clip Studio Paint",
      details: 'Work in Progress, 17"x11"'
    },
  ]

  return (

    <Gallery galleryContents={galleryContents} plaques={plaques}/>

  )
}