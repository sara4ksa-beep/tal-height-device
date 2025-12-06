'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { dir } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white py-8" dir={dir}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4">
          <p className="text-gray-400">©️ 2025 جهاز الطول. جميع الحقوق محفوظة</p>
          <div>
            <Link 
              href="/contact" 
              className="text-blue-400 hover:text-blue-300 transition-colors duration-200 underline"
            >
              راسلنا لأي ملاحظة
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


