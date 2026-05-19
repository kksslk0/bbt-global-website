import type { Lang } from '../../i18n/dict';

interface Feature {
  icon: string;
  title: Record<Lang, string>;
  description: Record<Lang, string>;
}

interface Props {
  features: Feature[];
  lang: Lang;
}

export default function FeatureList({ features, lang }: Props) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {features.map((f) => (
        <div key={f.title[lang]} className="flex gap-5 rounded-xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:bg-white/[0.055]">
          <div className="mt-0.5 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-xl">
            {f.icon}
          </div>
          <div>
            <h4 className="font-semibold text-foreground">{f.title[lang]}</h4>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{f.description[lang]}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
