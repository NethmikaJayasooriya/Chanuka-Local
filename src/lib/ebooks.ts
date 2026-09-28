export interface EbookItem {
  id: string;
  titleSinhala: string;
  titleEnglish: string;
  author: string;
  role: string;
  coverImage: string;
  tag: string;
  pages: string;
  language: "Sinhala" | "English" | "Bilingual";
  summarySinhala: string;
  summaryEnglish: string;
  highlights: string[];
  priceLKR: number;
  featured?: boolean;
}

export const EBOOKS: EbookItem[] = [
  {
    id: "millionaire-fastlane",
    titleSinhala: "කෝටිපතියෙක් වීමේ වේගවත් මග",
    titleEnglish: "The Millionaire Fastlane (Sinhala Adaptation)",
    author: "Chanuka Jeewantha (Translator / Adaptor)",
    role: "Career & Financial Strategist",
    coverImage: "/images/Millionaire Fastlane Cover Image.png",
    tag: "Bestseller",
    pages: "320+ Pages",
    language: "Sinhala",
    summarySinhala:
      "සාම්ප්‍රදායික රැකියාවක කොටු නොවී, ඔබේ දැනුම හා හැකියාවන් වටිනා වත්කමක් බවට පත්කර ගනිමින් මූල්‍යමය නිදහස කරා යන සැබෑ මාවත පැහැදිලි කරන මාහැඟි කෘතියකි.",
    summaryEnglish:
      "A life-changing Sinhala adaptation focusing on breaking free from conventional career ceilings, building wealth through scalable systems, and designing a high-impact professional trajectory.",
    highlights: [
      "සාම්ප්‍රදායික 'Slowlane' මාවතෙන් මිදෙන ආකාරය",
      "වටිනාකම් නිර්මාණය කර ඉහළ ආදායම් උපයන නීති",
      "මූල්‍ය නිදහස සඳහා ප්‍රායෝගික සැලැස්ම",
    ],
    priceLKR: 2850,
    featured: true,
  },
  {
    id: "deep-work",
    titleSinhala: "ගැඹුරු කාර්යය",
    titleEnglish: "Deep Work (Sinhala Edition)",
    author: "Chanuka Jeewantha",
    role: "Career Coach & Productivity Author",
    coverImage: "/images/Deep Work Cover Image.png",
    tag: "Productivity",
    pages: "280+ Pages",
    language: "Sinhala",
    summarySinhala:
      "අවධානය බිඳවැටෙන ඩිජිටල් යුගයක, ඔබේ වෘත්තීය සාර්ථකත්වය සහ නිර්මාණශීලී කාර්යක්ෂමතාව උපරිම මට්ටමට ගෙන එන 'Deep Work' සංකල්පය පිළිබඳ සවිස්තරාත්මක මගපෙන්වීම.",
    summaryEnglish:
      "Master uninterrupted focus in an era of digital distractions. Learn how top professionals produce rare and valuable results in minimum time.",
    highlights: [
      "සමාජ මාධ්‍ය හා නොමග යවන සාධක පාලනය",
      "පැය 4 කින් දිනක වැඩ නිමකරන ක්‍රමවේදය",
      "වෘත්තීය විශිෂ්ටත්වය කරා ළඟාවීමේ මනෝවිද්‍යාව",
    ],
    priceLKR: 2650,
    featured: true,
  },
  {
    id: "rich-dad-poor-dad",
    titleSinhala: "ධනවත් තාත්තා සහ දුප්පත් තාත්තා",
    titleEnglish: "Rich Dad Poor Dad (Sinhala Edition)",
    author: "Chanuka Jeewantha",
    role: "Financial & Career Mindset Coach",
    coverImage: "/images/Rich Dad Poor Dad Cover Image.png",
    tag: "Classic Mindset",
    pages: "290+ Pages",
    language: "Sinhala",
    summarySinhala:
      "මුදල් වෙනුවෙන් වැඩ කරනවා වෙනුවට මුදල් ඔබට වැඩ කරන තැනට රැගෙන එන මූල්‍ය බුද්ධිය සහ ආකල්පමය වෙනස ගොඩනගන ලොව අංක 1 මූල්‍ය කෘතියේ සිංහල පරිවර්තනය.",
    summaryEnglish:
      "The definitive mindset shift between working for money versus making money work for you, translated and contextualized for Sri Lankan readers.",
    highlights: [
      "වත්කම් සහ බැරකම් අතර සැබෑ වෙනස",
      "පාසලෙන් නොකියාදෙන මුදලේ රහස්",
      "වෘත්තීයවේදීන්ට අත්‍යවශ්‍ය මූල්‍ය සාක්ෂරතාව",
    ],
    priceLKR: 2750,
    featured: true,
  },
  {
    id: "psychology-of-money",
    titleSinhala: "මුදලේ මනෝවිද්‍යාව",
    titleEnglish: "The Psychology of Money (Sinhala Edition)",
    author: "Chanuka Jeewantha",
    role: "Author & Career Strategist",
    coverImage: "/images/The Psychology of Money.png",
    tag: "Bestseller",
    pages: "260+ Pages",
    language: "Sinhala",
    summarySinhala:
      "මුදල් කළමනාකරණය යනු ගණිතමය දැනුමට වඩා පුද්ගල හැසිරීම් සහ තීරණ මත තීරණය වන දෙයක් බව ඔප්පු කරන ආකර්ෂණීය පාඩම් 19ක් ඇතුළත් කෘතිය.",
    summaryEnglish:
      "Doing well with money isn't necessarily about what you know. It's about how you behave. Timeless lessons on wealth, greed, and happiness.",
    highlights: [
      "ධනය සහ ධනවත් පෙනුම අතර පරතරය",
      "දිගුකාලීන මූල්‍ය නිදහසේ රහස්",
      "වෘත්තීය තීරණ ගැනීමේදී මනස මෙහෙයවන අන්දම",
    ],
    priceLKR: 2950,
    featured: true,
  },
  {
    id: "so-good-cant-ignore",
    titleSinhala: "සාර්ථක වෘත්තීය ජීවිතයක නීති සහ මූලධර්ම",
    titleEnglish: "So Good They Can't Ignore You (Sinhala Edition)",
    author: "Chanuka Jeewantha",
    role: "Career Development Specialist",
    coverImage: "/images/So Good They Cant Ignore You Cover Image.png",
    tag: "Career Mastery",
    pages: "275+ Pages",
    language: "Sinhala",
    summarySinhala:
      "'ඔබ ආශා කරන දේ පසුපස හඹා යන්න' යන මිත්‍යාව පසෙකලා, ක්ෂේත්‍රයේ අසමසම කුසලතාවක් (Rare & Valuable Skills) ගොඩනගා සමාගම්වලට ඔබව මගහැරිය නොහැකි තත්ත්වයට පත්වන රහස්.",
    summaryEnglish:
      "Why passion alone fails and how developing career capital and mastery makes you irreplaceable in modern corporate environments.",
    highlights: [
      "The Craftsman Mindset vs Passion Trap",
      "Career Capital ගොඩනගන ආකාරය",
      "ඉහළ වැටුප් සහ ස්වාධීනත්වය දිනාගැනීම",
    ],
    priceLKR: 2800,
    featured: false,
  },
];
