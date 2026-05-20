import { langs, type Lang } from '../../i18n/dict';
import { switchLang } from '../../i18n/utils';

interface Props {
  lang: Lang;
  currentPath: string;
}

const labels: Record<Lang, string> = {
  zh: '中',
  en: 'EN',
  ja: '日本',
  ko: '한국',
  hi: 'हिन्दी',
  es: 'ES',
  fr: 'FR',
  ar: 'عربي',
};

export default function LanguagePicker({ lang, currentPath }: Props) {
  return (
    <div className="flex max-w-[52vw] gap-0.5 overflow-x-auto rounded-full border border-white/10 bg-white/[0.035] p-0.5 md:max-w-[34rem]">
      {langs.map((l) => (
        <a
          key={l}
          href={switchLang(currentPath, lang, l)}
          lang={l}
          dir={l === 'ar' ? 'rtl' : 'ltr'}
          className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold transition-colors ${
            l === lang
              ? 'bg-primary text-primary-foreground'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          {labels[l]}
        </a>
      ))}
    </div>
  );
}
