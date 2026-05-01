import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { t, setLanguage, getLanguage, Language, subscribeLanguage } from "@/lib/i18n";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

function getBlogUrl(lang: Language): string {
  if (lang === "ko") return "https://blog.naver.com/nouzeidaikou/222590067078";
  return "https://note.com/texgo";
}

function getFormUrl(lang: Language): string {
  if (lang === "ko") return "https://forms.gle/7tQ5xaLqSQPFXsVV7";
  return "https://forms.gle/ceB3RKYqajPuHJf3A";
}

const LANG_LABELS: { value: Language; label: string }[] = [
  { value: "ko", label: "ko" },
  { value: "ja", label: "jp" },
  { value: "en", label: "en" },
];

function LangSwitcher({ lang }: { lang: Language }) {
  return (
    <div className="flex items-center gap-1 text-sm font-medium" data-testid="select-language">
      {LANG_LABELS.map(({ value, label }, i) => (
        <span key={value} className="flex items-center gap-1">
          {i > 0 && <span className="text-slate-300 select-none">·</span>}
          <button
            onClick={() => setLanguage(value)}
            className={`px-1 py-0.5 rounded transition-colors ${
              lang === value
                ? "text-primary font-bold"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {label}
          </button>
        </span>
      ))}
    </div>
  );
}

export function Navbar() {
  const [lang, setLang] = useState<Language>(getLanguage());
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    return subscribeLanguage(() => {
      setLang(getLanguage());
    });
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-bold text-xl tracking-tight text-primary">TaxGo</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {t("nav.home")}
            </Link>
            <Link href="/faq" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {t("nav.faq")}
            </Link>
            <a href={getBlogUrl(lang)} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {t("nav.blog")}
            </a>
          </nav>
        </div>

        <div className="hidden md:flex items-center gap-5">
          <LangSwitcher lang={lang} />
          <Button asChild data-testid="button-nav-apply">
            <a href={getFormUrl(lang)} target="_blank" rel="noopener noreferrer">
              {t("nav.apply")}
            </a>
          </Button>
        </div>

        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          data-testid="button-mobile-menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background p-4 flex flex-col gap-4 shadow-lg absolute w-full left-0">
          <nav className="flex flex-col gap-4">
            <Link href="/" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium">
              {t("nav.home")}
            </Link>
            <Link href="/faq" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium">
              {t("nav.faq")}
            </Link>
            <a href={getBlogUrl(lang)} target="_blank" rel="noopener noreferrer" className="text-base font-medium" onClick={() => setMobileMenuOpen(false)}>
              {t("nav.blog")}
            </a>
          </nav>
          <div className="flex flex-col gap-4 pt-4 border-t">
            <LangSwitcher lang={lang} />
            <Button asChild className="w-full" data-testid="button-nav-apply-mobile">
              <a href={getFormUrl(lang)} target="_blank" rel="noopener noreferrer">
                {t("nav.apply")}
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
