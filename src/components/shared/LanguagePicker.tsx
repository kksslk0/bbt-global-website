import { langs, type Lang } from '../../i18n/dict';
import { switchLang } from '../../i18n/utils';

interface Props {
  lang: Lang;
  currentPath: string;
}

const labels: Record<Lang, string> = { zh: 'ZH', en: 'EN' };

export default function LanguagePicker({ lang, currentPath }: Props) {
  return (
    <div class="flex gap-1 rounded-full border border-[var(--color-border)] p-0.5">
      {langs.map((l) => (
        <a
          href={switchLang(currentPath, lang, l)}
          class={`rounded-full px-2.5 py-1 text-xs font-medium transition-all ${
            l === lang
              ? 'bg-white text-black'
              : 'text-[var(--color-text-secondary)] hover:text-white'
          }`}
        >
          {labels[l]}
        </a>
      ))}
    </div>
  );
}
