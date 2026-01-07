'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';

const Navigation = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  const navItems = [
    { href: '/', label: t('home') },
    { href: '/questions', label: t('questions') },
    { href: '/price', label: t('price') },
    { href: 'https://new-mall.com/tal/p364801713', label: t('order'), external: true },
    { href: '/contact', label: t('contact') },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };


  return (
    <header className="bg-header-footer text-black shadow-lg relative mobile-nav">
      <div className="container-responsive py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
              <Image 
                src="/cropped-tallogo-1.png" 
                alt="TAL Height Device Logo" 
                width={48}
                height={48}
              />
            </div>
            <span className="text-sm sm:text-base md:text-lg font-bold text-black mr-2 sm:mr-4 md:mr-8">{t('heightDevice')}</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-8 xl:gap-16">
              {navItems.map((item) => (
                <li key={item.href}>
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black font-bold hover:text-gray-700 transition-colors duration-200"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link href={item.href} className="text-black font-bold hover:text-gray-700 transition-colors duration-200">
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMobileMenu}
            className="lg:hidden p-3 rounded-md text-black hover:bg-black/10 transition-colors"
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed top-0 right-0 h-full w-72 sm:w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out">
            {/* Click outside to close */}
            <div 
              className="fixed inset-0 -z-10"
              onClick={toggleMobileMenu}
            />
            <div className="flex flex-col h-full">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <span className="text-lg font-bold text-black">القائمة</span>
                <button 
                  onClick={toggleMobileMenu}
                  className="p-2 rounded-md text-black hover:bg-gray-100 transition-colors"
                  aria-label="Close mobile menu"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              {/* Mobile Menu Content */}
              <div className="flex-1 overflow-y-auto p-4">
                <div className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <div key={item.href}>
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        'block px-4 py-4 rounded-lg text-base font-bold transition-colors duration-200',
                        'text-black/90 hover:text-black hover:bg-black/10'
                      )}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className={cn(
                        'block px-4 py-4 rounded-lg text-base font-bold transition-colors duration-200',
                        pathname === item.href
                          ? 'bg-black/20 text-black'
                          : 'text-black/90 hover:text-black hover:bg-black/10'
                      )}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;
