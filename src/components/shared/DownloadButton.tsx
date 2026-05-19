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
    <a href={downloadUrl!} download>
      <Button size="lg" class="gap-2">
        <Download class="h-4 w-4" />
        {t('cta.download')}
        {(version || fileSize) && (
          <span class="ml-1 text-xs opacity-50">
            {version && `v${version}`}
            {fileSize && ` (${fileSize})`}
          </span>
        )}
      </Button>
    </a>
  );
}
