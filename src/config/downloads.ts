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
      zh: 'BBT 翻譯器',
      en: 'BBT Translator',
      ja: 'BBT 翻訳ツール',
      ko: 'BBT 번역기',
      hi: 'BBT अनुवादक',
      es: 'BBT Traductor',
      fr: 'BBT Traducteur',
      ar: 'مترجم BBT',
    },
    description: {
      zh: 'AI 驅動的多語言即時翻譯工具，支援文字、語音和文件翻譯。',
      en: 'AI-powered multilingual real-time translation tool with text, voice, and document support.',
      ja: 'テキスト、音声、ドキュメント翻訳に対応した AI 駆動の多言語リアルタイム翻訳ツール。',
      ko: '텍스트, 음성, 문서 번역을 지원하는 AI 기반 다국어 실시간 번역 도구.',
      hi: 'टेक्स्ट, वॉइस और दस्तावेज़ अनुवाद के लिए AI-संचालित बहुभाषी रीयल-टाइम अनुवाद टूल.',
      es: 'Herramienta de traducción multilingüe en tiempo real con IA para texto, voz y documentos.',
      fr: 'Outil de traduction multilingue en temps réel alimenté par l’IA pour texte, voix et documents.',
      ar: 'أداة ترجمة فورية متعددة اللغات مدعومة بالذكاء الاصطناعي للنص والصوت والمستندات.',
    },
    icon: 'Languages',
    available: true,
    downloadUrl: 'https://apps.apple.com/ua/app/bbt%E7%BF%BB%E8%AF%91/id6755432485',
    fileSize: null,
    version: null,
    actionLabel: {
      zh: 'App Store 下載',
      en: 'Download on App Store',
      ja: 'App Store でダウンロード',
      ko: 'App Store에서 다운로드',
      hi: 'App Store से डाउनलोड करें',
      es: 'Descargar en App Store',
      fr: 'Télécharger sur l’App Store',
      ar: 'التنزيل من App Store',
    },
    actionHint: {
      zh: '點擊下方按鈕前往 App Store 下載 BBT 翻譯器。',
      en: 'Click below to download BBT Translator from the App Store.',
      ja: '下のボタンから App Store で BBT 翻訳ツールをダウンロードできます。',
      ko: '아래 버튼을 눌러 App Store에서 BBT 번역기를 다운로드하세요.',
      hi: 'BBT Translator को App Store से डाउनलोड करने के लिए नीचे क्लिक करें।',
      es: 'Haz clic abajo para descargar BBT Traductor desde App Store.',
      fr: 'Cliquez ci-dessous pour télécharger BBT Traducteur sur l’App Store.',
      ar: 'اضغط أدناه لتنزيل مترجم BBT من App Store.',
    },
  },
  {
    slug: 'social',
    name: {
      zh: 'BBT 社交',
      en: 'BBT Social',
      ja: 'BBT ソーシャル',
      ko: 'BBT 소셜',
      hi: 'BBT सोशल',
      es: 'BBT Social',
      fr: 'BBT Social',
      ar: 'BBT للتواصل',
    },
    description: {
      zh: 'Web3 錢包原生即時通訊平台，萬人社群、代幣門控、鏈上身份。',
      en: 'Web3 wallet-native IM platform with massive communities, token-gated channels, and on-chain identity.',
      ja: '大規模コミュニティ、トークンゲートチャンネル、オンチェーン ID を備えた Web3 ウォレットネイティブのメッセージング基盤。',
      ko: '대규모 커뮤니티, 토큰 게이트 채널, 온체인 신원을 갖춘 Web3 지갑 네이티브 메신저 플랫폼.',
      hi: 'बड़े समुदायों, token-gated चैनलों और ऑन-चेन पहचान वाला Web3 वॉलेट-नेटिव मैसेजिंग प्लेटफ़ॉर्म.',
      es: 'Plataforma de mensajería Web3 nativa de wallet con comunidades masivas, canales token-gated e identidad on-chain.',
      fr: 'Plateforme de messagerie Web3 native wallet avec grandes communautés, canaux token-gated et identité on-chain.',
      ar: 'منصة مراسلة Web3 أصلية للمحافظ مع مجتمعات ضخمة وقنوات مقيدة بالرموز وهوية على السلسلة.',
    },
    icon: 'MessageCircle',
    available: false,
    downloadUrl: null,
    fileSize: null,
    version: null,
    actionHint: {
      zh: '跨語言社交網路正在內測打磨中，開放後會第一時間提供下載入口。',
      en: 'The cross-language social network is being refined in private testing. The download link will be released as soon as it is ready.',
      ja: 'クロスランゲージ・ソーシャルネットワークは現在クローズドテスト中です。準備が整い次第、ダウンロードリンクを公開します。',
      ko: '크로스 언어 소셜 네트워크는 비공개 테스트에서 다듬고 있습니다. 준비되는 즉시 다운로드 링크를 공개하겠습니다.',
      hi: 'क्रॉस-लैंग्वेज सोशल नेटवर्क अभी निजी परीक्षण में है। तैयार होते ही डाउनलोड लिंक जारी किया जाएगा।',
      es: 'La red social multilingüe está en pruebas privadas. El enlace de descarga se publicará en cuanto esté listo.',
      fr: 'Le réseau social multilingue est en phase de test privé. Le lien de téléchargement sera publié dès qu’il sera prêt.',
      ar: 'شبكة التواصل متعددة اللغات قيد الاختبار الخاص، وسيتم نشر رابط التنزيل فور جاهزيتها.',
    },
  },
  {
    slug: 'education',
    name: {
      zh: 'BBT 教育',
      en: 'BBT Education',
      ja: 'BBT 教育',
      ko: 'BBT 교육',
      hi: 'BBT शिक्षा',
      es: 'BBT Educación',
      fr: 'BBT Éducation',
      ar: 'BBT للتعليم',
    },
    description: {
      zh: 'WebRTC 即時語言課堂、積分激勵體系、NFT 學習證書。',
      en: 'WebRTC live language classrooms with points-based incentive system and NFT learning certificates.',
      ja: 'WebRTC ライブ語学クラス、ポイント型インセンティブ、NFT 学習証明書。',
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
      zh: '開啟演示',
      en: 'Open Demo',
      ja: 'デモを開く',
      ko: '데모 열기',
      hi: 'डेमो खोलें',
      es: 'Abrir demo',
      fr: 'Ouvrir la démo',
      ar: 'فتح العرض التجريبي',
    },
    actionHint: {
      zh: '點擊下方按鈕進入 BBT 教育演示站。',
      en: 'Click below to open the BBT Education demo.',
      ja: '下のボタンから BBT 教育デモサイトを開けます。',
      ko: '아래 버튼을 눌러 BBT 교육 데모를 여세요.',
      hi: 'BBT Education डेमो खोलने के लिए नीचे क्लिक करें।',
      es: 'Haz clic abajo para abrir la demo de BBT Educación.',
      fr: 'Cliquez ci-dessous pour ouvrir la démo de BBT Éducation.',
      ar: 'اضغط أدناه لفتح العرض التجريبي لـ BBT للتعليم.',
    },
  },
];
