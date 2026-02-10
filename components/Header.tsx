'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header({ dict, locale }: { dict: any, locale: string }) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: dict.nav.home, href: `/${locale}` },
    { name: dict.nav.rules, href: `/${locale}/rules` },
    { name: dict.nav.gallery, href: `/${locale}/gallery` },
  ];

  return (
    <header className="bg-[#1a5e3a] text-white sticky top-0 z-50 shadow-md font-title">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo / Título */}
          <Link href={`/${locale}`} className="flex flex-col">
            <span className="text-lg md:text-xl font-black tracking-tighter leading-none">
              AUSTRALIA MUS
            </span>
            <span className="text-xs text-red-400 font-bold tracking-[0.2em]">
              CHAMPIONSHIP 2026
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className="text-sm font-bold hover:text-red-400 transition-colors uppercase tracking-wider"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href={`/${locale}/inscribete`}
              className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-full text-sm font-black transition-transform hover:scale-105"
            >
              {dict.nav.register}
            </Link>
            <div className="border-l border-white/20 pl-4">
              <LanguageSwitcher />
            </div>
          </nav>

          {/* Mobile Button & Banners (Always visible) */}
          <div className="flex items-center gap-4 md:hidden">
            <LanguageSwitcher />
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-white focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden pb-6 animate-in slide-in-from-top duration-300">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-bold py-2 border-b border-white/10"
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                href={`/${locale}/register`}
                onClick={() => setIsOpen(false)}
                className="bg-red-600 text-center py-4 rounded-xl font-black text-xl mt-2"
              >
                {dict.nav.register}
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}