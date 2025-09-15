'use client';

import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';

const faqData = [
  {
    question: "ما هو جهاز TAL لزيادة الطول؟",
    answer: "جهاز TAL هو جهاز طبي متطور مصمم لعلاج قصر القامة وزيادة الطول بشكل طبيعي وآمن. يعمل الجهاز على تحفيز نمو العظام وتحسين الوضعية العامة للجسم."
  },
  {
    question: "كيف يعمل جهاز TAL؟",
    answer: "يعمل الجهاز من خلال تقنيات متقدمة لتحفيز نمو العظام وتقوية العضلات المحيطة بالعمود الفقري. يساعد في تصحيح انحناء القامة وعلاج مشاكل العمود الفقري."
  },
  {
    question: "ما هي الفئة العمرية المناسبة لاستخدام الجهاز؟",
    answer: "الجهاز مناسب للاستخدام من عمر 14 إلى 40 سنة. يمكن استخدامه بأمان في هذه الفئة العمرية لتحقيق أفضل النتائج."
  },
  {
    question: "متى تظهر النتائج؟",
    answer: "النتائج تظهر من 3 إلى 6 أشهر من الاستخدام المنتظم. يختلف الوقت حسب حالة كل شخص والتزامه بتعليمات الاستخدام."
  },
  {
    question: "هل الجهاز آمن للاستخدام؟",
    answer: "نعم، الجهاز آمن تماماً للاستخدام. تم اختباره واعتماده من الجهات الصحية المختصة. لا يسبب أي آثار جانبية ضارة."
  },
  {
    question: "كم ساعة يجب استخدام الجهاز يومياً؟",
    answer: "يُنصح باستخدام الجهاز لمدة 30-45 دقيقة يومياً للحصول على أفضل النتائج. يمكن تقسيم الوقت على فترات متعددة خلال اليوم."
  },
  {
    question: "هل يمكن استخدام الجهاز مع وجود مشاكل صحية؟",
    answer: "يُنصح باستشارة الطبيب قبل الاستخدام إذا كان لديك مشاكل صحية معينة. الجهاز آمن لمعظم الحالات ولكن من الأفضل التأكد من الطبيب."
  },
  {
    question: "ما هي الضمانات المقدمة مع الجهاز؟",
    answer: "يأتي الجهاز مع ضمان شامل لمدة سنة كاملة. يشمل الضمان جميع الأجزاء والعيوب في التصنيع."
  }
];

export default function QuestionsPage() {
  const { dir } = useLanguage();
  const currentQuestions = faqData;

  return (
    <div className="min-h-screen bg-gray-50 py-20" dir={dir}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            الأسئلة الشائعة
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            إجابات على أكثر الأسئلة شيوعاً حول جهاز TAL لزيادة الطول
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <Accordion.Root
            className="space-y-4"
            type="single"
            collapsible
          >
            {currentQuestions.map((item) => (
              <Accordion.Item
                key={item.question}
                value={item.question}
                className="bg-white rounded-lg shadow-md border border-gray-200"
              >
                <Accordion.Header className="flex">
                  <Accordion.Trigger className="flex flex-1 items-center justify-between py-6 px-6 text-right font-semibold text-red-600 hover:bg-gray-50 transition-colors rounded-lg">
                    <span className="text-lg">{item.question}</span>
                    <ChevronDownIcon
                      className={cn(
                        'h-5 w-5 text-red-500 transition-transform duration-300',
                        'data-[state=open]:rotate-180'
                      )}
                    />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                  <div className="px-6 pb-6">
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {item.answer}
                    </p>
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>

        {/* Contact Section */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {language === 'ar' ? 'لم تجد إجابة لسؤالك؟' : 'Didn\'t find an answer to your question?'}
          </h2>
          <p className="text-gray-600 mb-6">
            {language === 'ar' 
              ? 'يمكنك التواصل معنا مباشرة للحصول على إجابة فورية'
              : 'You can contact us directly for an immediate answer'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="btn-primary text-lg px-8 py-4 inline-block"
            >
              {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
            </Link>
            <a
              href="https://new-mall.com/tal/p364801713"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-lg px-8 py-4 inline-block"
            >
              {language === 'ar' ? 'اطلبه الآن' : 'Order Now'}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
