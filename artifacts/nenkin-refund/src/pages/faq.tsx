import { Helmet } from "react-helmet-async";
import { t, getLanguage, subscribeLanguage, Language } from "@/lib/i18n";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageCircleQuestion } from "lucide-react";

export default function FAQ() {
  const [lang, setLang] = useState<Language>(getLanguage());

  useEffect(() => {
    return subscribeLanguage(() => {
      setLang(getLanguage());
    });
  }, []);

  const faqCount = parseInt(t("faq.count") || "10", 10);
  const faqs = Array.from({ length: faqCount }, (_, i) => ({
    q: `faq.q${i + 1}`,
    a: `faq.a${i + 1}`,
  }));

  const origin = typeof window !== "undefined" ? window.location.origin : "https://taxgo.jp";
  const langPath = lang === "ko" ? "" : `/${lang}`;
  const faqUrl = `${origin}/faq`;
  const canonicalUrl = `${origin}${langPath}/faq`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": t(faq.q),
        "acceptedAnswer": {
          "@type": "Answer",
          "text": t(faq.a)
        }
      }))
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "TaxGo",
          "item": `${origin}/`
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": t("nav.faq"),
          "item": canonicalUrl
        }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <html lang={lang} />
        <title>{t("seo.faq.title")}</title>
        <meta name="description" content={t("seo.faq.description")} />
        <meta name="keywords" content={t("seo.faq.keywords")} />
        <meta name="author" content="TaxGo" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" hrefLang="ko" href={faqUrl} />
        <link rel="alternate" hrefLang="ja" href={`${origin}/ja/faq`} />
        <link rel="alternate" hrefLang="en" href={`${origin}/en/faq`} />
        <link rel="alternate" hrefLang="x-default" href={faqUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="TaxGo" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={t("seo.faq.title")} />
        <meta property="og:description" content={t("seo.faq.description")} />
        <meta property="og:locale" content={lang === "ko" ? "ko_KR" : lang === "ja" ? "ja_JP" : "en_US"} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@nouzeidaikou" />
        <meta name="twitter:title" content={t("seo.faq.title")} />
        <meta name="twitter:description" content={t("seo.faq.description")} />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-slate-50 py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <div className="text-center mb-12">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <MessageCircleQuestion className="text-primary w-8 h-8" />
              </div>
              <h1 className="text-4xl font-bold text-slate-900 mb-4">{t("faq.title")}</h1>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 md:p-8">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-b border-slate-100 last:border-0 py-2">
                    <AccordionTrigger className="text-left font-semibold text-slate-800 hover:text-primary transition-colors hover:no-underline" data-testid={`accordion-faq-${index}`}>
                      {t(faq.q)}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-600 leading-relaxed pt-2 pb-4">
                      <div dangerouslySetInnerHTML={{ __html: t(faq.a) }} />
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
