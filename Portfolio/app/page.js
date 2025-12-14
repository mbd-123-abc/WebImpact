/*Mahika Bagri*/
/*December 14 2025*/

import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
     <img
        src="/PortfolioEntry.png"
        alt="Portfolio Entrance"
        className="w-full h-full object-contain"
        priority
      />
      <Link href="/cafe"  
      className="absolute z-10"
      style={{
        top: "45%",
        left: "45%",
        width: "8%",
        height: "7%",
      }}
    />

    </div>
  );
}
