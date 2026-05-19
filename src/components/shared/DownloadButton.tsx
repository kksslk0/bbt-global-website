import { Button } from '../ui/button';
import { Download, ExternalLink } from 'lucide-react';
import ComingSoonBadge from './ComingSoonBadge';
import type { Lang } from '../../i18n/dict';
import { useTranslations } from '../../i18n/utils';

interface Props {
  lang: Lang;
  available: boolean;
  downloadUrl: string | null;
  fileSize: string | null;
  version: string | null;
  label?: string;
}

export default function DownloadButton({ lang, available, downloadUrl, fileSize, version, label }: Props) {
  const t = useTranslations(lang);
  const isExternal = Boolean(downloadUrl?.startsWith('http'));
  const Icon = isExternal ? ExternalLink : Download;

  if (!available) {
    return <ComingSoonBadge lang={lang} />;
  }

  return (
    <a
      href={downloadUrl!}
      download={isExternal ? undefined : true}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
    >
      <Button size="lg" className="h-11 gap-2 bg-primary px-5 font-bold text-primary-foreground hover:bg-primary/90">
        <Icon className="h-4 w-4" />
        {label ?? t('cta.download')}
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
