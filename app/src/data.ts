export const SHAYARI = {
  ghalib1: {
    urdu: 'ہزاروں خواہشیں ایسی کہ ہر خواہش پہ دم نکلے\nبہت نکلے مرے ارمان لیکن پھر بھی کم نکلے',
    roman: 'Hazaaron khwahishein aisi ke har khwahish pe dam nikle\nBahut nikle mere armaan lekin phir bhi kam nikle',
    hindi: 'हज़ारों ख़्वाहिशें ऐसी कि हर ख़्वाहिश पे दम निकले\nबहुत निकले मेरे अरमान लेकिन फिर भी कम निकले',
    poet: 'Mirza Ghalib',
    theme: 'desires',
  },
  faiz1: {
    urdu: 'مجھ سے پہلی سی محبت مری محبوب نہ مانگ\nمیں نے سمجھا تھا کہ تو ہے تو درخشاں ہے حیات',
    roman: 'Mujhse pehli si mohabbat meri mehboob na maang\nMain ne samjha tha ke tu hai to darakhshaan hai hayaat',
    hindi: 'मुझसे पहली सी मोहब्बत मेरी महबूब न माँग\nमैं ने समझा था कि तू है तो दरख़्शाँ है हयात',
    poet: 'Faiz Ahmed Faiz',
    theme: 'love',
  },
  mir1: {
    urdu: 'دیکھ تو دل کہ جاں سے اٹھتا ہے\nیہ دھواں سا کہاں سے اٹھتا ہے',
    roman: 'Dekh to dil ke jaan se uthta hai\nYe dhuan sa kahaan se uthta hai',
    hindi: 'देख तो दिल कि जाँ से उठता है\nये धुआँ सा कहाँ से उठता है',
    poet: 'Mir Taqi Mir',
    theme: 'pain',
  },
  iqbal1: {
    urdu: 'خودی کو کر بلند اتنا کہ ہر تقدیر سے پہلے\nخدا بندے سے خود پوچھے بتا تیری رضا کیا ہے',
    roman: 'Khudi ko kar buland itna ke har taqdeer se pehle\nKhuda bande se khud pooche bata teri raza kya hai',
    hindi: 'ख़ुदी को कर बुलंद इतना कि हर तक़दीर से पहले\nख़ुदा बंदे से ख़ुद पूछे बता तेरी रज़ा क्या है',
    poet: 'Allama Iqbal',
    theme: 'strength',
  },
  jaun1: {
    urdu: 'اس سادگی پہ کون نہ مر جائے اے خدا\nلڑتے ہیں اور ہاتھ میں تلوار بھی نہیں',
    roman: 'Is saadgi pe kaun na mar jaaye ae khuda\nLadte hain aur haath mein talwaar bhi nahin',
    hindi: 'इस सादगी पे कौन न मर जाए ऐ ख़ुदा\nलड़ते हैं और हाथ में तलवार भी नहीं',
    poet: 'Jaun Elia',
    theme: 'simplicity',
  },
  ahmed1: {
    urdu: 'اور بھی دکھ ہیں زمانے میں محبت کے سوا\nراحتیں اور بھی ہیں وصل کی راحت کے سوا',
    roman: 'Aur bhi dukh hain zamaane mein mohabbat ke siva\nRahatein aur bhi hain wasl ki raahat ke siva',
    hindi: 'और भी दुख हैं ज़माने में मोहब्बत के सिवा\nराहतें और भी हैं वस्ल की राहत के सिवा',
    poet: 'Faiz Ahmed Faiz',
    theme: 'perspective',
  },
} as const;

export type ShayariKey = keyof typeof SHAYARI;

export interface TemplateStyle {
  id: string;
  name: string;
  bg: string;
  textColor: string;
  fontFamily: string;
  borderStyle?: string;
  overlay?: string;
  poetColor: string;
  accent?: string;
}

export const TEMPLATES: TemplateStyle[] = [
  {
    id: 'midnight-gold',
    name: 'Midnight Gold',
    bg: 'linear-gradient(145deg, #0a0a0b 0%, #1a1510 50%, #0a0a0b 100%)',
    textColor: '#e8d5b0',
    fontFamily: '"Noto Nastaliq Urdu", serif',
    borderStyle: '1px solid rgba(212, 164, 76, 0.3)',
    poetColor: '#d4a44c',
    accent: '#d4a44c',
  },
  {
    id: 'pure-dark',
    name: 'Pure Dark',
    bg: '#0a0a0b',
    textColor: '#f0f0f2',
    fontFamily: '"Noto Nastaliq Urdu", serif',
    poetColor: '#8a8a96',
  },
  {
    id: 'teal-ink',
    name: 'Teal Ink',
    bg: 'linear-gradient(160deg, #0a0a0b 0%, #0a1a18 100%)',
    textColor: '#ccfbf1',
    fontFamily: '"Noto Nastaliq Urdu", serif',
    borderStyle: '1px solid rgba(20, 184, 166, 0.2)',
    poetColor: '#14b8a6',
    accent: '#14b8a6',
  },
  {
    id: 'warm-parchment',
    name: 'Warm Parchment',
    bg: 'linear-gradient(145deg, #1c1814 0%, #201a12 50%, #181410 100%)',
    textColor: '#e8d5b0',
    fontFamily: '"Amiri", serif',
    borderStyle: '1px solid rgba(212, 164, 76, 0.15)',
    poetColor: '#a67c3a',
    accent: '#d4a44c',
  },
  {
    id: 'silver-moon',
    name: 'Silver Moon',
    bg: 'linear-gradient(145deg, #0a0a0b 0%, #12121a 50%, #0a0a0b 100%)',
    textColor: '#d0d0d8',
    fontFamily: '"Noto Nastaliq Urdu", serif',
    borderStyle: '1px solid rgba(148, 163, 184, 0.15)',
    poetColor: '#94a3b8',
    accent: '#94a3b8',
  },
  {
    id: 'deep-rose',
    name: 'Deep Rose',
    bg: 'linear-gradient(145deg, #0a0a0b 0%, #1a0e10 50%, #0a0a0b 100%)',
    textColor: '#fecdd3',
    fontFamily: '"Noto Nastaliq Urdu", serif',
    borderStyle: '1px solid rgba(244, 63, 94, 0.15)',
    poetColor: '#f43f5e',
    accent: '#f43f5e',
  },
  {
    id: 'desert-sand',
    name: 'Desert Sand',
    bg: 'linear-gradient(145deg, #181410 0%, #201c14 50%, #181410 100%)',
    textColor: '#d4c4a0',
    fontFamily: '"Amiri", serif',
    overlay: 'radial-gradient(ellipse at 30% 20%, rgba(212, 164, 76, 0.06), transparent 60%)',
    poetColor: '#a67c3a',
    accent: '#d4a44c',
  },
  {
    id: 'emerald-night',
    name: 'Emerald Night',
    bg: 'linear-gradient(160deg, #0a0a0b 0%, #0a1410 50%, #0a0a0b 100%)',
    textColor: '#a7f3d0',
    fontFamily: '"Noto Nastaliq Urdu", serif',
    borderStyle: '1px solid rgba(16, 185, 129, 0.15)',
    poetColor: '#10b981',
    accent: '#10b981',
  },
];

