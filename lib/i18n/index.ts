import { en, type Translations } from './en';
import { fr } from './fr';
import { ar } from './ar';

export type Language = 'en' | 'fr' | 'ar';
export type { Translations };

export const locales: Record<Language, Translations> = { en, fr, ar };

export const languageMeta: Record<
  Language,
  { label: string; nativeLabel: string; dir: 'ltr' | 'rtl' }
> = {
  en: { label: 'English', nativeLabel: 'English', dir: 'ltr' },
  fr: { label: 'French', nativeLabel: 'Français', dir: 'ltr' },
  ar: { label: 'Arabic', nativeLabel: 'العربية', dir: 'rtl' },
};

export function getDirection(lang: Language): 'ltr' | 'rtl' {
  return languageMeta[lang].dir;
}
