'use client';

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="text-xl font-semibold text-green-600">
          FitConverter.net
        </Link>

        <div className="flex items-center gap-6 text-gray-700">
          <Link href="/" className="hover:text-green-600">Home</Link>
          <Link href="/converter" className="hover:text-green-600">Converter</Link>
          <Link href="/blog" className="hover:text-green-600">Blog</Link>
          <Link href="/about" className="hover:text-green-600">About</Link>
        </div>
      </div>
    </nav>
  );
}
