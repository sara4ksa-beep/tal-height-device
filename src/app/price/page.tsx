'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';

const prices = [
  { country: 'المملكة العربية السعودية', price: 'SR 2800', currency: 'ريال سعودي' },
  { country: 'دولة الكويت', price: 'KWD 260', currency: 'دينار كويتي' },
  { country: 'مملكة البحرين', price: 'BHD 322', currency: 'دينار بحريني' },
  { country: 'دولة قطر', price: 'QAR 3120', currency: 'ريال قطري' },
  { country: 'الامارات العربية المتحدة', price: 'AED 3160', currency: 'درهم إماراتي' },
  { country: 'سلطنة عمان', price: 'OMR 330', currency: 'ريال عماني' },
  { country: 'العراق', price: '900', currency: 'دولار امريكي' },
  { country: 'الاردن', price: 'JOD 610', currency: 'دينار أردني' },
  { country: 'مصر', price: 'EGP 41000', currency: 'جنيه مصري' },
  { country: 'المغرب', price: 'MAD 8400', currency: 'درهم مغربي' },
  { country: 'جميع الدول الاوربية', price: 'EUR 800', currency: 'يورو' },
  { country: 'الولايات المتحدة الامريكية', price: 'USD 910', currency: 'دولار امريكي' },
  { country: 'كندا', price: 'CAD 1160', currency: 'دولار كندي' },
  { country: 'استراليا', price: 'AU 1280', currency: 'دولار استرالي' },
  { country: 'البرازيل', price: 'BRL 5100', currency: 'ريال برازيلي' },
  { country: 'روسيا', price: '910', currency: 'دولار امريكي' },
];

export default function PricePage() {
  const { dir } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-12 md:pb-20" dir={dir}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 sm:mb-4">
            الأسعار
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 px-2">
            الاسعار شاملة التوصيل والضريبة
          </p>
        </div>

        {/* Mobile Cards View */}
        <div className="block md:hidden space-y-3">
          {prices.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-4 border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-base font-bold text-gray-900 text-right flex-1">
                  {item.country}
                </h3>
              </div>
              <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-200">
                <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1.5 rounded-lg font-bold text-base">
                  {item.price}
                </span>
                <span className="text-sm text-gray-600 font-medium">
                  {item.currency}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Table View */}
        <div className="hidden md:block bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                <tr>
                  <th className="px-4 lg:px-6 py-3 lg:py-4 text-right text-base lg:text-lg font-bold">الدولة / المنطقة</th>
                  <th className="px-4 lg:px-6 py-3 lg:py-4 text-center text-base lg:text-lg font-bold">السعر</th>
                  <th className="px-4 lg:px-6 py-3 lg:py-4 text-center text-base lg:text-lg font-bold">العملة</th>
                </tr>
              </thead>
              <tbody>
                {prices.map((item, index) => (
                  <tr
                    key={index}
                    className={`border-b border-gray-200 hover:bg-blue-50 transition-colors ${
                      index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                    }`}
                  >
                    <td className="px-4 lg:px-6 py-3 lg:py-4 text-right text-base lg:text-lg font-semibold text-gray-900">
                      {item.country}
                    </td>
                    <td className="px-4 lg:px-6 py-3 lg:py-4 text-center">
                      <span className="inline-block bg-blue-100 text-blue-700 px-3 lg:px-4 py-1.5 lg:py-2 rounded-lg font-bold text-base lg:text-lg">
                        {item.price}
                      </span>
                    </td>
                    <td className="px-4 lg:px-6 py-3 lg:py-4 text-center text-gray-600 text-sm lg:text-base">
                      {item.currency}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-8 sm:mt-10 md:mt-12 text-center">
          <Link
            href="https://new-mall.com/tal/p364801713"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 text-white text-base sm:text-lg md:text-xl font-bold px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
          >
            اطلب الآن
          </Link>
        </div>

        {/* Back to Home */}
        <div className="mt-6 sm:mt-8 text-center">
          <Link
            href="/"
            className="text-blue-600 hover:text-blue-700 font-semibold text-base sm:text-lg underline"
          >
            العودة للصفحة الرئيسية
          </Link>
        </div>
      </div>
    </div>
  );
}

