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
    <div class="mt-16 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8 text-center">
      <h3 class="text-xl font-semibold">
        {t('product.get')}{product.name[lang]}
      </h3>
      <p class="mt-2 text-sm text-[var(--color-text-secondary)]">
        {product.available ? t('product.available') : t('product.unavailable')}
      </p>
      <div class="mt-6 flex items-center justify-center gap-4">
        <DownloadButton
          lang={lang}
          available={product.available}
          downloadUrl={product.downloadUrl}
          fileSize={product.fileSize}
          version={product.version}
        />
      </div>
    </div>
  );
}
