import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Home from "@/pages/home";
import FAQ from "@/pages/faq";

export interface RenderResult {
  appHtml: string;
}

export async function render(url: string): Promise<RenderResult> {
  const Component = url.startsWith("/faq") ? FAQ : Home;

  const appHtml = renderToString(
    <TooltipProvider>
      <Router ssrPath={url} base="">
        <div className="flex flex-col min-h-[100dvh]">
          <Navbar />
          <main className="flex-1">
            <Component />
          </main>
          <Footer />
        </div>
      </Router>
    </TooltipProvider>
  );

  return { appHtml };
}
