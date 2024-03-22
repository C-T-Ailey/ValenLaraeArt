import Image from "next/image";
import Hazel from '/public/images/original/HazelWitch.jpg'
import Jelly from '/public/images/fan/PrincessJellyfish.jpg'
import PortFrame from '/public/images/frame-port.png'
import LandFrame from '/public/images/frame-land.png'
import {coquette, espacio, avenir} from '@/app/fonts'
import Link from 'next/link'

export const metadata = {
  title: 'Home | Valen LaRae'
}

export default function Home() {
  return (
    <div className='mx-auto mt-6 lg:w-full flex justify-center'>
        <div className='w-fit h-fit lg:m-auto 2xl:w-[75%] flex flex-col lg:flex-row lg:justify-evenly items-start lg:items-center'>

            {/* desktop view */}
          
            <div className='hidden lg:block relative top-[-2rem] h-56 w-full overflow-hidden md:static md:top-[unset] md:overflow-none md:h-fit md:w-fit md:mx-5'>
              <div className='w-fit h-auto relative'>
                <div className='aspect-[3/4] h-[22rem] w-auto md:w-[35rem] md:h-auto relative z-10 drop-shadow-[3px_3px_3px_rgba(0,0,0,0.6)]'>
                  <Image className='nXy44zmWO5dj' src={PortFrame} alt="Gallery portrait frame overlay" fill style={{objectFit: "contain"}} sizes='(max-width: 24rem)' priority/>
                </div>
                <div className='aspect-[2/3] h-[19rem] w-auto md:w-[26rem] md:h-auto absolute top-[1.5rem] left-[1.85rem] md:top-[4rem] md:left-[4.5rem]'>
                  <Image className='nXy44zmWO5dj' src={Hazel} alt={`artwork thumbnail`} fill style={{objectFit: "cover"}} sizes='(max-width: fit-content)'/>
                </div>
              </div>
            </div>

            {/* mobile view */}

            <div className='block lg:hidden relative top-[-1rem] h-[17rem] md:h-[20rem] w-fit mx-auto overflow-hidden'>
              <div className='w-fit h-auto relative'>
                <div className='aspect-[4/3] w-[22rem] md:w-[25rem] h-auto relative z-10 drop-shadow-[3px_3px_3px_rgba(0,0,0,0.6)]'>
                  <Image className='nXy44zmWO5dj' src={LandFrame} alt="Gallery portrait frame overlay" fill style={{objectFit: "contain"}} sizes='(max-width: 24rem)' priority/>
                </div>
                <div className='aspect-[3/2] w-[19rem] md:w-[21rem] h-auto absolute top-[2rem] left-[1.5rem] md:top-[2.3rem] md:left-[2rem]'>
                  <Image className='nXy44zmWO5dj' src={Jelly} alt={`artwork thumbnail`} fill style={{objectFit: "cover"}} sizes='(max-width: fit-content)'/>
                </div>
              </div>
            </div>

            <div className='h-full w-full lg:w-fit lg:h-[60vh] flex flex-col justify-start lg:mx-5 my-auto'>

              <div className='text-5xl text-center font-bold lg:text-left w-full tracking-wider'>
                <h1 className={espacio.className}>Art <span className="text-3xl lg:text-4xl">by </span>Valen LaRae</h1>
              </div>

              <div className="h-full mx-6 flex flex-col justify-between">
                <div className='h-fit text-3xl lg:text-4xl font-bold tracking-wider lg:w-[29rem]'>

                  <div className="my-4 lg:my-6 underline">
                    <p className={espacio.className}>Upcoming Events</p>
                  </div>

                  <div className="h-fit m-3 lg:m-6">
                    <div className='text-3xl lg:text-4xl font-bold tracking-wider lg:w-[29rem]'>
                        <div className="flex flex-row">
                          <Link href={"https://soonercon.com/"} className={`${espacio.className} transition ease hover:opacity-40 duration-[400ms]`} target='_blank' rel='noopener noreferrer'>SoonerCon</Link>
                        </div>
                    </div>
                    <div className='text-xl lg:text-2xl font-bold tracking-wider lg:w-[29rem]'>
                        <p className={espacio.className}>Norman, OK</p>
                        <p className={espacio.className}>June 21st - June 23rd 2024</p>
                    </div>
                  </div>


                </div>

                <div className="h-fit my-3 lg:my-6">
                  <div className='text-4xl font-bold tracking-wider lg:w-[29rem]'>
                      <div className="flex flex-row">
                        <p className={espacio.className}>More Events TBC</p>
                      </div>
                  </div>
                </div>

                </div>

            </div>

        </div>
    </div>
  );
}
