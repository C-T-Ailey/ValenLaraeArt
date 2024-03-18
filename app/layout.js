import Header from "@/components/header/Header";
import { Inter } from "next/font/google";
import "./globals.css";
import 'bootstrap-icons/font/bootstrap-icons.css'
import localFont from 'next/font/local'
import {coquette, espacio} from './fonts'
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Valen LaRae",
//   description: "Artwork by Valen Larae",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative bg-gradient-radial from-[#FDE2A6] to-[#b09a6a] via-[#d8c399] min-h-screen pb-44">
        <div className="w-full">
          <div className="h-48">
          <Header/>
          </div>
          <main>
            {children}
          </main>
          <div className="absolute bottom-0 left-0 h-24 w-full z-[9999]">
            <Footer/>
          </div>
        </div>
      </body>
    </html>
  );
}
