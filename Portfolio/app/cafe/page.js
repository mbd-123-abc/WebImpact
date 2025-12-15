/*Mahika Bagri*/
/*December 14 2025*/

import Link from "next/link";

export default function Cafe() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <img
        src="/Cafe.png"
        alt="Cafe Projects"
        className="w-full h-full object-contain"
        priority
      />
      <Link href="/coding"  
        className="absolute z-10"
        style={{
        top: "38%",
        left: "54%",
        width: "12%",
        height: "10%"
        }}
      />
      <Link href="/writing"  
        className="absolute z-10"
        style={{
        top: "30%",
        left: "5%",
        width: "15%",
        height: "15%"
        }}
      />
      <Link href="/contact"  
        className="absolute z-10"
        style={{
        top: "50%",
        left: "72%",
        width: "8%",
        height: "10%"
        }}
      />
    </div>
  );
}
