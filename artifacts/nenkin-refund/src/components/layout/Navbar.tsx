import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { t, setLanguage, getLanguage, Language, subscribeLanguage } from "@/lib/i18n";
import { useEffect, useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [lang, setLang] = useState<Language>(getLanguage());
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    return subscribeLanguage(() => {
      setLang(getLanguage());
    });
  }, []);

  const handleLanguageChange = (value: string) => {
    setLanguage(value as Language);
  };

  const scrollToApply = () => {
    setMobileMenuOpen(false);
    const applySection = document.getElementById("apply");
    if (applySection) {
      applySection.scrollIntoView({ behavior: "smooth" });
    }
  };

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
          </nav>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Select value={lang} onValueChange={handleLanguageChange}>
            <SelectTrigger className="w-[120px] h-9" data-testid="select-language">
              <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ko">한국어</SelectItem>
              <SelectItem value="ja">日本語</SelectItem>
              <SelectItem value="en">English</SelectItem>
            </SelectContent>
          </Select>
          <Button onClick={scrollToApply} data-testid="button-nav-apply">
            {t("nav.apply")}
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
          </nav>
          <div className="flex flex-col gap-4 pt-4 border-t">
            <Select value={lang} onValueChange={handleLanguageChange}>
              <SelectTrigger className="w-full" data-testid="select-language-mobile">
                <SelectValue placeholder="Language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ko">한국어</SelectItem>
                <SelectItem value="ja">日本語</SelectItem>
                <SelectItem value="en">English</SelectItem>
              </SelectContent>
            </Select>
            <Button onClick={scrollToApply} className="w-full" data-testid="button-nav-apply-mobile">
              {t("nav.apply")}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
