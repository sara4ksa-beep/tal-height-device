'use client';

import Link from 'next/link';
import { CheckCircle, Award } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';

export default function HomePage() {
  const { t, dir, language, setLanguage } = useLanguage();

  return (
    <div className="min-h-screen bg-white" dir={dir}>
      {/* Hero Section */}
      <section className="relative bg-cover bg-center bg-no-repeat text-white py-32" style={{ backgroundImage: 'url(/hero-banner.png)' }}>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-2xl" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
            {t('heroTitle')}
          </h1>
          <div className="inline-block bg-header-footer px-6 py-3 rounded-lg mb-8">
            <p className="text-xl md:text-2xl font-bold">
              <span className="text-red-600">هل حلمت بزيادة طولك؟</span>
              <br />
              <span className="text-black">الآن يمكنك تحقيق حلمك!</span>
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="https://new-mall.com/tal/p364801713" target="_blank" rel="noopener noreferrer" className="btn-primary text-lg px-8 py-4">
              {t('orderNow')}
            </a>
          </div>
          
          {/* Language Switch Button */}
          <div className="mt-6">
            <button
              onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
              className="px-4 py-2 bg-black/80 hover:bg-black text-white font-bold rounded-lg transition-colors duration-200 border-2 border-white shadow-lg text-sm"
            >
              {language === 'ar' ? 'English' : 'العربية'}
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="section-title">{t('featuresTitle')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t('feature1Title')}</h3>
              <p className="text-gray-600">{t('feature1Desc')}</p>
            </div>
            
            <div className="card text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t('feature2Title')}</h3>
              <p className="text-gray-600">{t('feature2Desc')}</p>
            </div>
            
            <div className="card text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t('feature3Title')}</h3>
              <p className="text-gray-600">{t('feature3Desc')}</p>
            </div>
            
            <div className="card text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t('feature4Title')}</h3>
              <p className="text-gray-600">{t('feature4Desc')}</p>
            </div>
            
            <div className="card text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t('feature5Title')}</h3>
              <p className="text-gray-600">{t('feature5Desc')}</p>
            </div>
            
            <div className="card text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t('feature6Title')}</h3>
              <p className="text-gray-600">{t('feature6Desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Section - Moved Above Product Description */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title">علاج قصر القامة وزيادة الطول - كل ما تحتاج معرفته</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">كيف يعمل جهاز TAL لعلاج قصر القامة؟</h3>
                <p className="text-gray-700 leading-relaxed">
                  جهاز TAL يعمل على تحفيز نمو العظام وتحسين الوضعية العامة للجسم. من خلال تقنيات متقدمة، 
                  يساعد الجهاز في علاج قصر القامة وزيادة الطول بشكل طبيعي وآمن. يعالج أيضاً مشاكل العمود الفقري 
                  ويصحح انحناء القامة.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">مميزات جهاز TAL لزيادة الطول</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• يزيد الطول 7 سم وأكثر</li>
                  <li>• يعالج قصر القامة للكبار والصغار</li>
                  <li>• يعالج آلام الظهر وانحناء القامة</li>
                  <li>• يخلصك من بروز البطن</li>
                  <li>• منتج معتمد لعلاج مشاكل الطول</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Description */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12">جهاز TAL لعلاج قصر القامة وزيادة الطول - منتج مجرب وحقق نتائج مبهرة</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 text-right">
              <p className="text-lg text-gray-700 leading-relaxed">
                جهاز زيادة الطول TAL ليس مجرد أداة لزيادة الطول، بل هو منتج مبتكر يجمع بين التكنولوجيا الحديثة وطرق تحفيز الجسم الطبيعية لعلاج قصر القامة. يعمل على تعزيز نمو العظام وتحسين الوضعية العامة للجسم، مما يؤدي إلى زيادة الطول 7 سم وأكثر. هذا الجهاز هو الحل الأمثل لعلاج مشاكل الطول والقصر.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                يوفر الجهاز حلاً شاملاً لمشاكل الطول والوضعية، مع سهولة الاستخدام ودليل مفصل للاستخدام الأمثل. تصميم عصري وسهل التخزين، مما يجعله إضافة مريحة لروتينك اليومي. جهاز TAL هو أفضل علاج لقصر القامة وزيادة الطول بشكل طبيعي وآمن.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                يأتي المنتج مع ضمان ودعم فني ممتاز، مما يضمن تجربة مستخدم جيدة. جهاز TAL معتمد لعلاج قصر القامة وزيادة الطول للكبار والصغار. لا تدع قصر القامة يحد من طموحاتك وثقتك بنفسك. اطلب جهاز TAL الآن وابدأ رحلة علاج قصر القامة وزيادة الطول.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">{t('ctaTitle')}</h2>
          <p className="text-xl text-gray-600 mb-8">
            {t('ctaSubtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="https://new-mall.com/tal/p364801713" target="_blank" rel="noopener noreferrer" className="btn-primary text-lg px-8 py-4">
              {t('ctaButton')}
            </a>
          </div>
          <Link href="/questions" className="text-lg text-red-600 mb-8 hover:text-red-700 cursor-pointer underline">
            {t('ctaFaq')}
          </Link>
        </div>
        

      </section>

      {/* Social Media */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">{t('socialTitle')}</h3>
          <div className="flex justify-center">
            <a href="https://www.youtube.com/@TAL7cm" className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors mx-4">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            <a href="https://www.tiktok.com/@tal7cm" className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors mx-4">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.11V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-.88-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/tal7cm/" className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center hover:bg-purple-600 hover:text-white transition-colors mx-4">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="https://x.com/tal7cm" className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors mx-4">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="https://www.facebook.com/TAL7cm/" className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center hover:bg-blue-700 hover:text-white transition-colors mx-4">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-header-footer text-black py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-4 space-x-reverse mb-4">
            <div className="w-8 h-8 bg-white rounded-full p-1 flex items-center justify-center">
              <Image 
                src="/cropped-tallogo-1.png" 
                alt="TAL Height Device Logo" 
                width={32}
                height={32}
              />
            </div>
            <span className="text-lg font-semibold text-black">{t('heightDevice')} TAL</span>
          </div>
          <p className="text-lg text-black">{t('footerText')}</p>
        </div>
        

      </footer>
    </div>
  );
}
