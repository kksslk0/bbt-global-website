import { Button } from '../ui/button';
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
    <a href={downloadUrl!} download className="inline-flex">
      <Button
        size="lg"
        className="gap-3 border border-[var(--color-accent)] bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[var(--color-accent-hover)] hover:shadow-lg hover:shadow-blue-500/25"
      >
        <Download className="h-4 w-4" />
        {t('cta.download')}
        <span className="ml-1 text-xs opacity-70">
          {version && `v${version}`}
          {fileSize && ` (${fileSize})`}
        </span>
      </Button>
    </a>
  );
}
