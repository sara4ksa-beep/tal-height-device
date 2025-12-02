'use client';

import { useState } from 'react';
import * as Form from '@radix-ui/react-form';
import { CheckIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';

export default function ContactPage() {
  const { dir } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    contactMethod: 'email'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
          message: formData.message
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
      alert('حدث خطأ في إرسال الرسالة. يرجى المحاولة مرة أخرى.');
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
                تم إرسال رسالتك بنجاح!
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                تم إرسال رسالتك إلى فريقنا. سنقوم بالرد عليك في أقرب وقت ممكن.
              </p>
              <Link href="/" className="btn-primary">
                العودة للصفحة الرئيسية
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
            تواصل معنا
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            نحن هنا لمساعدتك! يمكنك التواصل معنا عبر النموذج أدناه أو استخدام معلومات الاتصال المباشرة
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                أرسل لنا رسالة
              </h2>
              
              <Form.Root onSubmit={handleSubmit} className="space-y-6">
                <Form.Field name="name" className="space-y-2">
                  <Form.Label className="text-sm font-medium text-gray-700">
                    الاسم
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
                    الاسم مطلوب
                  </Form.Message>
                </Form.Field>

                <Form.Field name="email" className="space-y-2">
                  <Form.Label className="text-sm font-medium text-gray-700">
                    البريد الإلكتروني *
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
                    البريد الإلكتروني مطلوب
                  </Form.Message>
                  <Form.Message match="typeMismatch" className="text-red-500 text-sm">
                    يرجى إدخال بريد إلكتروني صحيح
                  </Form.Message>
                </Form.Field>

                <Form.Field name="message" className="space-y-2">
                  <Form.Label className="text-sm font-medium text-gray-700">
                    الرسالة *
                  </Form.Label>
                  <Form.Control asChild>
                    <textarea
                      required
                      rows={5}
                      className="input-field resize-none"
                      placeholder='اكتب رسالتك هنا...'
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                    />
                  </Form.Control>
                  <Form.Message match="valueMissing" className="text-red-500 text-sm">
                    الرسالة مطلوبة
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
                    {isSubmitting ? 'جاري الإرسال...' : 'أرسل الرسالة'}
                  </button>
                </Form.Submit>
              </Form.Root>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* WhatsApp Contact */}
              <a
                href="https://wa.me/966551781111"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-50 rounded-xl p-6 border border-green-200 hover:bg-green-100 transition-colors block"
              >
                <div className="flex items-center justify-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </div>
                </div>
                <p className="text-center text-gray-700 font-medium">
                  للتواصل عبر الواتساب راسلنا هنا: <span className="font-bold text-green-600">00966551781111</span>
                </p>
              </a>

              {/* FAQ Link */}
              <div className="bg-blue-50 rounded-xl p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  لديك أسئلة؟
                </h3>
                <p className="text-gray-600 mb-4">
                  اطلع على الأسئلة الشائعة للحصول على إجابات سريعة
                </p>
                <Link href="/questions" className="btn-secondary">
                  الأسئلة الشائعة
                </Link>
              </div>

              {/* Order Now Box */}
              <div className="bg-green-50 rounded-xl p-6 text-center border border-green-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  أو اطلبه الآن
                </h3>
                <p className="text-gray-600 mb-4">
                  بالضغط على الزر أدناه
                </p>
                <a
                  href="https://new-mall.com/tal/p364801713"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl inline-block"
                >
                  اطلبه الآن
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
