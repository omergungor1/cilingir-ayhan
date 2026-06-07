"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#0A2540] shadow-lg">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3"
        aria-label="Ana menü"
      >
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Paşa Çilingir - Logo"
            width={48}
            height={48}
            className="h-10 w-10 object-contain sm:h-12 sm:w-12"
          />
          <span className="text-lg font-bold text-white sm:text-xl">
            Paşa Çilingir
          </span>
        </Link>

        <ul className="hidden items-center gap-4 text-sm font-medium md:flex">
          <li>
            <Link
              href="/"
              className="text-white/90 transition hover:text-[#F5B301]"
            >
              Ana Sayfa
            </Link>
          </li>
          <li>
            <Link
              href="/hizmetler"
              className="text-white/90 transition hover:text-[#F5B301]"
            >
              Hizmetler
            </Link>
          </li>
          <li>
            <Link
              href="/hizmet-bolgelerimiz"
              className="text-white/90 transition hover:text-[#F5B301]"
            >
              Bölgeler
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className="text-white/90 transition hover:text-[#F5B301]"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/iletisim"
              className="text-white/90 transition hover:text-[#F5B301]"
            >
              İletişim
            </Link>
          </li>
          <li>
            <a
              href="tel:+905413433490"
              className="rounded-lg bg-[#F5B301] px-4 py-2 font-bold text-[#0A2540] transition hover:bg-[#e5a300]"
              aria-label="Hemen ara: 0541 343 34 90"
            >
              Hemen Ara
            </a>
          </li>
        </ul>

        <button
          type="button"
          className="rounded-lg p-2 text-white hover:bg-white/10 md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label="Menüyü aç"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="border-t border-white/20 bg-[#0A2540] px-4 py-4 md:hidden">
          <ul className="flex flex-col gap-3">
            <li>
              <Link
                href="/"
                className="block rounded-lg px-4 py-2 text-white/90 hover:bg-white/10 hover:text-[#F5B301]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Ana Sayfa
              </Link>
            </li>
            <li>
              <Link
                href="/hizmetler"
                className="block rounded-lg px-4 py-2 text-white/90 hover:bg-white/10 hover:text-[#F5B301]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Hizmetler
              </Link>
            </li>
            <li>
              <Link
                href="/hizmet-bolgelerimiz"
                className="block rounded-lg px-4 py-2 text-white/90 hover:bg-white/10 hover:text-[#F5B301]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Bölgeler
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="block rounded-lg px-4 py-2 text-white/90 hover:bg-white/10 hover:text-[#F5B301]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/iletisim"
                className="block rounded-lg px-4 py-2 text-white/90 hover:bg-white/10 hover:text-[#F5B301]"
                onClick={() => setMobileMenuOpen(false)}
              >
                İletişim
              </Link>
            </li>
            <li>
              <a
                href="tel:+905413433490"
                className="block rounded-lg bg-[#F5B301] px-4 py-3 text-center font-bold text-[#0A2540]"
                aria-label="Hemen ara: 0541 343 34 90"
                onClick={() => setMobileMenuOpen(false)}
              >
                Hemen Ara
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
