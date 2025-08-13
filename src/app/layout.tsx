import type { Metadata } from 'next';
import './globals.css';
import Navigation from '@/components/Navigation';
import { LanguageProvider } from '@/contexts/LanguageContext';

export const metadata: Metadata = {
  title: 'جهاز زيادة الطول TAL - علاج قصر القامة وزيادة الطول 7 سم | TAL7cm.com',
  description: 'جهاز TAL لزيادة الطول وعلاج قصر القامة. يزيد طولك 7 سم وأكثر، يعالج آلام الظهر، يخلصك من بروز البطن، يعالج انحناء القامة. منتج مجرب وموثوق لعلاج مشاكل الطول.',
  keywords: 'جهاز زيادة الطول, علاج قصر القامة, زيادة الطول 7 سم, جهاز TAL, علاج انحناء القامة, علاج آلام الظهر, علاج بروز البطن, تطويل القامة, علاج القصر, جهاز تطويل, زيادة الطول طبيعي, علاج مشاكل الطول, جهاز TAL7cm, منتج زيادة الطول, علاج قصر القامة للكبار, جهاز تطويل العمود الفقري',
  authors: [{ name: 'TAL Height Device' }],
  creator: 'TAL Height Device',
  publisher: 'TAL Height Device',

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://tal7cm.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'جهاز زيادة الطول TAL - علاج قصر القامة وزيادة الطول 7 سم',
    description: 'جهاز TAL لزيادة الطول وعلاج قصر القامة. يزيد طولك 7 سم وأكثر، يعالج آلام الظهر، يخلصك من بروز البطن، يعالج انحناء القامة.',
    url: 'https://tal7cm.com',
    siteName: 'جهاز زيادة الطول TAL',
    locale: 'ar_SA',
    type: 'website',
    images: [
      {
        url: '/hero-banner.png',
        width: 1200,
        height: 630,
        alt: 'جهاز زيادة الطول TAL - علاج قصر القامة',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'جهاز زيادة الطول TAL - علاج قصر القامة وزيادة الطول 7 سم',
    description: 'جهاز TAL لزيادة الطول وعلاج قصر القامة. يزيد طولك 7 سم وأكثر، يعالج آلام الظهر، يخلصك من بروز البطن، يعالج انحناء القامة.',
    images: ['/hero-banner.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="canonical" href="https://tal7cm.com" />
        <link rel="alternate" hrefLang="ar" href="https://tal7cm.com" />
        <link rel="alternate" hrefLang="en" href="https://tal7cm.com/en" />
        
        {/* Favicon Links */}
        <link rel="icon" type="image/png" sizes="32x32" href="/cropped-tallogo-1.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/cropped-tallogo-1.png" />
        <link rel="shortcut icon" href="/cropped-tallogo-1.png" />
        <link rel="apple-touch-icon" href="/cropped-tallogo-1.png" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/cropped-tallogo-1.png" type="image/png" />
        
        <meta name="geo.region" content="SA" />
        <meta name="geo.placename" content="Saudi Arabia" />
        <meta name="geo.position" content="24.7136;46.6753" />
        <meta name="ICBM" content="24.7136, 46.6753" />
        
        {/* Cache Control for Favicon */}
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
        <meta name="cache-control" content="no-cache, no-store, must-revalidate" />
        <meta name="pragma" content="no-cache" />
        <meta name="expires" content="0" />
        
        {/* Additional Favicon Meta */}
        <meta name="msapplication-TileImage" content="/cropped-tallogo-1.png" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#000000" />
        
        {/* Structured Data for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalDevice",
              "name": "جهاز زيادة الطول TAL",
              "description": "جهاز طبي لزيادة الطول وعلاج قصر القامة، يزيد الطول 7 سم وأكثر، يعالج آلام الظهر وانحناء القامة",
              "brand": {
                "@type": "Brand",
                "name": "TAL"
              },
              "manufacturer": {
                "@type": "Organization",
                "name": "TAL Height Device"
              },
              "category": "Medical Device",
              "applicationCategory": "Therapeutic Device",
              "indication": "علاج قصر القامة، زيادة الطول، علاج آلام الظهر، علاج انحناء القامة",
              "url": "https://tal7cm.com",
              "image": "https://tal7cm.com/hero-banner.png",
              "logo": "https://tal7cm.com/cropped-tallogo-1.png",
              "sameAs": [
                "https://www.youtube.com/@TAL7cm",
                "https://www.tiktok.com/@tal7cm",
                "https://www.instagram.com/tal7cm/",
                "https://x.com/tal7cm",
                "https://www.facebook.com/TAL7cm/"
              ],
              "offers": {
                "@type": "Offer",
                "url": "https://new-mall.com/tal/p364801713",
                "priceCurrency": "SAR",
                "availability": "https://schema.org/InStock"
              }
            })
          }}
        />
        
        {/* Structured Data for FAQ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "كيف يعمل جهاز TAL لزيادة الطول؟",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "جهاز TAL يعمل على تحفيز نمو العظام وتحسين الوضعية العامة للجسم، مما يؤدي إلى زيادة الطول 7 سم وأكثر."
                  }
                },
                {
                  "@type": "Question",
                  "name": "هل جهاز TAL يعالج آلام الظهر؟",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "نعم، جهاز TAL يعالج آلام الظهر ويصحح وضعية الجسم وانحناء القامة."
                  }
                },
                {
                  "@type": "Question",
                  "name": "كم يزيد جهاز TAL من الطول؟",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "جهاز TAL يزيد الطول 7 سم وأكثر، مع نتائج مضمونة ومدروسة علمياً."
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body>
        <LanguageProvider>
          <Navigation />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
