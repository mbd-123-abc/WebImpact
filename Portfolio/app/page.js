/*Mahika Bagri*/
/*December 12 2025*/

import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Link href="/cafe">
        <img
          src="/PortfolioEntry.png"
          alt="Portfolio Entrance"
          className="w-full h-full object-contain"
        />
      </Link>
    </div>
  );
}
