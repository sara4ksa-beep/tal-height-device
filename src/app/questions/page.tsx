'use client';

import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';

const questions = {
  ar: [
    {
      id: '1',
      question: 'كيف يعمل جهاز TAL لزيادة الطول؟',
      answer: 'يعمل الجهاز من خلال تطبيق قوة شد تدريجية على العمود الفقري، مما يحفز نمو العظام وتمدد الأربطة. يستخدم تقنية علمية مدروسة لتحقيق نتائج آمنة وفعالة.'
    },
    {
      id: '2',
      question: 'كم من الوقت أحتاج لرؤية النتائج؟',
      answer: 'تبدأ النتائج الأولية في الظهور خلال 2-4 أسابيع من الاستخدام المنتظم. للحصول على النتائج الكاملة (7 سم وأكثر)، يوصى بالاستخدام لمدة 3-6 أشهر.'
    },
    {
      id: '3',
      question: 'هل الجهاز آمن للاستخدام؟',
      answer: 'نعم، الجهاز آمن تماماً للاستخدام. تم اختباره واعتماده من قبل خبراء الصحة. يستخدم تقنيات آمنة ولا يسبب أي أضرار جانبية.'
    },
    {
      id: '4',
      question: 'كم مرة يجب استخدام الجهاز يومياً؟',
      answer: 'يوصى باستخدام الجهاز لمدة 15-20 دقيقة يومياً، 5-6 مرات في الأسبوع. يمكن زيادة المدة تدريجياً حسب راحة المستخدم.'
    },
    {
      id: '5',
      question: 'هل الجهاز مناسب لجميع الأعمار؟',
      answer: 'الجهاز مناسب للبالغين من عمر 18-50 سنة. للأعمار الأكبر، يوصى باستشارة الطبيب قبل الاستخدام.'
    },
    {
      id: '6',
      question: 'ما هي مدة الضمان؟',
      answer: 'نوفر ضمان شامل لمدة سنة كاملة على جميع أجزاء الجهاز. يشمل الضمان الإصلاح أو الاستبدال المجاني.'
    },
    {
      id: '7',
      question: 'هل الجهاز سهل الاستخدام؟',
      answer: 'نعم، الجهاز سهل الاستخدام جداً. يأتي مع دليل مفصل بالصور والفيديو، بالإضافة إلى دعم فني متوفر على مدار الساعة.'
    },
    {
      id: '8',
      question: 'هل يمكن استخدام الجهاز مع حالات طبية معينة؟',
      answer: 'في حالة وجود مشاكل صحية في العمود الفقري أو العظام، يوصى باستشارة الطبيب قبل الاستخدام. الجهاز آمن لمعظم الحالات.'
    },
    {
      id: '9',
      question: 'كيف يتم الشحن والتوصيل؟',
      answer: 'نوفر خدمة شحن سريعة وآمنة لجميع أنحاء المملكة. التوصيل خلال 2-3 أيام عمل، مع إمكانية التتبع عبر الإنترنت.'
    },
    {
      id: '10',
      question: 'هل يمكن إرجاع الجهاز إذا لم يعجبني؟',
      answer: 'نعم، نوفر ضمان استرداد الأموال خلال 30 يوماً من الشراء إذا لم تكن راضياً عن المنتج، بشرط أن يكون في حالة ممتازة.'
    }
  ],
  en: [
    {
      id: '1',
      question: 'How does the TAL device work to increase height?',
      answer: 'The device works by applying gradual traction force to the spine, stimulating bone growth and ligament stretching. It uses scientifically studied technology to achieve safe and effective results.'
    },
    {
      id: '2',
      question: 'How long does it take to see results?',
      answer: 'Initial results begin to appear within 2-4 weeks of regular use. For complete results (7 cm or more), it is recommended to use for 3-6 months.'
    },
    {
      id: '3',
      question: 'Is the device safe to use?',
      answer: 'Yes, the device is completely safe to use. It has been tested and approved by health experts. It uses safe techniques and causes no side effects.'
    },
    {
      id: '4',
      question: 'How often should I use the device daily?',
      answer: 'It is recommended to use the device for 15-20 minutes daily, 5-6 times a week. Duration can be gradually increased according to user comfort.'
    },
    {
      id: '5',
      question: 'Is the device suitable for all ages?',
      answer: 'The device is suitable for adults aged 18-50 years. For older ages, it is recommended to consult a doctor before use.'
    },
    {
      id: '6',
      question: 'What is the warranty period?',
      answer: 'We provide a comprehensive warranty for one full year on all parts of the device. The warranty includes free repair or replacement.'
    },
    {
      id: '7',
      question: 'Is the device easy to use?',
      answer: 'Yes, the device is very easy to use. It comes with a detailed manual with pictures and video, plus technical support available 24/7.'
    },
    {
      id: '8',
      question: 'Can the device be used with certain medical conditions?',
      answer: 'In case of health problems in the spine or bones, it is recommended to consult a doctor before use. The device is safe for most cases.'
    },
    {
      id: '9',
      question: 'How is shipping and delivery done?',
      answer: 'We provide fast and secure shipping service throughout the Kingdom. Delivery within 2-3 working days, with online tracking capability.'
    },
    {
      id: '10',
      question: 'Can I return the device if I don\'t like it?',
      answer: 'Yes, we provide a money-back guarantee within 30 days of purchase if you are not satisfied with the product, provided it is in excellent condition.'
    }
  ]
};

export default function QuestionsPage() {
  const { language, dir } = useLanguage();
  const currentQuestions = questions[language as keyof typeof questions];

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
                key={item.id}
                value={item.id}
                className="bg-white rounded-lg shadow-md border border-gray-200"
              >
                <Accordion.Header className="flex">
                  <Accordion.Trigger className="flex flex-1 items-center justify-between py-6 px-6 text-right font-semibold text-gray-900 hover:bg-gray-50 transition-colors rounded-lg">
                    <span className="text-lg">{item.question}</span>
                    <ChevronDownIcon
                      className={cn(
                        'h-5 w-5 text-gray-500 transition-transform duration-300',
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
