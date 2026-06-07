"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/lib/constants";

const NAV_LINKS = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/gemlik-acil-cilingir", label: "Hizmetler" },
  { href: "/blog", label: "Blog" },
  { href: "/iletisim", label: "İletişim" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-brand shadow-lg">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3"
        aria-label="Ana menü"
      >
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt={`${SITE.name} - Logo`}
            width={48}
            height={48}
            className="h-10 w-10 object-contain sm:h-12 sm:w-12"
          />
          <span className="text-lg font-bold text-white sm:text-xl">
            {SITE.name}
          </span>
        </Link>

        <ul className="hidden items-center gap-4 text-sm font-medium md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-text-on-dark/95 transition hover:text-accent"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href={`tel:${SITE.phone}`}
              className="rounded-lg bg-accent px-4 py-2 font-bold text-white transition hover:bg-accent-hover"
              aria-label={`Hemen ara: ${SITE.phoneDisplay}`}
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
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="border-t border-white/20 bg-brand px-4 py-4 md:hidden">
          <ul className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-lg px-4 py-2 text-text-on-dark/95 hover:bg-white/10 hover:text-accent"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={`tel:${SITE.phone}`}
                className="block rounded-lg bg-accent px-4 py-3 text-center font-bold text-white"
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
