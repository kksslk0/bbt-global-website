import { Languages, MessageCircle, GraduationCap, ArrowRight } from 'lucide-react';
import type { Lang } from '../../i18n/dict';
import { useTranslations } from '../../i18n/utils';
import { products } from '../../config/downloads';

const iconMap: Record<string, any> = {
  Languages,
  MessageCircle,
  GraduationCap,
};

const gradientMap: Record<string, string> = {
  Languages: 'from-blue-500/20 to-cyan-500/20',
  MessageCircle: 'from-violet-500/20 to-purple-500/20',
  GraduationCap: 'from-teal-500/20 to-emerald-500/20',
};

const glowMap: Record<string, string> = {
  Languages: 'bg-blue-500/10',
  MessageCircle: 'bg-violet-500/10',
  GraduationCap: 'bg-teal-500/10',
};

interface Props {
  lang: Lang;
}

export default function ProductShowcase({ lang }: Props) {
  const t = useTranslations(lang);
  const l = lang;

  return (
    <section class="px-6 pb-32">
      <div class="mx-auto max-w-6xl">
        <div class="mb-16 text-center">
          <p class="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
            {l === 'zh' ? '产品生态' : 'Product Ecosystem'}
          </p>
          <h2 class="text-3xl font-bold md:text-4xl">{t('products.title')}</h2>
        </div>

        <div class="grid gap-6 md:grid-cols-3">
          {products.map((p) => {
            const Icon = iconMap[p.icon] ?? MessageCircle;

            return (
              <a
                href={`/${l}/products/${p.slug}`}
                class="group relative overflow-hidden rounded-2xl border border-[var(--color-border-strong)] bg-[var(--color-bg-card)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-white/10"
              >
                <div class="relative z-10 flex h-full flex-col rounded-2xl bg-[var(--color-bg-elevated)] p-8">
                  <div class={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${gradientMap[p.icon] ?? 'from-blue-500/20 to-purple-500/20'} ring-1 ring-white/5`}>
                    <Icon class="h-7 w-7 text-white" />
                  </div>

                  <div class="mb-2 flex items-center gap-2">
                    <h3 class="text-xl font-semibold">{p.name[l]}</h3>
                    {!p.available && (
                      <span class="rounded-md border border-[var(--color-border-strong)] bg-white/[0.03] px-2 py-0.5 text-[10px] font-medium text-[var(--color-text-muted)]">
                        {t('badge.comingSoon')}
                      </span>
                    )}
                  </div>

                  <p class="flex-1 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                    {p.description[l]}
                  </p>

                  <span class="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white/70 transition-colors group-hover:text-white">
                    {t('cta.learnMore')}
                    <ArrowRight class="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>

                <div class={`pointer-events-none absolute -inset-2 opacity-0 transition-opacity duration-500 group-hover:opacity-100 rounded-3xl blur-2xl ${glowMap[p.icon] ?? 'bg-blue-500/10'}`}></div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
