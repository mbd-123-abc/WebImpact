"use client";

import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  if (!pathname.startsWith("/studio")) {
    return (
      <footer className="border-t text-center p-4 text-sm font-semibold bg-primary-100 text-primary-900 border-primary-200"
      style={{
          backgroundColor: "#fed7ad",
          color: "#a33832",
          borderColor: "#fed7ad",
        }}>
        <p>Mahika Bagri &copy; {new Date().getFullYear()}</p>
      </footer>
    );
  }
}
