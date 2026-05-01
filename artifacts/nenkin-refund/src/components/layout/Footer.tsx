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

  const getBlogContent = () => {
    switch (lang) {
      case "ko":
        return { href: "https://blog.naver.com/nouzeidaikou/222590067078", label: t("footer.blog"), isLink: true };
      case "ja":
        return { href: "https://note.com/texgo", label: t("footer.blog"), isLink: true };
      case "en":
        return { href: "https://note.com/texgo", label: t("footer.blog"), isLink: true };
      default:
        return { href: "https://blog.naver.com/nouzeidaikou/222590067078", label: t("footer.blog"), isLink: true };
    }
  };

  const blog = getBlogContent();

  return (
    <footer className="bg-muted py-12 border-t">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4 text-foreground">TaxGo</h3>
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
                {blog.isLink && blog.href ? (
                  <a href={blog.href} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {blog.label}
                  </a>
                ) : (
                  <span className="text-sm text-muted-foreground/60 italic">{blog.label}</span>
                )}
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4 text-foreground">{t("footer.contact")}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>KakaoTalk: j-tax</li>
              <li>
                <a href="mailto:nouzeidaikou@gmail.com" className="hover:text-foreground transition-colors">
                  Email: nouzeidaikou@gmail.com
                </a>
              </li>
              <li>
                <a href="https://x.com/nouzeidaikou" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                  X (Twitter): @nouzeidaikou
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} TaxGo. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
