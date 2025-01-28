import Header from "@/components/header/Header";
import { Inter } from "next/font/google";
import "./globals.css";
import 'bootstrap-icons/font/bootstrap-icons.css'


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative bg-gradient-radial from-[#FDE2A6] to-[#b09a6a] via-[#d8c399] pt-24">

          <div className="fixed top-24 lg:top-0 w-screen h-1/3 z-[9999] flex flex-row justify-between pointer-events-none">
            <div className="h-full w-1/2 lg:w-1/3">
              <img src="/images/ivy_left.png" className='relative drop-shadow-[3px_3px_3px_rgba(0,0,0,0.6)] object-contain'/>
            </div>

            <div className="h-full w-1/2 lg:w-1/3">
              <img src="/images/ivy_right.png" className='relative drop-shadow-[3px_3px_3px_rgba(0,0,0,0.6)] object-contain'/>
            </div>
          </div>

          <Header/>
          
          <main className='flex min-h-small md:min-h-reg wall lg:pb-16 2xl:pb-20 3xl:pb-24'>        
            {children}
          </main>

          <div className="absolute bottom-0 left-0 lg:h-16 2xl:h-20 3xl:h-24 w-full z-[9999] bg-[url('../public/images/skirting.jpg')] bg-contain">
            
          </div>
        
      </body>
    </html>
  );
}
