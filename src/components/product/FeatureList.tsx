interface Feature {
  icon: string;
  title: { zh: string; en: string };
  description: { zh: string; en: string };
}

interface Props {
  features: Feature[];
  lang: 'zh' | 'en';
}

export default function FeatureList({ features, lang }: Props) {
  return (
    <div class="grid gap-4 md:grid-cols-2">
      {features.map((f) => (
        <div class="flex gap-5 rounded-2xl border border-[var(--color-border-strong)] bg-[var(--color-bg-card)] backdrop-blur-xl p-6 transition-all hover:border-white/10 hover:bg-white/[0.02]">
          <div class="mt-0.5 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-white/10 to-white/5 ring-1 ring-white/5 text-xl">
            {f.icon}
          </div>
          <div>
            <h4 class="font-semibold text-white">{f.title[lang]}</h4>
            <p class="mt-1.5 text-sm leading-relaxed text-[var(--color-text-secondary)]">{f.description[lang]}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
