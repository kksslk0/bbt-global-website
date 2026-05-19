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
    <section className="px-5 pb-24 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary/80">
            {t('home.productEyebrow')}
          </p>
          <h2 className="max-w-2xl text-3xl font-bold tracking-tight md:text-5xl">
            {t('home.productHeadline')}
          </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-muted-foreground">
            {t('home.productIntro')}
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {products.map((p, index) => {
            const Icon = icons[p.icon] ?? MessageCircle;

            return (
              <a key={p.slug} href={`/${lang}/products/${p.slug}`} className="group">
                <Card className="relative h-full border border-white/10 bg-white/[0.035] p-2 transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:bg-white/[0.055] hover:shadow-[0_22px_70px_rgba(0,0,0,0.28)]">
                  <CardHeader className="p-5">
                    <div className="mb-5 flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-primary/25 bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <span className="font-mono text-xs text-muted-foreground">0{index + 1}</span>
                    </div>
                    <CardTitle className="flex items-center gap-2 text-xl">
                      {p.name[lang]}
                      {!p.available && (
                        <span className="inline-flex items-center rounded-full border border-dashed border-white/15 px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                          {t('badge.comingSoon')}
                        </span>
                      )}
                    </CardTitle>
                    <CardDescription className="mt-3 min-h-14 leading-6">{p.description[lang]}</CardDescription>
                  </CardHeader>
                  <CardContent className="px-5 pb-5">
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                      {t('cta.learnMore')}
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
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
