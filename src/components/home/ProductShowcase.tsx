import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Languages, MessageCircle, GraduationCap, ArrowRight } from 'lucide-react';
import type { Lang } from '../../i18n/dict';
import { useTranslations } from '../../i18n/utils';
import { products } from '../../config/downloads';

const icons: Record<string, any> = {
  Languages,
  MessageCircle,
  GraduationCap,
};

interface Props {
  lang: Lang;
}

export default function ProductShowcase({ lang }: Props) {
  const t = useTranslations(lang);

  return (
    <section class="px-6 pb-24">
      <div class="mx-auto max-w-6xl">
        <div class="mb-12 text-center">
          <p class="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
            {lang === 'zh' ? '产品生态' : 'Product Ecosystem'}
          </p>
          <h2 class="text-3xl font-bold tracking-tight">{t('products.title')}</h2>
        </div>

        <div class="grid gap-6 md:grid-cols-3">
          {products.map((p) => {
            const Icon = icons[p.icon] ?? MessageCircle;

            return (
              <a href={`/${lang}/products/${p.slug}`} class="group">
                <Card class="h-full border bg-card transition-shadow hover:shadow-md">
                  <CardHeader>
                    <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Icon class="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle class="flex items-center gap-2">
                      {p.name[lang]}
                      {!p.available && (
                        <span class="inline-flex items-center rounded-md border border-dashed px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                          {t('badge.comingSoon')}
                        </span>
                      )}
                    </CardTitle>
                    <CardDescription>{p.description[lang]}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <span class="inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:underline">
                      {t('cta.learnMore')}
                      <ArrowRight class="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </CardContent>
                </Card>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
