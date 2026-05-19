import { Download } from 'lucide-react';
import ComingSoonBadge from './ComingSoonBadge';
import type { Lang } from '../../i18n/dict';
import { useTranslations } from '../../i18n/utils';

interface Props {
  lang: Lang;
  available: boolean;
  downloadUrl: string | null;
  fileSize: string | null;
  version: string | null;
}

export default function DownloadButton({ lang, available, downloadUrl, fileSize, version }: Props) {
  const t = useTranslations(lang);

  if (!available) {
    return <ComingSoonBadge lang={lang} />;
  }

  return (
    <a
      href={downloadUrl!}
      download
      class="group inline-flex items-center gap-3 rounded-xl bg-white px-8 py-3.5 text-sm font-semibold text-black shadow-lg shadow-white/10 transition-all hover:shadow-xl hover:shadow-white/20 hover:scale-[1.02]"
    >
      <Download class="h-4 w-4" />
      {t('cta.download')}
      <span class="ml-1 text-xs opacity-50">
        {version && `v${version}`}
        {fileSize && ` (${fileSize})`}
      </span>
    </a>
  );
}
