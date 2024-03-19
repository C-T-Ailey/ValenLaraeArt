import Header from "@/components/header/Header";
import { Inter } from "next/font/google";
import "./globals.css";
import 'bootstrap-icons/font/bootstrap-icons.css'


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative bg-gradient-radial from-[#FDE2A6] to-[#b09a6a] via-[#d8c399] min-h-screen">
        
          <Header/>
          
          <main className='pt-24'>
            {children}
          </main>
        
      </body>
    </html>
  );
}
