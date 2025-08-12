'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';

const Navigation = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { href: '/', label: t('home') },
    { href: '/questions', label: t('questions') },
    { href: 'https://new-mall.com/tal/p364801713', label: t('order'), external: true },
    { href: '/contact', label: t('contact') },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar');
  };

  return (
    <header className="bg-header-footer text-black shadow-lg relative">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-6 space-x-reverse">
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
              <Image 
                src="/cropped-tallogo-1.png" 
                alt="TAL Height Device Logo" 
                width={48}
                height={48}
              />
            </div>
            <span className="text-lg sm:text-xl font-bold text-black hidden sm:block">{t('heightDevice')}</span>
          </Link>

          {/* Desktop Navigation Menu */}
          <NavigationMenu.Root className="hidden lg:block">
            <NavigationMenu.List className="flex space-x-8 space-x-reverse items-center">
              {navItems.map((item) => (
                <NavigationMenu.Item key={item.href}>
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        'px-3 py-2 rounded-md text-sm font-bold transition-colors duration-200',
                        'text-black/90 hover:text-black hover:bg-black/10'
                      )}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className={cn(
                        'px-3 py-2 rounded-md text-sm font-bold transition-colors duration-200',
                        pathname === item.href
                          ? 'bg-black/20 text-black'
                          : 'text-black/90 hover:text-black hover:bg-black/10'
                      )}
                    >
                      {item.label}
                    </Link>
                  )}
                </NavigationMenu.Item>
              ))}
            </NavigationMenu.List>
          </NavigationMenu.Root>

          {/* Language Switch Button - Always Visible */}
          <button
            onClick={toggleLanguage}
            className="px-4 py-2 bg-white/20 hover:bg-white/30 text-black font-bold rounded-lg transition-colors duration-200 border border-black/20"
          >
            {t('languageSwitch')}
          </button>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 rounded-md text-black hover:bg-black/10 transition-colors"
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
          <div className="lg:hidden mt-4 pb-4 border-t border-black/10">
            <div className="flex flex-col space-y-2 pt-4">
              {navItems.map((item) => (
                <div key={item.href}>
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        'block px-4 py-3 rounded-lg text-base font-bold transition-colors duration-200',
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
                        'block px-4 py-3 rounded-lg text-base font-bold transition-colors duration-200',
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
              
              {/* Mobile Language Switch Button */}
              <button
                onClick={() => {
                  toggleLanguage();
                  setIsMobileMenuOpen(false);
                }}
                className="block px-4 py-3 rounded-lg text-base font-bold bg-white/20 hover:bg-white/30 text-black transition-colors duration-200 border border-black/20"
              >
                {t('languageSwitch')}
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;
