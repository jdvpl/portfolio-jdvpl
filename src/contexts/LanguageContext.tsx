'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { en, Translation } from '@/locales/en';
import { es } from '@/locales/es';
import { it } from '@/locales/it';
import { fr } from '@/locales/fr';
import { ja } from '@/locales/ja';

type Language = 'en' | 'es' | 'it' | 'fr' | 'ja';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translation;
}

const translations: Record<Language, Translation> = {
  en,
  es,
  it,
  fr,
  ja,
};

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: en,
});

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguageState] = useState<Language>('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('language') as Language;
      if (savedLanguage && ['en', 'es', 'it', 'fr', 'ja'].includes(savedLanguage)) {
        setLanguageState(savedLanguage);
      }
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lang);
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  return context;
};
