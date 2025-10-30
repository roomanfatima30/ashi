"use client";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-gray-900 text-white px-6 py-3">
      <div className="flex items-center gap-3">
        <Image src="/profile.jpg" alt="Logo" width={40} height={40} className="rounded-full" />
        <span className="text-lg font-semibold">My Portfolio</span>
      </div>
      <div className="flex gap-5">
        <Link href="/" className="hover:text-gray-400">Home</Link>
        <Link href="/about" className="hover:text-gray-400">About</Link>
        <Link href="/contact" className="hover:text-gray-400">Contact</Link>
      </div>
    </nav>
  );
}
