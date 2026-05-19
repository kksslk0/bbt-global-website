import { Badge } from '../ui/badge';
import type { Lang } from '../../i18n/dict';
import { useTranslations } from '../../i18n/utils';

interface Props {
  lang: Lang;
}

export default function ComingSoonBadge({ lang }: Props) {
  const t = useTranslations(lang);
  return (
    <Badge variant="outline" className="border-dashed border-white/20 bg-white/[0.035] text-muted-foreground">
      {t('badge.comingSoon')}
    </Badge>
  );
}
