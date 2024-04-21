import React from 'react'
import BCard from '/public/images/original/BusinessCards2023.jpg'
import Galaxy from '/public/images/original/GalaxyHairGirl.jpg'
import Helios from '/public/images/original/Helios.jpg'
import HeliosTwo from '/public/images/original/Helios-2.jpg'
import Hazel from '/public/images/original/HazelWitch.jpg'
import GalleryComp from '@/components/GalleryComponent/GalleryComponent';
import { espacio } from '@/app/fonts'

export const metadata = {
  title: 'Original Art | Valen LaRae'
}

export default function OriginalWorks() {  

  const galleryContents = [BCard, Galaxy, Hazel, Helios, HeliosTwo,]
  
  const plaques = [
    {
      title: "Daydreaming",
      medium: "Digital Media, Procreate",
      details: '2.12"x3.62"'
    },
    {
      title: "Made of Stars",
      medium: "Oil on Canvas",
      details: '11"x17"'
    },
    {
      title: "Little Witch Hazel",
      medium: "Digital Media, Procreate",
      details: '4"x6"'
    },
    {
      title: "Helios -\nCurtain of Night",
      medium: "Digital Media, Procreate",
      details: '4"x6"'
    },
    {
      title: "Helios - Gaze",
      medium: "Digital Media, Clip Studio Paint",
      details: '2.12"x3.62"'
    },
  ]

  return (
    
    <div className={`w-full flex flex-col items-center pb-12`}>
      <h1 className={`${espacio.className} text-4xl xl:text-6xl font-bold underline mt-6 tracking-wide`}>Original Works</h1>
      <GalleryComp galleryType={"Original Work"} galleryContents={galleryContents} plaques={plaques}/>
    </div>

  )
}
