'use client';

import { useState } from 'react';
import * as Form from '@radix-ui/react-form';
import * as Select from '@radix-ui/react-select';
import { CheckIcon, ChevronDownIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';

export default function ContactPage() {
  const { language, dir } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    contactMethod: 'email'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const subjects = {
    ar: [
      'استفسار عام',
      'معلومات المنتج',
      'الدعم الفني',
      'الشكاوى والاقتراحات',
      'طلب عرض سعر',
      'أخرى'
    ],
    en: [
      'General Inquiry',
      'Product Information',
      'Technical Support',
      'Complaints and Suggestions',
      'Price Quote Request',
      'Other'
    ]
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // إرسال الرسالة عبر API
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: `${language === 'ar' ? 'الموضوع' : 'Subject'}: ${formData.subject}\n\n${formData.message}`
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        setIsSubmitted(true);
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert(language === 'ar' ? 'حدث خطأ في إرسال الرسالة. يرجى المحاولة مرة أخرى.' : 'An error occurred while sending the message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 py-20" dir={dir}>
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckIcon className="w-10 h-10 text-green-600" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {language === 'ar' ? 'تم إرسال رسالتك بنجاح!' : 'Your message has been sent successfully!'}
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                {language === 'ar' 
                  ? 'تم إرسال رسالتك إلى فريقنا. سنقوم بالرد عليك في أقرب وقت ممكن.'
                  : 'Your message has been sent to our team. We will respond to you as soon as possible.'
                }
              </p>
              <Link href="/" className="btn-primary">
                {language === 'ar' ? 'العودة للصفحة الرئيسية' : 'Back to Home'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-20" dir={dir}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'ar'
              ? 'نحن هنا لمساعدتك! يمكنك التواصل معنا عبر النموذج أدناه أو استخدام معلومات الاتصال المباشرة'
              : 'We are here to help you! You can contact us through the form below or use direct contact information'
            }
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {language === 'ar' ? 'أرسل لنا رسالة' : 'Send us a message'}
              </h2>
              
              <Form.Root onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Form.Field name="name" className="space-y-2">
                    <Form.Label className="text-sm font-medium text-gray-700">
                      {language === 'ar' ? 'الاسم' : 'Name'}
                    </Form.Label>
                    <Form.Control asChild>
                      <input
                        type="text"
                        required
                        className="input-field"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                      />
                    </Form.Control>
                    <Form.Message match="valueMissing" className="text-red-500 text-sm">
                      {language === 'ar' ? 'الاسم مطلوب' : 'Name is required'}
                    </Form.Message>
                  </Form.Field>

                  <Form.Field name="phone" className="space-y-2">
                    <Form.Label className="text-sm font-medium text-gray-700">
                      {language === 'ar' ? 'رقم الهاتف' : 'Phone Number'}
                    </Form.Label>
                    <Form.Control asChild>
                      <input
                        type="tel"
                        className="input-field"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                      />
                    </Form.Control>
                  </Form.Field>
                </div>

                <Form.Field name="email" className="space-y-2">
                  <Form.Label className="text-sm font-medium text-gray-700">
                    {language === 'ar' ? 'البريد الإلكتروني *' : 'Email *'}
                  </Form.Label>
                  <Form.Control asChild>
                    <input
                      type="email"
                      required
                      className="input-field"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                    />
                  </Form.Control>
                  <Form.Message match="valueMissing" className="text-red-500 text-sm">
                    {language === 'ar' ? 'البريد الإلكتروني مطلوب' : 'Email is required'}
                  </Form.Message>
                  <Form.Message match="typeMismatch" className="text-red-500 text-sm">
                    {language === 'ar' ? 'يرجى إدخال بريد إلكتروني صحيح' : 'Please enter a valid email'}
                  </Form.Message>
                </Form.Field>

                <Form.Field name="subject" className="space-y-2">
                  <Form.Label className="text-sm font-medium text-gray-700">
                    {language === 'ar' ? 'الموضوع *' : 'Subject *'}
                  </Form.Label>
                  <Select.Root value={formData.subject} onValueChange={(value) => handleInputChange('subject', value)}>
                    <Select.Trigger className="input-field flex items-center justify-between">
                      <Select.Value placeholder={language === 'ar' ? 'اختر الموضوع' : 'Choose subject'} />
                      <Select.Icon>
                        <ChevronDownIcon className="w-4 h-4" />
                      </Select.Icon>
                    </Select.Trigger>
                    <Select.Portal>
                      <Select.Content className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
                        <Select.Viewport className="p-2">
                          {subjects[language as keyof typeof subjects].map((subject) => (
                            <Select.Item
                              key={subject}
                              value={subject}
                              className="relative flex items-center px-8 py-2 text-sm text-gray-700 hover:bg-blue-50 cursor-pointer rounded"
                            >
                              <Select.ItemText>{subject}</Select.ItemText>
                              <Select.ItemIndicator className="absolute left-2 inline-flex items-center">
                                <CheckIcon className="w-4 h-4" />
                              </Select.ItemIndicator>
                            </Select.Item>
                          ))}
                        </Select.Viewport>
                      </Select.Content>
                    </Select.Portal>
                  </Select.Root>
                </Form.Field>

                <Form.Field name="message" className="space-y-2">
                  <Form.Label className="text-sm font-medium text-gray-700">
                    {language === 'ar' ? 'الرسالة *' : 'Message *'}
                  </Form.Label>
                  <Form.Control asChild>
                    <textarea
                      required
                      rows={5}
                      className="input-field resize-none"
                      placeholder={language === 'ar' ? 'اكتب رسالتك هنا...' : 'Write your message here...'}
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                    />
                  </Form.Control>
                  <Form.Message match="valueMissing" className="text-red-500 text-sm">
                    {language === 'ar' ? 'الرسالة مطلوبة' : 'Message is required'}
                  </Form.Message>
                </Form.Field>

                <Form.Submit asChild>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={cn(
                      'w-full py-4 px-8 text-lg font-semibold rounded-lg transition-colors duration-200',
                      isSubmitting
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'btn-primary'
                    )}
                  >
                    {isSubmitting 
                      ? (language === 'ar' ? 'جاري الإرسال...' : 'Sending...')
                      : (language === 'ar' ? 'أرسل الرسالة' : 'Send Message')
                    }
                  </button>
                </Form.Submit>
              </Form.Root>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* FAQ Link */}
              <div className="bg-blue-50 rounded-xl p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {language === 'ar' ? 'لديك أسئلة؟' : 'Have questions?'}
                </h3>
                <p className="text-gray-600 mb-4">
                  {language === 'ar' 
                    ? 'اطلع على الأسئلة الشائعة للحصول على إجابات سريعة'
                    : 'Check out the FAQ for quick answers'
                  }
                </p>
                <Link href="/questions" className="btn-secondary">
                  {language === 'ar' ? 'الأسئلة الشائعة' : 'FAQ'}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
