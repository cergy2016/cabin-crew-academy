'use client';

import { useAppStore } from '@/lib/store';
import { locales, type Translations } from './index';

/**
 * Selector-based translation hook: `t((d) => d.common.backToDashboard)`.
 * The selector is checked against the Translations shape at compile time,
 * so a typo or a locale missing a key fails `tsc`, not at runtime.
 * For interpolated strings, `.replace('{token}', value)` the result.
 */
export function useTranslation() {
  const language = useAppStore((s) => s.language);
  const dict = locales[language];

  function t(selector: (d: Translations) => string): string {
    return selector(dict);
  }

  return { t, language, dict };
}
