'use client';

import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';

const faqData = {
  ar: [
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
  ],
  en: [
    {
      question: "What is the TAL height increase device?",
      answer: "The TAL device is an advanced medical device designed to treat short stature and increase height naturally and safely. The device works by stimulating bone growth and improving overall body posture."
    },
    {
      question: "How does the TAL device work?",
      answer: "The device works through advanced techniques to stimulate bone growth and strengthen the muscles surrounding the spine. It helps correct posture problems and treat spine issues."
    },
    {
      question: "What is the appropriate age range for using the device?",
      answer: "The device is suitable for use from age 14 to 40 years. It can be used safely in this age range to achieve the best results."
    },
    {
      question: "When do results appear?",
      answer: "Results appear within 3 to 6 months of regular use. The time varies depending on each person's condition and commitment to usage instructions."
    },
    {
      question: "Is the device safe to use?",
      answer: "Yes, the device is completely safe to use. It has been tested and approved by relevant health authorities. It causes no harmful side effects."
    },
    {
      question: "How many hours should the device be used daily?",
      answer: "It is recommended to use the device for 30-45 minutes daily to achieve the best results. The time can be divided into multiple periods throughout the day."
    },
    {
      question: "Can the device be used with existing health problems?",
      answer: "It is recommended to consult a doctor before use if you have certain health problems. The device is safe for most cases but it's better to check with a doctor."
    },
    {
      question: "What warranties are provided with the device?",
      answer: "The device comes with a comprehensive warranty for one full year. The warranty covers all parts and manufacturing defects."
    }
  ]
};

export default function QuestionsPage() {
  const { language, dir } = useLanguage();
  const currentQuestions = faqData[language];

  return (
    <div className="min-h-screen bg-gray-50 py-20" dir={dir}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {language === 'ar' ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'ar' 
              ? 'إجابات على أكثر الأسئلة شيوعاً حول جهاز TAL لزيادة الطول'
              : 'Answers to the most common questions about the TAL height increase device'
            }
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
          <a
            href="https://new-mall.com/tal/p364801713"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-lg px-8 py-4 inline-block"
          >
            {language === 'ar' ? 'اطلبه الآن' : 'Order Now'}
          </a>
        </div>
      </div>
    </div>
  );
}
