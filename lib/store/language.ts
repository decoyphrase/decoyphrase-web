import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { translations, type Language, type Translations } from '@/lib/i18n/translations';

interface LanguageState {
  currentLang: Language;
  t: Translations;
  setLanguage: (lang: Language) => void;
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      currentLang: 'EN',
      t: translations.EN,
      setLanguage: (lang) =>
        set({
          currentLang: lang,
          t: translations[lang],
        }),
    }),
    {
      name: 'language-storage',
      partialize: (state) => ({ currentLang: state.currentLang }),
    }
  )
);
