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
    <div class="grid gap-6 md:grid-cols-2">
      {features.map((f) => (
        <div class="flex gap-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6">
          <div class="mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[var(--color-accent)]/10 text-lg">
            {f.icon}
          </div>
          <div>
            <h4 class="font-semibold">{f.title[lang]}</h4>
            <p class="mt-1 text-sm leading-relaxed text-[var(--color-text-secondary)]">{f.description[lang]}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
