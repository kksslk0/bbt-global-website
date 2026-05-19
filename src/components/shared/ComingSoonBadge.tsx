import { Badge } from '../ui/badge';
import type { Lang } from '../../i18n/dict';
import { useTranslations } from '../../i18n/utils';

interface Props {
  lang: Lang;
}

export default function ComingSoonBadge({ lang }: Props) {
  const t = useTranslations(lang);
  return (
    <Badge variant="secondary" className="border-[var(--color-border)] bg-transparent px-3 py-1 text-xs text-[var(--color-text-secondary)]">
      {t('badge.comingSoon')}
    </Badge>
  );
}
