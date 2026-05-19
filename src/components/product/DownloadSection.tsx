import DownloadButton from '../shared/DownloadButton';
import type { Lang } from '../../i18n/dict';
import type { ProductDownload } from '../../config/downloads';

interface Props {
  lang: Lang;
  product: ProductDownload;
}

export default function DownloadSection({ lang, product }: Props) {
  return (
    <div class="mt-16 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8 text-center">
      <h3 class="text-xl font-semibold">
        {lang === 'zh' ? '获取 ' : 'Get '}{product.name[lang]}
      </h3>
      <p class="mt-2 text-sm text-[var(--color-text-secondary)]">
        {product.available
          ? lang === 'zh'
            ? '点击下方按钮下载安装'
            : 'Click below to download and install'
          : lang === 'zh'
            ? '该产品正在紧锣密鼓地开发中，敬请期待。'
            : 'This product is under active development. Stay tuned.'}
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
