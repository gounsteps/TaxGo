import { Helmet } from "react-helmet-async";
import { t, getLanguage, subscribeLanguage, Language } from "@/lib/i18n";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Calculator } from "@/components/calculator";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, ChevronRight, Banknote, Briefcase, Clock, Globe2, Building2, ArrowRight, ArrowDown } from "lucide-react";

export default function Home() {
  const [lang, setLang] = useState<Language>(getLanguage());

  useEffect(() => {
    return subscribeLanguage(() => {
      setLang(getLanguage());
    });
  }, []);

  const getFormLink = () => {
    switch (lang) {
      case "ko": return "https://forms.gle/7tQ5xaLqSQPFXsVV7";
      case "ja":
      case "en":
      default: return "https://forms.gle/ceB3RKYqajPuHJf3A";
    }
  };


  const baseUrl = typeof window !== "undefined" ? window.location.origin : "";

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "TaxGo",
      "description": t("seo.home.description"),
      "url": baseUrl,
      "sameAs": [
        "https://x.com/nouzeidaikou",
        "https://blog.naver.com/nouzeidaikou",
        "https://note.com/texgo"
      ],
      "areaServed": ["KR", "JP"],
      "serviceType": ["탈퇴일시금 대행", "소득세 환급 대행", "脱退一時金代行", "所得税還付代行"],
      "knowsAbout": ["脱退一時金", "所得税還付", "납세관리인", "일본 연금 환급"],
      "inLanguage": ["ko", "ja", "en"],
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "nouzeidaikou@gmail.com",
        "contactType": "customer service",
        "availableLanguage": ["Korean", "Japanese"]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "TaxGo",
      "url": baseUrl,
      "inLanguage": ["ko", "ja", "en"],
      "description": t("seo.home.description")
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <>
      <Helmet>
        <html lang={lang} />
        <title>{t("seo.home.title")}</title>
        <meta name="description" content={t("seo.home.description")} />
        <meta name="keywords" content={t("seo.home.keywords")} />
        <meta name="author" content="TaxGo" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={baseUrl} />
        <link rel="alternate" hrefLang="ko" href={`${baseUrl}/?lang=ko`} />
        <link rel="alternate" hrefLang="ja" href={`${baseUrl}/?lang=ja`} />
        <link rel="alternate" hrefLang="en" href={`${baseUrl}/?lang=en`} />
        <link rel="alternate" hrefLang="x-default" href={baseUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="TaxGo" />
        <meta property="og:url" content={baseUrl} />
        <meta property="og:title" content={t("seo.home.title")} />
        <meta property="og:description" content={t("seo.home.description")} />
        <meta property="og:locale" content={lang === "ko" ? "ko_KR" : lang === "ja" ? "ja_JP" : "en_US"} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@nouzeidaikou" />
        <meta name="twitter:title" content={t("seo.home.title")} />
        <meta name="twitter:description" content={t("seo.home.description")} />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-50 pt-24 pb-32">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-50" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
              {t("hero.hook")}
            </motion.h1>
            {t("hero.quote") && (
              <motion.blockquote variants={fadeInUp} className="mb-5 border-l-4 border-primary pl-4 text-left italic text-slate-700 text-lg md:text-xl font-medium">
                "{t("hero.quote")}"
              </motion.blockquote>
            )}
            <motion.p variants={fadeInUp} className="text-base md:text-lg text-slate-600 mb-10 leading-relaxed text-left">
              {t("hero.sub")}
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Button size="lg" className="h-14 px-8 text-lg rounded-full" asChild data-testid="button-hero-apply">
                <a href={getFormLink()} target="_blank" rel="noopener noreferrer">
                  {t("hero.cta")}
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What is it Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-3">{t("what.title")}</h2>
            <p className="text-lg font-semibold text-primary mb-6">{t("what.sub")}</p>
            <p className="text-lg text-slate-600 leading-relaxed">
              {t("what.desc")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-center text-slate-900 mb-12">{t("eligibility.title")}</motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5].map((num) => (
                <motion.div key={num} variants={fadeInUp}>
                  <Card className="h-full border-none shadow-sm hover:shadow-md transition-shadow">
                    <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        {num === 1 && <Briefcase size={24} />}
                        {num === 2 && <Clock size={24} />}
                        {num === 3 && <Globe2 size={24} />}
                        {num === 4 && <CheckCircle2 size={24} />}
                        {num === 5 && <Building2 size={24} />}
                      </div>
                      <p className="font-medium text-slate-900">{t(`eligibility.${num}`)}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">{t("calc.title")}</h2>
            </div>
            <Calculator />
          </motion.div>
        </div>
      </section>

      {/* Tax Refund Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
              <Banknote className="text-primary w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold mb-3">{t("tax.title")}</h2>
            <p className="text-lg font-semibold text-emerald-400 mb-6">{t("tax.sub")}</p>
            <p className="text-lg text-slate-300 leading-relaxed">
              {t("tax.desc")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-5xl mx-auto"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-center text-slate-900 mb-16">{t("process.title")}</motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
              {/* Left column: Steps 1-2 (Applicant) */}
              <motion.div variants={fadeInUp}>
                <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 bg-slate-200 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-slate-500" />
                  <span className="text-sm font-semibold text-slate-700">{t("process.applicant.label")}</span>
                </div>
                <div className="flex flex-col gap-0">
                  {[1, 2].map((step, index) => (
                    <motion.div key={step} variants={fadeInUp} className="flex gap-4 items-stretch">
                      <div className="flex flex-col items-center">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-500 text-white font-bold text-sm shrink-0 shadow-md">
                          {step}
                        </div>
                        {index < 1 && (
                          <div className="w-0.5 flex-1 bg-slate-300 my-2" />
                        )}
                      </div>
                      <div className={`flex-1 ${index < 1 ? "pb-6" : "pb-0"}`}>
                        <Card className="border border-slate-200 shadow-sm">
                          <CardContent className="p-4">
                            <h3 className="font-bold text-sm text-slate-800 mb-1">{t(`process.${step}.title`)}</h3>
                            <p className="text-xs text-slate-500">{t(`process.${step}.desc`)}</p>
                          </CardContent>
                        </Card>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Desktop: 3 → badge pointing right */}
                <motion.div variants={fadeInUp} className="hidden md:flex justify-end mt-5">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-primary border border-primary/30 rounded-full px-3 py-1.5 bg-primary/5">
                    <span>3</span>
                    <ArrowRight size={12} />
                  </div>
                </motion.div>

                {/* Mobile: down arrow */}
                <motion.div variants={fadeInUp} className="md:hidden flex justify-center mt-5">
                  <ArrowDown size={20} className="text-slate-400" />
                </motion.div>
              </motion.div>

              {/* Right column: Steps 3-8 (TaxGo) */}
              <motion.div variants={fadeInUp}>
                <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 bg-primary/10 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-sm font-semibold text-primary">{t("process.taxgo.label")}</span>
                </div>
                <div className="flex flex-col gap-0">
                  {[3, 4, 5, 6, 7, 8].map((step, index) => (
                    <motion.div key={step} variants={fadeInUp} className="flex gap-4 items-stretch">
                      <div className="flex flex-col items-center">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold text-sm shrink-0 shadow-md">
                          {step}
                        </div>
                        {index < 5 && (
                          <div className="w-0.5 flex-1 bg-primary/20 my-2" />
                        )}
                      </div>
                      <div className={`flex-1 ${index < 5 ? "pb-6" : "pb-0"}`}>
                        <Card className="border border-slate-100 shadow-sm">
                          <CardContent className="p-4">
                            <h3 className="font-bold text-sm text-slate-900 mb-1">{t(`process.${step}.title`)}</h3>
                            <p className="text-xs text-slate-500">{t(`process.${step}.desc`)}</p>
                          </CardContent>
                        </Card>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Apply Section */}
      <section id="apply" className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("apply.title")}</h2>
            <p className="text-xl text-primary-foreground/80 mb-10">
              {t("apply.desc")}
            </p>
            <a href={getFormLink()} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="secondary" className="h-16 px-10 text-lg rounded-full w-full sm:w-auto hover:bg-white" data-testid="button-apply-form">
                {t("apply.btn")}
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-primary-foreground/80 border-t border-primary-foreground/20 pt-10">
              <div>
                <span className="block font-semibold mb-1">KakaoTalk</span>
                j-tax
              </div>
              <div>
                <span className="block font-semibold mb-1">Email</span>
                <a href="mailto:nouzeidaikou@gmail.com" className="hover:underline">nouzeidaikou@gmail.com</a>
              </div>
              <div>
                <span className="block font-semibold mb-1">X (Twitter)</span>
                <a href="https://x.com/nouzeidaikou" target="_blank" rel="noopener noreferrer" className="hover:underline">@nouzeidaikou</a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
