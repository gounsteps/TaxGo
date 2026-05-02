import { Switch, Route, Router as WouterRouter } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { HelmetProvider } from "react-helmet-async";
import Home from "@/pages/home";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useEffect, useState, lazy, Suspense } from "react";
import { subscribeLanguage, getLanguage } from "@/lib/i18n";

const FAQ = lazy(() => import("@/pages/faq"));
const NotFound = lazy(() => import("@/pages/not-found"));

function Router() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Navbar />
      <main className="flex-1">
        <Suspense fallback={<div className="min-h-screen" />}>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/faq" component={FAQ} />
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
