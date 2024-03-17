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
      <body className={coquette.className}>
        <div className="relative min-h-screen w-full">
          <div className="h-48">
            <Header/>
          </div>
          <div className="pb-24">
            {children}
          </div>
          <div className="absolute bottom-0 w-full">
            <Footer/>
          </div>
        </div>
      </body>
    </html>
  );
}
