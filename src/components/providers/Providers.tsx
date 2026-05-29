"use client";
import { ThemeProvider } from "./ThemeProvider";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { SmoothScrollProvider } from "./SmoothScrollProvider";

/**
 * Single client-side provider shell composing theme, i18n and smooth-scroll.
 * Server children (the page) are passed straight through.
 */
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange={false}
    >
      <LanguageProvider>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}
