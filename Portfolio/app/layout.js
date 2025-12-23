import { Permanent_Marker } from "next/font/google"; 
import { Nunito } from "next/font/google"; 
import { Bebas_Neue } from "next/font/google"; 
import "./globals.css";
import Footer from "./components/Footer";
import { Analytics } from '@vercel/analytics/react';

const permanentMarker = Permanent_Marker({
  weight: '400',
  subsets: ["latin"],
});

const nunito = Nunito({
  weight: '400',
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ["latin"],
  variable: "--font-bebasNeue",
});

export const metadata = {
  title: "My Website",
  description: "Welcome to my website!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${permanentMarker.className} antialiased`}>
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
