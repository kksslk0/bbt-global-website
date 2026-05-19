import type { Lang } from '../i18n/dict';

type LocalizedText = Record<Lang, string>;

export interface ProductDownload {
  slug: string;
  name: LocalizedText;
  description: LocalizedText;
  icon: string;
  available: boolean;
  downloadUrl: string | null;
  fileSize: string | null;
  version: string | null;
  actionLabel?: LocalizedText;
  actionHint?: LocalizedText;
}

export const products: ProductDownload[] = [
  {
    slug: 'translator',
    name: {
      zh: 'BBT 翻译器',
      en: 'BBT Translator',
      ko: 'BBT 번역기',
      hi: 'BBT अनुवादक',
      es: 'BBT Traductor',
      fr: 'BBT Traducteur',
      ar: 'مترجم BBT',
    },
    description: {
      zh: 'AI 驱动的多语言实时翻译工具，支持文本、语音和文档翻译。',
      en: 'AI-powered multilingual real-time translation tool with text, voice, and document support.',
      ko: '텍스트, 음성, 문서 번역을 지원하는 AI 기반 다국어 실시간 번역 도구.',
      hi: 'टेक्स्ट, वॉइस और दस्तावेज़ अनुवाद के लिए AI-संचालित बहुभाषी रीयल-टाइम अनुवाद टूल.',
      es: 'Herramienta de traducción multilingüe en tiempo real con IA para texto, voz y documentos.',
      fr: 'Outil de traduction multilingue en temps réel alimenté par l’IA pour texte, voix et documents.',
      ar: 'أداة ترجمة فورية متعددة اللغات مدعومة بالذكاء الاصطناعي للنص والصوت والمستندات.',
    },
    icon: 'Languages',
    available: false,
    downloadUrl: null,
    fileSize: null,
    version: null,
  },
  {
    slug: 'social',
    name: {
      zh: 'BBT 社交',
      en: 'BBT Social',
      ko: 'BBT 소셜',
      hi: 'BBT सोशल',
      es: 'BBT Social',
      fr: 'BBT Social',
      ar: 'BBT للتواصل',
    },
    description: {
      zh: 'Web3 钱包原生即时通讯平台，万人社区、代币门控、链上身份。',
      en: 'Web3 wallet-native IM platform with massive communities, token-gated channels, and on-chain identity.',
      ko: '대규모 커뮤니티, 토큰 게이트 채널, 온체인 신원을 갖춘 Web3 지갑 네이티브 메신저 플랫폼.',
      hi: 'बड़े समुदायों, token-gated चैनलों और ऑन-चेन पहचान वाला Web3 वॉलेट-नेटिव मैसेजिंग प्लेटफ़ॉर्म.',
      es: 'Plataforma de mensajería Web3 nativa de wallet con comunidades masivas, canales token-gated e identidad on-chain.',
      fr: 'Plateforme de messagerie Web3 native wallet avec grandes communautés, canaux token-gated et identité on-chain.',
      ar: 'منصة مراسلة Web3 أصلية للمحافظ مع مجتمعات ضخمة وقنوات مقيدة بالرموز وهوية على السلسلة.',
    },
    icon: 'MessageCircle',
    available: true,
    downloadUrl: '/downloads/bbt-social.apk',
    fileSize: '48 MB',
    version: '1.0.0-beta',
  },
  {
    slug: 'education',
    name: {
      zh: 'BBT 教育',
      en: 'BBT Education',
      ko: 'BBT 교육',
      hi: 'BBT शिक्षा',
      es: 'BBT Educación',
      fr: 'BBT Éducation',
      ar: 'BBT للتعليم',
    },
    description: {
      zh: 'WebRTC 实时语言课堂，积分激励体系，NFT 学习证书。',
      en: 'WebRTC live language classrooms with points-based incentive system and NFT learning certificates.',
      ko: 'WebRTC 실시간 언어 교실, 포인트 기반 보상 시스템, NFT 학습 인증서.',
      hi: 'WebRTC लाइव भाषा कक्षाएं, पॉइंट-आधारित प्रोत्साहन प्रणाली और NFT सीखने के प्रमाणपत्र.',
      es: 'Aulas de idiomas en vivo con WebRTC, sistema de incentivos por puntos y certificados NFT.',
      fr: 'Cours de langues en direct via WebRTC, système d’incitation par points et certificats NFT.',
      ar: 'فصول لغة مباشرة عبر WebRTC مع نظام حوافز بالنقاط وشهادات تعلم NFT.',
    },
    icon: 'GraduationCap',
    available: true,
    downloadUrl: 'https://bbtlanguage.com',
    fileSize: null,
    version: null,
    actionLabel: {
      zh: '打开演示',
      en: 'Open Demo',
      ko: '데모 열기',
      hi: 'डेमो खोलें',
      es: 'Abrir demo',
      fr: 'Ouvrir la démo',
      ar: 'فتح العرض التجريبي',
    },
    actionHint: {
      zh: '点击下方按钮进入 BBT 教育演示站。',
      en: 'Click below to open the BBT Education demo.',
      ko: '아래 버튼을 눌러 BBT 교육 데모를 여세요.',
      hi: 'BBT Education डेमो खोलने के लिए नीचे क्लिक करें।',
      es: 'Haz clic abajo para abrir la demo de BBT Educación.',
      fr: 'Cliquez ci-dessous pour ouvrir la démo de BBT Éducation.',
      ar: 'اضغط أدناه لفتح العرض التجريبي لـ BBT للتعليم.',
    },
  },
];
