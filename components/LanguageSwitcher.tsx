'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function LanguageSwitcher() {
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !pathname) return null;

  const languages = [
    { code: 'en', flag: '/flags/au.svg', alt: 'English' },
    { code: 'es', flag: '/flags/es.svg', alt: 'Español' }, 
    { code: 'eu', flag: '/flags/eu.svg', alt: 'Euskara' }
  ];

  const getPath = (lang: string) => {
    const segments = pathname.split('/');
    segments[1] = lang;
    return segments.join('/') || `/${lang}`;
  };

  return (
    <div className="flex gap-4 items-center">
      {languages.map((lang) => {
        const isActive = pathname.startsWith(`/${lang.code}`);
        return (
          <Link 
            key={lang.code} 
            href={getPath(lang.code)}
            className={`transition-all duration-300 transform ${
              isActive 
                ? 'scale-125 border-b-2 border-red-500 pb-1 opacity-100' 
                : 'opacity-60 hover:opacity-100 hover:scale-110'
            }`}
          >
            <Image 
              src={lang.flag} 
              alt={lang.alt} 
              width={28} 
              height={20} 
              className="rounded-sm shadow-sm object-cover"
            />
          </Link>
        );
      })}
    </div>
  );
}