export const TESTIMONIALS = [
  {
    name: 'Sana Mirza',
    role: 'Shayari Creator · 45K Followers',
    text: 'Alfaazi changed my entire workflow. I used to spend 30 minutes per post in Canva — now it takes 2 minutes. The Nastaliq rendering is actually beautiful.',
  },
  {
    name: 'Ahmad Raza',
    role: 'Urdu Poet & Author',
    text: 'Finally a tool that understands Urdu poetry. The transliteration is accurate, the templates respect the art form, and my ghazal collections are organized perfectly.',
  },
  {
    name: 'Priya Sharma',
    role: 'Hindi Poetry Page · 120K Followers',
    text: "The bilingual support is incredible. I write in Roman, it converts to both Urdu and Devanagari. My audience in India and Pakistan both love the posts.",
  },
];

export const FEATURES = [
  {
    icon: 'pen-tool',
    title: 'Poetry Editor',
    description: 'Rich text editor with Urdu, Hindi, and Roman script support. Auto-detect script direction, poetry structure templates for ghazals, nazms, and rubai.',
    detail: 'Supports sher, ghazal, nazm, rubai, qita formats with proper line structure and meter guidance.',
  },
  {
    icon: 'layout',
    title: 'Design Studio',
    description: '50+ templates crafted specifically for poetry. Calligraphic borders, ornamental frames, and backgrounds that make your words shine.',
    detail: 'Export in Instagram post, story, WhatsApp status, and Twitter banner sizes — all in HD.',
  },
  {
    icon: 'languages',
    title: 'Script Transliteration',
    description: 'Type in Roman script and see it rendered in beautiful Nastaliq Urdu or Devanagari Hindi. Bidirectional conversion between all three scripts.',
    detail: 'AI-powered transliteration that understands Urdu phonetics, not just character mapping.',
  },
  {
    icon: 'book-open',
    title: 'Poetry Collections',
    description: 'Organize your shayari into themed collections — ishq, dard, zindagi, motivation. Build your personal poetry library.',
    detail: 'Tag, search, and filter across thousands of saved couplets. Import from text or screenshots.',
  },
  {
    icon: 'share-2',
    title: 'Social Sharing',
    description: 'One-click export to Instagram, WhatsApp, Facebook, and Twitter. Schedule posts and track engagement analytics.',
    detail: 'Premium users get watermark-free exports and scheduling for up to 30 days ahead.',
  },
  {
    icon: 'users',
    title: 'Poet Profiles',
    description: "Browse poetry by legendary poets — Ghalib, Faiz, Mir, Iqbal. Attribute shayari correctly and build your own poet profile.",
    detail: 'Verified poet database with 10,000+ shers from 200+ classical and contemporary poets.',
  },
];

export const PRICING = [
  {
    name: 'Free',
    urdu: 'مفت',
    price: '$0',
    period: 'forever',
    description: 'Start creating beautiful shayari',
    features: [
      '5 designs per month',
      '8 basic templates',
      'Roman to Urdu transliteration',
      'Watermarked exports',
      '3 collections',
    ],
    cta: 'Start Free',
    highlighted: false,
  },
  {
    name: 'Creator',
    urdu: 'تخلیقکار',
    price: '$29',
    period: '/month',
    description: 'For serious shayari creators',
    features: [
      'Unlimited designs',
      '50+ premium templates',
      'All script transliterations',
      'No watermark · HD export',
      'Unlimited collections',
      'Custom fonts & colors',
      'Priority support',
    ],
    cta: 'Start Creating',
    highlighted: true,
  },
  {
    name: 'Studio',
    urdu: 'اسٹوڈیو',
    price: '$79',
    period: '/month',
    description: 'For teams and brands',
    features: [
      'Everything in Creator',
      'Team collaboration (10 seats)',
      'Brand kit & custom templates',
      'Social media scheduling',
      'Analytics dashboard',
      'API access',
      'Bulk export (100+ at once)',
      'Dedicated support',
    ],
    cta: 'Contact Sales',
    highlighted: false,
  },
];
