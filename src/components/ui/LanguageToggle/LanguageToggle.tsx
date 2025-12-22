'use client';
import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { GlobeAltIcon } from '@heroicons/react/24/outline';

type Language = 'en' | 'es' | 'it' | 'fr' | 'ja';

const languages: { code: Language; label: string; flag: string }[] = [
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
  { code: 'it', label: 'Italiano', flag: '🇮🇹' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'ja', label: '日本語', flag: '🇯🇵' },
];

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, right: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        buttonRef.current && !buttonRef.current.contains(event.target as Node) &&
        dropdownRef.current && !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setDropdownPosition({
        top: rect.bottom + 8,
        right: window.innerWidth - rect.right,
      });
    }
  }, [isOpen]);

  const currentLanguage = languages.find(lang => lang.code === language) || languages[0];

  return (
    <>
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className="relative flex items-center justify-center gap-1 px-3 h-10 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 dark:from-purple-500 dark:to-cyan-500 hover:from-amber-600 hover:to-orange-600 dark:hover:from-purple-600 dark:hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl"
        aria-label="Select language"
      >
        <GlobeAltIcon className="w-5 h-5 text-white" />
        <span className="text-sm font-bold text-white">{currentLanguage.flag}</span>
      </button>

      {isOpen && typeof window !== 'undefined' && createPortal(
        <div
          ref={dropdownRef}
          className="fixed bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl overflow-hidden z-[9999] min-w-[160px]"
          style={{
            top: `${dropdownPosition.top}px`,
            right: `${dropdownPosition.right}px`,
          }}
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code);
                setIsOpen(false);
              }}
              className={`w-full px-4 py-2.5 text-left flex items-center gap-2 hover:bg-amber-50 dark:hover:bg-gray-700 transition-colors ${
                language === lang.code ? 'bg-amber-100 dark:bg-gray-700' : ''
              }`}
            >
              <span className="text-xl">{lang.flag}</span>
              <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{lang.label}</span>
            </button>
          ))}
        </div>,
        document.body
      )}
    </>
  );
};

export default LanguageToggle;
