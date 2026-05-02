import { Switch, Route, Router as WouterRouter } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { HelmetProvider } from "react-helmet-async";
import Home from "@/pages/home";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useEffect, useState, lazy, Suspense } from "react";
import { subscribeLanguage, getLanguage, setLanguage, Language } from "@/lib/i18n";

const FAQ = lazy(() => import("@/pages/faq"));
const NotFound = lazy(() => import("@/pages/not-found"));

function makeLangHome(lang: Language) {
  return function LangHomePage() {
    useEffect(() => { setLanguage(lang); }, []);
    return <Home />;
  };
}

function makeLangFAQ(lang: Language) {
  return function LangFAQPage() {
    useEffect(() => { setLanguage(lang); }, []);
    return <FAQ />;
  };
}

const JaHome = makeLangHome("ja");
const EnHome = makeLangHome("en");
const JaFAQ = makeLangFAQ("ja");
const EnFAQ = makeLangFAQ("en");

function Router() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Navbar />
      <main className="flex-1">
        <Suspense fallback={<div className="min-h-screen" />}>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/faq" component={FAQ} />
            <Route path="/ja" component={JaHome} />
            <Route path="/ja/faq" component={JaFAQ} />
            <Route path="/en" component={EnHome} />
            <Route path="/en/faq" component={EnFAQ} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  const [, setLang] = useState(getLanguage());

  useEffect(() => {
    const unsubscribe = subscribeLanguage(() => {
      setLang(getLanguage());
    });
    return unsubscribe;
  }, []);

  return (
    <HelmetProvider>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </HelmetProvider>
  );
}

export default App;
