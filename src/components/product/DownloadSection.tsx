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
    <Card class="text-center p-10">
      <CardContent class="p-0">
        <h3 class="text-2xl font-bold">{product.name[lang]}</h3>
        <p class="mt-3 text-sm text-muted-foreground">
          {product.available ? t('product.available') : t('product.unavailable')}
        </p>
        <div class="mt-8 flex justify-center">
          <DownloadButton
            lang={lang}
            available={product.available}
            downloadUrl={product.downloadUrl}
            fileSize={product.fileSize}
            version={product.version}
          />
        </div>
      </CardContent>
    </Card>
  );
}
