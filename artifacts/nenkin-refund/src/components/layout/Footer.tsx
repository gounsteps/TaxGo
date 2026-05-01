import { Link } from "wouter";
import { t, getLanguage, Language, subscribeLanguage } from "@/lib/i18n";
import { useEffect, useState } from "react";

export function Footer() {
  const [lang, setLang] = useState<Language>(getLanguage());

  useEffect(() => {
    return subscribeLanguage(() => {
      setLang(getLanguage());
    });
  }, []);

  const getBlogLink = () => {
    switch (lang) {
      case "ko": return "https://blog.naver.com/nouzeidaikou/222967289174";
      case "ja": return "https://blog.example.com/ja";
      case "en": return "https://blog.example.com/en";
      default: return "https://blog.naver.com/nouzeidaikou/222967289174";
    }
  };

  return (
    <footer className="bg-muted py-12 border-t">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4 text-foreground">Nouzeidaikou</h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              {t("seo.home.description")}
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4 text-foreground">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t("nav.faq")}
                </Link>
              </li>
              <li>
                <a href={getBlogLink()} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t("footer.blog")}
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4 text-foreground">{t("footer.contact")}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>KakaoTalk: @nouzeidaikou</li>
              <li>Email: nouzeidaikou@gmail.com</li>
              <li>X (Twitter): @nouzeidaikou</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Nouzeidaikou. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
