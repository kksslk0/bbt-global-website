import { Card, CardContent } from '../ui/card';
import DownloadButton from '../shared/DownloadButton';
import type { Lang } from '../../i18n/dict';
import type { ProductDownload } from '../../config/downloads';
import { useTranslations } from '../../i18n/utils';

interface Props {
  lang: Lang;
  product: ProductDownload;
}

export default function DownloadSection({ lang, product }: Props) {
  const t = useTranslations(lang);
  return (
    <Card className="border border-white/10 bg-white/[0.035] p-6 md:p-8">
      <CardContent className="flex flex-col gap-6 p-0 sm:flex-row sm:items-center sm:justify-between">
        <div>
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary/80">
          {product.available ? t('badge.available') : t('badge.comingSoon')}
        </p>
        <h3 className="text-2xl font-bold">{product.name[lang]}</h3>
        <p className="mt-3 text-sm text-muted-foreground">
          {product.actionHint?.[lang] ?? (product.available ? t('product.available') : t('product.unavailable'))}
        </p>
        </div>
        <div className="flex shrink-0">
          <DownloadButton
            lang={lang}
            available={product.available}
            downloadUrl={product.downloadUrl}
            fileSize={product.fileSize}
            version={product.version}
            label={product.actionLabel?.[lang]}
          />
        </div>
      </CardContent>
    </Card>
  );
}
