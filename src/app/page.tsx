'use client';

import Link from 'next/link';
import { CheckCircle, Award } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function HomePage() {
  const { t, dir, language, setLanguage } = useLanguage();

  return (
    <div className="min-h-screen bg-white" dir={dir}>
      {/* Hero Section */}
      <section className="relative bg-cover bg-center bg-no-repeat text-white py-8 sm:py-12 md:py-16 lg:py-24 xl:py-32" style={{ backgroundImage: 'url(/hero-banner.png)' }}>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-3 md:mb-4 lg:mb-6 xl:mb-8 drop-shadow-2xl leading-tight" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
            {t('heroTitle')}
          </h1>
          <div className="inline-block bg-header-footer px-2 sm:px-3 md:px-4 lg:px-5 xl:px-6 py-1.5 sm:py-2 md:py-3 lg:py-4 rounded-lg mb-2 sm:mb-3 md:mb-4 lg:mb-6 xl:mb-8 max-w-[260px] sm:max-w-[300px] md:max-w-sm lg:max-w-md xl:max-w-none">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold leading-relaxed">
              <span className="text-red-600 block mb-1 sm:mb-1.5 md:mb-2">{language === 'ar' ? 'هل حلمت بزيادة طولك؟' : 'Have you dreamed of increasing your height?'}</span>
              <span className="text-black">{language === 'ar' ? 'الآن يمكنك تحقيق حلمك!' : 'Now you can achieve your dream!'}</span>
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 justify-center mb-2 sm:mb-3 md:mb-4 lg:mb-6 xl:mb-8">
            <a href="https://new-mall.com/tal/p364801713" target="_blank" rel="noopener noreferrer" className="btn-primary text-sm sm:text-base md:text-lg px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-2.5 md:py-3 lg:py-4 text-center inline-block w-auto sm:w-auto max-w-[180px] sm:max-w-[200px] md:max-w-none mx-auto sm:mx-0">
              {t('orderNow')}
            </a>
          </div>
          
          {/* Language Switch Button */}
          <div className="mt-2 sm:mt-2.5 md:mt-3 lg:mt-4 xl:mt-6">
            <button
              onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
              className="px-2.5 sm:px-3 md:px-4 lg:px-5 py-1.5 sm:py-2 md:py-2.5 lg:py-3 bg-black/80 hover:bg-black text-white font-bold rounded-lg transition-colors duration-200 border-2 border-white shadow-lg text-xs sm:text-sm md:text-base"
            >
              {language === 'ar' ? 'English' : 'العربية'}
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-2xl md:text-3xl font-bold text-center text-gray-900 mb-6 md:mb-8">{t('featuresTitle')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            <div className="card text-center p-4 md:p-6">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <CheckCircle className="w-6 h-6 md:w-8 md:h-8 text-green-600" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">{t('feature1Title')}</h3>
              <p className="text-sm md:text-base text-gray-600">{t('feature1Desc')}</p>
            </div>
            
            <div className="card text-center p-4 md:p-6">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <CheckCircle className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">{t('feature2Title')}</h3>
              <p className="text-sm md:text-base text-gray-600">{t('feature2Desc')}</p>
            </div>
            
            <div className="card text-center p-4 md:p-6">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <CheckCircle className="w-6 h-6 md:w-8 md:h-8 text-purple-600" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">{t('feature3Title')}</h3>
              <p className="text-sm md:text-base text-gray-600">{t('feature3Desc')}</p>
            </div>
            
            <div className="card text-center p-4 md:p-6">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <CheckCircle className="w-6 h-6 md:w-8 md:h-8 text-orange-600" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">{t('feature4Title')}</h3>
              <p className="text-sm md:text-base text-gray-600">{t('feature4Desc')}</p>
            </div>
            
            <div className="card text-center p-4 md:p-6">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <CheckCircle className="w-6 h-6 md:w-8 md:h-8 text-red-600" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">{t('feature5Title')}</h3>
              <p className="text-sm md:text-base text-gray-600">{t('feature5Desc')}</p>
            </div>
            
            <div className="card text-center p-4 md:p-6">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <Award className="w-6 h-6 md:w-8 md:h-8 text-indigo-600" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">{t('feature6Title')}</h3>
              <p className="text-sm md:text-base text-gray-600">{t('feature6Desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Section - Moved Above Product Description */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-6 md:mb-8">{t('seoTitle')}</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              <div className="bg-white rounded-xl p-4 md:p-6 shadow-lg">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">{t('seo1Title')}</h3>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  {t('seo1Desc')}
                </p>
              </div>
              <div className="bg-white rounded-xl p-4 md:p-6 shadow-lg">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">{t('seo2Title')}</h3>
                <ul className="text-sm md:text-base text-gray-700 space-y-2">
                  {language === 'ar' ? (
                    <>
                      <li>• يزيد الطول 7 سم وأكثر</li>
                      <li>• يعالج قصر القامة للكبار والصغار</li>
                      <li>• يعالج آلام الظهر وانحناء القامة</li>
                      <li>• يخلصك من بروز البطن</li>
                      <li>• منتج معتمد لعلاج مشاكل الطول</li>
                    </>
                  ) : (
                    <>
                      <li>• Increases height by 7 cm or more</li>
                      <li>• Treats short stature for adults and children</li>
                      <li>• Treats back pain and posture problems</li>
                      <li>• Eliminates belly protrusion</li>
                      <li>• Certified product for treating height problems</li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Testimonials */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8 md:mb-12">
            تقييمات العملاء
          </h2>
          
          <div className="max-w-6xl mx-auto">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={3}
              navigation={false}
              pagination={{ 
                clickable: true,
                dynamicBullets: true,
              }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              loop={true}
              speed={600}
              effect="slide"
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1280: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              className="testimonials-swiper"
            >
              {/* Testimonial 1 */}
              <SwiperSlide>
                <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 h-full">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-lg">
                      م
                    </div>
                    <div className="mr-3">
                      <h4 className="font-semibold text-gray-900">محمد الرحبي</h4>
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    الله يجزاك بالخير ، جهاز الطول فاندي حوالي ٥ سم و مستمر عليه و ان شاء الله استفيد اكثر
                  </p>
                </div>
              </SwiperSlide>

              {/* Testimonial 2 */}
              <SwiperSlide>
                <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 h-full">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-lg">
                      ح
                    </div>
                    <div className="mr-3">
                      <h4 className="font-semibold text-gray-900">حمد المطاوعة</h4>
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    الحمد لله زاد طولي ٣ سم و حالي لي شهرين استخدمه كان اخوي يستخدمه و الان انا استخدمه
                  </p>
                </div>
              </SwiperSlide>

              {/* Testimonial 3 */}
              <SwiperSlide>
                <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 h-full">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold text-lg">
                      ل
                    </div>
                    <div className="mr-3">
                      <h4 className="font-semibold text-gray-900">ليلى البستاني</h4>
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    بدي احكي عن الجهاز الحمد لله هلق استفدت و زدت حوالي ٤ سم وباقي شهرين على الاستعمال
                  </p>
                </div>
              </SwiperSlide>

              {/* Testimonial 4 */}
              <SwiperSlide>
                <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 h-full">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold text-lg">
                      خ
                    </div>
                    <div className="mr-3">
                      <h4 className="font-semibold text-gray-900">خالد المطيري</h4>
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    كان عندي ثوب أطول مني و الان صار بطولي و ظهري صار احسن وهذة تو البدايات شكرا لكم
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">{t('ctaTitle')}</h2>
          <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8">
            {t('ctaSubtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-6 md:mb-8">
            <a href="https://new-mall.com/tal/p364801713" target="_blank" rel="noopener noreferrer" className="btn-primary text-base md:text-lg px-6 md:px-8 py-3 md:py-4">
              {t('ctaButton')}
            </a>
          </div>
          <Link href="/questions" className="text-base md:text-lg text-red-600 mb-6 md:mb-8 hover:text-red-700 cursor-pointer underline">
            {t('ctaFaq')}
          </Link>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 md:mb-8">{t('socialTitle')}</h3>
          <div className="flex justify-center flex-wrap gap-3 md:gap-4">
            <a href="https://www.youtube.com/@TAL7cm" className="w-10 h-10 md:w-12 md:h-12 bg-gray-200 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            <a href="https://www.tiktok.com/@tal7cm" className="w-10 h-10 md:w-12 md:h-12 bg-gray-200 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors">
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.11V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-.88-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/tal7cm/" className="w-10 h-10 md:w-12 md:h-12 bg-gray-200 rounded-full flex items-center justify-center hover:bg-purple-600 hover:text-white transition-colors">
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="https://x.com/tal7cm" className="w-10 h-10 md:w-12 md:h-12 bg-gray-200 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors">
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="https://www.facebook.com/TAL7cm/" className="w-10 h-10 md:w-12 md:h-12 bg-gray-200 rounded-full flex items-center justify-center hover:bg-blue-700 hover:text-white transition-colors">
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-header-footer text-black py-6 md:py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-3 md:space-x-4 space-x-reverse mb-3 md:mb-4">
            <div className="w-6 h-6 md:w-8 md:h-8 bg-white rounded-full p-1 flex items-center justify-center">
          <Image
                src="/cropped-tallogo-1.png" 
                alt="TAL Height Device Logo" 
                width={32}
                height={32}
              />
            </div>
            <span className="text-base md:text-lg font-semibold text-black">{t('heightDevice')} TAL</span>
          </div>
          <p className="text-base md:text-lg text-black">{t('footerText')}</p>
        </div>
      </footer>
    </div>
  );
}
