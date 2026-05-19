import { ui, type Lang, langs, defaultLang } from './dict';

export function getLangFromUrl(url: URL): Lang {
  const [, maybeLang] = url.pathname.split('/');
  if (langs.includes(maybeLang as Lang)) return maybeLang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: string): string {
    return ui[lang][key] ?? ui[defaultLang][key] ?? key;
  };
}

export function localizePath(path: string, lang: Lang): string {
  return `/${lang}${path}`;
}

export function switchLang(currentPath: string, currentLang: Lang, targetLang: Lang): string {
  if (currentLang === defaultLang) {
    return currentPath.replace(`/${currentLang}`, `/${targetLang}`);
  }
  if (targetLang === defaultLang) {
    return currentPath.replace(`/${currentLang}`, `/${defaultLang}`);
  }
  return currentPath.replace(`/${currentLang}`, `/${targetLang}`);
}
