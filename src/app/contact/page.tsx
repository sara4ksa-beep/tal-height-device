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
