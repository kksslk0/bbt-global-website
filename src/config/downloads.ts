export interface ProductDownload {
  slug: string;
  name: { zh: string; en: string };
  description: { zh: string; en: string };
  icon: string;
  available: boolean;
  downloadUrl: string | null;
  fileSize: string | null;
  version: string | null;
}

export const products: ProductDownload[] = [
  {
    slug: 'translator',
    name: { zh: 'BBT 翻译器', en: 'BBT Translator' },
    description: {
      zh: 'AI 驱动的多语言实时翻译工具，支持文本、语音和文档翻译。',
      en: 'AI-powered multilingual real-time translation tool with text, voice, and document support.',
    },
    icon: 'Languages',
    available: false,
    downloadUrl: null,
    fileSize: null,
    version: null,
  },
  {
    slug: 'social',
    name: { zh: 'BBT 社交', en: 'BBT Social' },
    description: {
      zh: 'Web3 钱包原生即时通讯平台，万人社区、代币门控、链上身份。',
      en: 'Web3 wallet-native IM platform with massive communities, token-gated channels, and on-chain identity.',
    },
    icon: 'MessageCircle',
    available: true,
    downloadUrl: '/downloads/bbt-social.apk',
    fileSize: '48 MB',
    version: '1.0.0-beta',
  },
  {
    slug: 'education',
    name: { zh: 'BBT 教育', en: 'BBT Education' },
    description: {
      zh: 'WebRTC 实时语言课堂，积分激励体系，NFT 学习证书。',
      en: 'WebRTC live language classrooms with points-based incentive system and NFT learning certificates.',
    },
    icon: 'GraduationCap',
    available: false,
    downloadUrl: null,
    fileSize: null,
    version: null,
  },
];
