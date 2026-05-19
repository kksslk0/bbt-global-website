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
    <div class="relative overflow-hidden rounded-3xl border border-[var(--color-border-strong)] bg-[var(--color-bg-card)] backdrop-blur-xl p-10 text-center">
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] rounded-full bg-[var(--color-glow-blue)] blur-[80px] pointer-events-none"></div>
      <div class="relative z-10">
        <h3 class="text-2xl font-bold">
          {product.name[lang]}
        </h3>
        <p class="mt-3 text-sm text-[var(--color-text-secondary)]">
          {product.available ? t('product.available') : t('product.unavailable')}
        </p>
        <div class="mt-8 flex items-center justify-center">
          <DownloadButton
            lang={lang}
            available={product.available}
            downloadUrl={product.downloadUrl}
            fileSize={product.fileSize}
            version={product.version}
          />
        </div>
      </div>
    </div>
  );
}
