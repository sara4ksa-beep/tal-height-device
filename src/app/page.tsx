'use client';

import { useState, useEffect } from 'react';

export default function HeightDeviceLanding() {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [showToast, setShowToast] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        } else {
          return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Copy coupon code
  const copyCouponCode = () => {
    navigator.clipboard.writeText('T11');
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  // Track CTA clicks
  const trackCTAClick = (label: string) => {
    if (typeof window !== 'undefined' && (window as unknown as Record<string, unknown>).dataLayer) {
      ((window as unknown as Record<string, unknown>).dataLayer as Array<Record<string, unknown>>).push({
        event: 'cta_click',
        label: label
      });
    }
  };

  // FAQ data
  const faqData = [
    {
      question: "هل جهاز الطول آمن للاستخدام؟",
      answer: "نعم، جهاز الطول TAL امن 100% ويستخدم من عمر 12 الى 40 عام"
    },
    {
      question: "كم يستغرق التسليم؟",
      answer: "التسليم خلال 3-5 أيام عمل داخل المملكة. للطلبات العاجلة، يمكن التسليم خلال 24-48 ساعة مقابل رسوم إضافية."
    },
    {
      question: "هل الجهاز مضمون؟",
      answer: "نعم الجهاز مضمون لمدة 6 اشهر من تاريخ الشراء ضمان ضد الاعطال و العيوب الصناعية"
    }
  ];

  return (
    <>
      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700;900&display=swap" rel="stylesheet" />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white" dir="rtl" style={{ fontFamily: 'Tajawal, sans-serif' }}>
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-4 left-4 z-50 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg animate-bounce">
          تم نسخ الكود بنجاح!
        </div>
      )}


      {/* Hero Section */}
      <section className="relative py-20 pt-32 md:pt-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-32 h-32 bg-blue-600 rounded-full opacity-20"></div>
          <div className="absolute bottom-20 left-10 w-24 h-24 bg-blue-500 rounded-full opacity-15"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-400 rounded-full opacity-25"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="block text-red-600 mb-4">هل حلمت بزيادة طولك ؟</span>
              جهاز TAL يعطيك نتائج مبهرة
            </h1>
            
            {/* Before/After Image */}
            <div className="mb-8">
              <img 
                src="/talzz.jpeg" 
                alt="نتائج جهاز تي اي ال - قبل وبعد" 
                className="mx-auto max-w-md w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            
            <p className="text-xl md:text-2xl text-red-600 font-bold mb-2 leading-relaxed">
              خصم خاص
            </p>

            {/* Discount Badge */}
            <div className="inline-flex items-center bg-gradient-to-r from-green-50 to-green-100 border-2 border-green-300 text-green-800 px-8 py-4 rounded-2xl text-lg font-semibold mb-8 shadow-sm">
              <span className="ml-3">استخدم كود الخصم:</span>
              <div className="flex items-center bg-white border-2 border-dashed border-green-400 text-green-700 px-4 py-2 rounded-lg font-bold cursor-pointer hover:bg-green-50 transition-colors" onClick={copyCouponCode}>
                <span className="font-mono text-xl">T11</span>
                <svg className="w-4 h-4 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mb-12">
            <a
              href="https://new-mall.com/tal/p364801713"
              onClick={() => trackCTAClick('hero')}
              className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 text-white text-2xl font-bold px-12 py-6 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
            >
              اطلب الآن
            </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-gray-900">
              <div className="flex items-center">
                <div className="flex text-yellow-400 ml-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="font-semibold">متوسط التقييم 4.8/5</span>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">1800+</div>
                <div className="text-sm">عميل راضي</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            لماذا تختار جهازنا؟
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">نتائج سريعة وفعالة</h3>
              <p className="text-gray-600"><span className="font-bold">يزيد طولك لغاية 7 سم خلال 3 الى 6 اشهر</span></p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">آمن ومضمون</h3>
              <p className="text-gray-600"><span className="font-bold">مصنوع بطريقة تساعد الجسم على الاستطالة بطريقة امنة</span></p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">سهل الاستخدام</h3>
              <p className="text-gray-600"><span className="font-bold">استخدام بسيط 15-30 دقيقة يومياً مع دليل شامل باللغة العربية</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            آراء عملائنا
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4"><span className="font-bold">&quot;جهاز ممتاز زاد طولي 4 سم خلال 4 أشهر. أنصح به بشدة&quot;</span></p>
              <div className="font-semibold text-gray-900">أحمد</div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4"><span className="font-bold">&quot;سهل الاستخدام والنتائج واضحة. شكراً لكم&quot;</span></p>
              <div className="font-semibold text-gray-900">فاطمة</div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4"><span className="font-bold">&quot;الجهاز روعة حققت الى الان 5 سم خلال 4 اشهر الف شكر لكم&quot;</span></p>
              <div className="font-semibold text-gray-900">خالد</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            مميزات الجهاز
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border-r-4 border-blue-600">
              <h3 className="text-xl font-bold text-gray-900 mb-3">يزيد طول قامتك</h3>
              <p className="text-gray-900">
                <span className="font-bold">بالتدريب على الجهاز مدة 25 دقيقة يوميا تحقق 7 سم زيادة في طولك</span>
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border-r-4 border-blue-600">
              <h3 className="text-xl font-bold text-gray-900 mb-3">شد البطن</h3>
              <p className="text-gray-900">
                <span className="font-bold">يشد عضلات بطنك ويجعلك تبدو أكثر لياقة وأناقة</span>
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border-r-4 border-blue-600">
              <h3 className="text-xl font-bold text-gray-900 mb-3">معالجة انحناء القامة</h3>
              <p className="text-gray-900">
                <span className="font-bold">في خلال اقل من 3 اسابيع ستشعر بتحسن كبير في ظهرك و قامة جميلة غير منحنيه</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Discount Callout */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            لا تفوت هذا العرض الخاص
          </h2>
          
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <div className="text-2xl md:text-3xl font-bold text-white mb-4">
              <span className="text-black">احصل على خصم خاص بكود</span> <span className="bg-white text-blue-600 px-4 py-2 rounded-full">T11</span>
            </div>
          </div>

          <a
            href="https://new-mall.com/tal/p364801713"
            onClick={() => trackCTAClick('discount_callout')}
            className="inline-block bg-white text-blue-600 text-xl font-bold px-12 py-6 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
          >
            اطلب الآن واحصل على الخصم
          </a>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              الأسئلة الشائعة
            </h2>
            <p className="text-lg text-gray-600">إجابات على أكثر الأسئلة شيوعاً</p>
          </div>
          
          <div className="space-y-6">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300">
                <button
                  className="w-full px-8 py-6 text-right flex items-center justify-between hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 transition-all duration-300 group"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <div className="flex items-center space-x-4 space-x-reverse">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      ؟
                    </div>
                    <span className="text-lg font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">
                      {faq.question}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <span className="text-sm text-gray-500 hidden sm:block">
                      {openFaq === index ? 'إخفاء' : 'عرض الإجابة'}
                    </span>
                    <div className={`w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center transition-all duration-300 ${
                      openFaq === index ? 'bg-blue-600 text-white' : 'group-hover:bg-blue-200'
                    }`}>
                      <svg
                        className={`w-4 h-4 transform transition-transform duration-300 ${
                          openFaq === index ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </button>
                {openFaq === index && (
                  <div className="px-8 pb-6 border-t border-gray-100">
                    <div className="pt-6">
                      <div className="flex items-start space-x-4 space-x-reverse">
                        <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                          <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="text-gray-900 leading-relaxed text-lg">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* CTA Button after FAQ */}
          <div className="text-center mt-12">
            <a
              href="https://new-mall.com/tal/p364801713"
              onClick={() => trackCTAClick('faq_section')}
              className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 text-white text-xl font-bold px-12 py-6 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
            >
              اطلب الآن
            </a>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">تابعنا على وسائل التواصل الاجتماعي</h3>
          <p className="text-lg text-gray-600 mb-12">احصل على آخر الأخبار والنصائح حول جهاز TAL</p>
          <div className="flex justify-center flex-wrap gap-6 sm:gap-8">
            <a 
              href="https://www.instagram.com/tal7cm/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a 
              href="https://x.com/tal7cm" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 sm:w-12 sm:h-12 bg-black rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a 
              href="https://www.tiktok.com/@tal7cm" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 sm:w-12 sm:h-12 bg-black rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.11V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-.88-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
            <a 
              href="https://www.youtube.com/@TAL7cm" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 sm:w-12 sm:h-12 bg-red-600 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-blue-600 text-white p-4 shadow-2xl md:hidden z-50">
        <div className="flex items-center justify-between">
          <div className="text-sm">
            <div className="font-bold">هل حلمت بزيادة طولك ؟</div>
            <div className="text-blue-200">كود: T11</div>
          </div>
          <a
            href="https://new-mall.com/tal/p364801713"
            onClick={() => trackCTAClick('mobile_sticky')}
            className="bg-white text-blue-600 font-bold px-6 py-3 rounded-full hover:bg-gray-100 transition-colors"
          >
            اطلب الآن
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">©️ 2025 جهاز الطول. جميع الحقوق محفوظة</p>
        </div>
      </footer>
      </div>
    </>
  );
}