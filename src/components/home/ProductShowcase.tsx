import { Card, CardContent, CardHeader } from '../ui/card';
import { Languages, MessageCircle, GraduationCap, ArrowRight } from 'lucide-react';
import type { Lang } from '../../i18n/dict';
import { useTranslations } from '../../i18n/utils';
import { products } from '../../config/downloads';

const iconMap: Record<string, any> = {
  Languages,
  MessageCircle,
  GraduationCap,
};

interface Props {
  lang: Lang;
}

export default function ProductShowcase({ lang }: Props) {
  const t = useTranslations(lang);
  const l = lang;

  return (
    <section class="px-6 pb-24">
      <div class="mx-auto max-w-6xl">
        <h2 class="mb-12 text-center text-2xl font-bold md:text-3xl">{t('products.title')}</h2>
        <div class="grid gap-6 md:grid-cols-3">
          {products.map((p) => {
            const Icon = iconMap[p.icon] ?? MessageCircle;
            return (
              <a href={`/${l}/products/${p.slug}`} class="group">
                <Card class="border-[var(--color-border)] bg-[var(--color-bg-card)] transition-all hover:border-white/20 hover:shadow-lg">
                  <CardHeader>
                    <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--color-accent)]/10">
                      <Icon class="h-6 w-6 text-[var(--color-accent)]" />
                    </div>
                    <h3 class="text-lg font-semibold">{p.name[l]}</h3>
                  </CardHeader>
                  <CardContent>
                    <p class="text-sm leading-relaxed text-[var(--color-text-secondary)]">{p.description[l]}</p>
                    <span class="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[var(--color-accent)] group-hover:underline">
                      {t('cta.learnMore')} <ArrowRight class="h-3.5 w-3.5" />
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
