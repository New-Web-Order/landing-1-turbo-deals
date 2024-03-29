import React, { PropsWithChildren } from "react";
import Navbar from "@/components/widgets/Navbar";
import Footer from "@/components/widgets/Footer";
import "@/styles/globals.css"
import { K2D } from 'next/font/google'

export const dynamic = "force-dynamic";

 
const k2d = K2D({
  weight: ['300','400','500','600','700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-k2d',
})

const meta = {
  title: "Turbo Deals",
  description: "Turbo deals is a car dealership website",
  icons: {
    icon: '/icon.png',
  },
};

export const metadata = {
  title: meta.title,
  description:meta.description,
};

const RootLayout = async ({ children }: PropsWithChildren) => {
  return (
 <html lang="en" className={`${k2d.variable}`}>

      <body>
        <Navbar />
        <main>
        {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
};
export default RootLayout;
