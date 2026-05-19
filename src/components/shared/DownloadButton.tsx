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
      <Button size="lg" className="h-11 gap-2 bg-primary px-5 font-bold text-primary-foreground hover:bg-primary/90">
        <Download className="h-4 w-4" />
        {t('cta.download')}
        {(version || fileSize) && (
          <span className="ml-1 text-xs opacity-65">
            {version && `v${version}`}
            {fileSize && ` (${fileSize})`}
          </span>
        )}
      </Button>
    </a>
  );
}
