import { BASE_PRICES, formatLKR } from "@/lib/pricing";
import { site } from "@/lib/site";
import type { LkGuide } from "./types";

const cv = BASE_PRICES.cv;

/**
 * Sinhala counterpart of the CV format guide (hreflang si-LK).
 * Targets: cv format sinhala (390/mo), cv sinhala (260), resume meaning in
 * sinhala (590), cv meaning in sinhala (210), curriculum vitae meaning in
 * sinhala (210). The old .lk site already ranks for these with Sinhala
 * blog posts, which now redirect here.
 */
export const cvFormatSinhala: LkGuide = {
  slug: "cv-format-sinhala",
  lang: "si",
  eyebrow: "CV මාර්ගෝපදේශය · සිංහලෙන්",
  h1: "CV Format සිංහලෙන්: හොඳ CV එකක් ලියන්නේ කොහොමද?",
  metaTitle: "CV Format සිංහලෙන්: CV එකක් ලියන්නේ කොහොමද? (2026)",
  metaDescription:
    "CV එකක් කියන්නේ මොකක්ද, CV සහ Resume අතර වෙනස, ලංකාවේ රැකියා සඳහා නිවැරදි CV format එක, freshers, රජයේ සහ විදේශ රැකියා සඳහා උපදෙස්. CPRW සහතික CV ලේඛක චනුක ජීවන්ත.",
  lead: `ලංකාවේ රැකියා දෙන්නන් බලාපොරොත්තු වන CV format එක, කොටසින් කොටස, සරල සිංහලෙන්. ${site.cvsWritten} CVs ලියූ CPRW සහතික CV ලේඛක චනුක ජීවන්ත විසින්.`,
  quickAnswer:
    "CV (Curriculum Vitae) එකක් කියන්නේ ඔබේ අධ්‍යාපනය, රැකියා පළපුරුද්ද, කුසලතා සහ ජයග්‍රහණ කෙටියෙන් ඉදිරිපත් කරන ලේඛනයයි. ලංකාවේ හොඳ CV එකක් A4 පිටු එකක් හෝ දෙකක් විය යුතුයි. පිළිවෙළ: නම සහ සම්බන්ධතා විස්තර, Professional Summary එක, රැකියා පළපුරුද්ද (අලුත්ම එක මුලින්), අධ්‍යාපනය සහ වෘත්තීය සුදුසුකම්, කුසලතා සහ භාෂා, සහ ඥාති නොවන Referees දෙදෙනෙක්. ඉල්ලා නැත්නම් NIC අංකය, ආගම, විවාහක බව සහ photo එක දාන්න එපා. CV එක ඉංග්‍රීසියෙන් ලියා PDF එකක් ලෙස යවන්න.",
  quickAnswerLabel: "කෙටි පිළිතුර",
  published: "2026-10-04",
  updated: "2026-10-04",
  keyFacts: [
    { label: "දිග", value: "Freshers සඳහා පිටු 1, බොහෝ වෘත්තිකයන් සඳහා පිටු 2" },
    { label: "භාෂාව", value: "බොහෝ රැකියා සඳහා ඉංග්‍රීසි. රජයේ රැකියා සඳහා දැන්වීමේ සඳහන් භාෂාව" },
    { label: "Photo", value: "අනිවාර්ය නැහැ. ඉල්ලා ඇත්නම් පමණක් professional photo එකක්" },
    { label: "පුද්ගලික විස්තර", value: "නම, දුරකථනය, email, නගරය, LinkedIn. NIC සහ උපන් දිනය ඉල්ලුවොත් පමණයි" },
    { label: "Referees", value: "ඥාති නොවන දෙදෙනෙක්: නම, තනතුර, ආයතනය, දුරකථනය, email" },
    { label: "File එක", value: "PDF, නම Firstname-Lastname-CV.pdf ලෙස" },
  ],
  sections: [
    {
      id: "cv-meaning",
      heading: "CV කියන්නේ මොකක්ද? (CV meaning in Sinhala)",
      paragraphs: [
        "CV යනු Curriculum Vitae යන ලතින් වචන දෙකේ කෙටි රූපයයි. එහි තේරුම \"ජීවිතයේ ගමන් මග\" යන්නයි. සරලව කිව්වොත්, CV එකක් කියන්නේ ඔබ කවුද, ඔබ මොනවද ඉගෙන ගත්තේ, මොනවද කළේ සහ මොනවද ජයග්‍රහණය කළේ කියලා රැකියා දෙන්නෙකුට තත්පර කිහිපයකින් තේරුම් ගන්න පුළුවන් විදිහට ලියූ ලේඛනයයි.",
        "සිංහලෙන් සමහර විට මෙයට \"ජීව දත්ත පත්‍රය\" කියලා කියනවා. නමුත් රැකියාවකට අයදුම් කරන විට අවශ්‍ය වෙන්නේ ජීව දත්ත පමණක් නොවෙයි, ඔබට එම රැකියාව කරන්න පුළුවන් බවට සාක්ෂි. හොඳ CV එකක වැදගත්ම කොටස එයයි.",
      ],
    },
    {
      id: "cv-vs-resume",
      heading: "CV සහ Resume අතර වෙනස මොකක්ද?",
      paragraphs: [
        "Resume යන වචනයේ තේරුම \"සාරාංශය\" යන්නයි. ඇමරිකාවේ සහ කැනඩාවේ රැකියා සඳහා භාවිත කරන්නේ පිටු එකක් හෝ දෙකක කෙටි Resume එකක්. ලංකාව, එංගලන්තය, මැද පෙරදිග සහ ආසියාවේ බොහෝ රටවල් CV කියන වචනය භාවිත කරනවා.",
        "ලංකාවේ රැකියා දෙන්නන් CV සහ Resume කියන වචන දෙකම එකම දේ සඳහා පාවිච්චි කරනවා. ඉතින් දැන්වීමක \"Send your resume\" කියලා තිබුණත් ඔබ යවන්න ඕනේ පිටු එකක් හෝ දෙකක හොඳ CV එකක්. Bio data කියන්නේ වෙනම දෙයක්: එය උපන් දිනය, පවුල, ආගම වැනි පුද්ගලික විස්තර පත්‍රයක්. රැකියාවකට bio data format එකක් යවන්න එපා.",
      ],
    },
    {
      id: "structure",
      heading: "ලංකාවේ CV Format එක: කොටස් පිළිවෙළ",
      paragraphs: [
        "CV එක ඉංග්‍රීසියෙන් ලියන නිසා කොටස්වල නම් (headings) ඉංග්‍රීසියෙන්ම තියන්න. ATS කියන CV කියවන software වලට හොඳින් තේරෙන්නේ මේ සම්මත headings.",
      ],
      table: {
        caption: "CV එකේ කොටස්, පිළිවෙළට",
        head: ["කොටස (Heading)", "ඇතුළත් කළ යුත්තේ", "උපදෙස"],
        rows: [
          ["Header", "සම්පූර්ණ නම, ජංගම දුරකථනය, email, නගරය, LinkedIn link එක", "ඉහළින්ම \"Curriculum Vitae\" කියලා ලියන්න එපා. ඔබේ නමම තමයි මාතෘකාව."],
          ["Professional Summary", "පේළි 3 සිට 4: ඔබ කවුද, අවුරුදු කීයක පළපුරුද්දද, බලාපොරොත්තු වන රැකියාව", "පරණ \"Career Objective\" එක වෙනුවට මෙය දාන්න."],
          ["Work Experience", "තනතුර, ආයතනය, කාලය, ඉන්පසු ජයග්‍රහණ bullets 3 සිට 6", "රාජකාරි ලැයිස්තුවක් නොවෙයි, ප්‍රතිඵල ලියන්න. ඉලක්කම් දාන්න."],
          ["Education", "උපාධිය, විශ්වවිද්‍යාලය, වර්ෂය, පන්තිය", "Freshers ලා අධ්‍යාපනය මුලින්ම දාන්න."],
          ["Professional Qualifications", "CIMA, ACCA, CA, IBSL, NIBM, SLIIT වැනි සුදුසුකම්", "සම්පූර්ණ කළ මට්ටම සහ වර්ෂය."],
          ["Skills & Languages", "රැකියාවට අදාළ කුසලතා, software, ඉංග්‍රීසි, සිංහල, දෙමළ හැකියාව", "\"Computer literate\" වෙනුවට Excel, SAP වැනි නම් දාන්න."],
          ["Referees", "ඥාති නොවන දෙදෙනෙක්: නම, තනතුර, ආයතනය, දුරකථනය, email", "කලින්ම ඔවුන්ගේ අවසරය ගන්න."],
        ],
      },
    },
    {
      id: "work-experience",
      heading: "Work Experience කොටස ලියන්නේ කොහොමද?",
      paragraphs: [
        "CV එකේ වැඩියෙන්ම කියවන්නේ මේ කොටස. අලුත්ම රැකියාව මුලින් දාන්න. හැම රැකියාවක් යටතේම ඔබ කළ රාජකාරි පමණක් නොවෙයි, ඒවායින් ලැබුණු ප්‍රතිඵල ලියන්න.",
        "උදාහරණයක්: \"Handled customer complaints\" වෙනුවට \"Resolved 40+ customer complaints a week and reduced repeat complaints by 25%\" කියලා ලියන්න. ක්‍රියා පදයකින් (Managed, Increased, Reduced, Delivered) පටන් ගෙන ඉලක්කමක් දාපු bullet එකක් recruiter කෙනෙකුට ඉක්මනින් තේරෙනවා.",
      ],
    },
    {
      id: "freshers",
      heading: "Freshers සහ students සඳහා CV format එක",
      bullets: [
        "පිටු එකයි. අධ්‍යාපනය මුලින්ම: උපාධිය හෝ diploma එක, ඉන්පසු A/L විෂය ධාරාව, වර්ෂය සහ ප්‍රතිඵල.",
        "උපාධියක් නැත්නම් පමණක් O/L ප්‍රතිඵල එක පේළියකින් දාන්න.",
        "Final year project එක, group projects සහ ඔබම කළ projects: මොනවද හැදුවේ, ප්‍රතිඵලය මොකක්ද.",
        "Internships, part-time රැකියා සහ ස්වේච්ඡා සේවය සැබෑ පළපුරුද්දක් ලෙසම ලියන්න.",
        "සමිති, ක්‍රීඩා, Rotaract වැනි නායකත්ව තනතුරු නායකත්වයට සාක්ෂි.",
        "\"I hereby certify that the above particulars are true\" වැනි declaration එකක් form එකක ඉල්ලුවොත් මිසක් දාන්න එපා.",
      ],
    },
    {
      id: "government-and-foreign",
      heading: "රජයේ රැකියා සහ විදේශ රැකියා සඳහා",
      paragraphs: [
        "රජයේ සහ අර්ධ රාජ්‍ය රැකියා සඳහා බොහෝ විට ගැසට් පත්‍රයේ හෝ පුවත්පත් දැන්වීමේ පළ කරන නියමිත අයදුම්පත් ආකෘතියම භාවිත කළ යුතුයි. එහි ඇති පිළිවෙළ වෙනස් කරන්න එපා, හැම කොටසක්ම පුරවන්න, අවසන් දිනයට කලින් යවන්න. වෙනම CV එකක් අවශ්‍ය වෙන්නේ දැන්වීමේ ඉල්ලා ඇත්නම් පමණයි.",
        "විදේශ රැකියා සඳහා CV එක ඔබ යන රටට අනුව වෙනස් විය යුතුයි. උදාහරණයක් ලෙස මැද පෙරදිග රැකියා සඳහා photo එකක් බොහෝ විට බලාපොරොත්තු වෙනවා, නමුත් එංගලන්තය, කැනඩාව සහ ඕස්ට්‍රේලියාව සඳහා photo එකක් දාන්නේ නැහැ. විස්තර ඉංග්‍රීසි Foreign Job CV මාර්ගෝපදේශයේ තියෙනවා.",
      ],
    },
    {
      id: "mistakes",
      heading: "ලංකාවේ CV වල නිතර දකින වැරදි",
      bullets: [
        "ඉහළින්ම \"Curriculum Vitae\" කියලා ලිවීම.",
        "ඕනෑම කෙනෙකුට ගැලපෙන පොදු Career Objective එකක්.",
        "ප්‍රතිඵල වෙනුවට job description එකේ රාජකාරි copy කිරීම.",
        "Icons, skill bars සහ columns දෙකක් තියෙන Canva templates. ATS software වලට මේවා කියවන්න අමාරුයි.",
        "නොගැලපෙන email ලිපිනයක්. රැකියා සඳහා ඔබේ නමින් email එකක් හදාගන්න.",
        "උපාධියක් සහ පළපුරුද්දක් තිබියදීත් O/L විෂය සියල්ල ලැයිස්තු කිරීම.",
        "පිටු 4 හෝ 5ක CV. Recruiter කෙනෙක් ඒ තරම් කියවන්නේ නැහැ.",
        "අක්ෂර වින්‍යාස සහ ව්‍යාකරණ වැරදි.",
      ],
    },
  ],
  steps: {
    title: "CV එකක් ලියන පියවර 7",
    items: [
      { name: "ඉලක්ක රැකියාව තෝරන්න", text: "TopJobs, LinkedIn වැනි තැන්වල ඒ රැකියාවට දැන්වීම් 2 සිට 3ක් කියවා, නැවත නැවත එන වචන සටහන් කරගන්න." },
      { name: "Header එක ලියන්න", text: "ඔබේ සම්පූර්ණ නම මාතෘකාව ලෙස, ඉන්පසු දුරකථනය, email, නගරය සහ LinkedIn link එක." },
      { name: "Professional Summary එක ලියන්න", text: "පේළි 3 සිට 4ක ඔබේ තනතුර, පළපුරුද්ද, ප්‍රධාන ජයග්‍රහණය සහ බලාපොරොත්තු වන රැකියාව." },
      { name: "Work Experience එක ජයග්‍රහණ සමඟ", text: "අලුත්ම රැකියාව මුලින්. හැම එකක් යටතේම ඉලක්කම් සහිත bullets 3 සිට 6." },
      { name: "අධ්‍යාපනය සහ සුදුසුකම්", text: "උපාධිය, ආයතනය සහ වර්ෂය, ඉන්පසු වෘත්තීය සුදුසුකම්. A/L ප්‍රතිඵල career එකේ මුල් කාලයේ පමණයි." },
      { name: "කුසලතා සහ භාෂා", text: "කුසලතා වර්ග අනුව දාන්න. ඉංග්‍රීසි, සිංහල, දෙමළ හැකියාව අවංකව සඳහන් කරන්න." },
      { name: "Referees, proofread, PDF", text: "ඥාති නොවන referees දෙදෙනෙක්, හොඳින් proofread කර, Firstname-Lastname-CV.pdf ලෙස save කරන්න." },
    ],
  },
  takeaways: [
    "Freshers පිටු 1, වෘත්තිකයන් පිටු 2, A4, එක් column එකක සරල layout එකක්.",
    "Header එකේ නම සහ සම්බන්ධතා විස්තර පමණයි. NIC, උපන් දිනය, ආගම ඉල්ලුවොත් පමණයි.",
    "රාජකාරි නොවෙයි, ඉලක්කම් සහිත ජයග්‍රහණ ලියන්න.",
    "රජයේ රැකියා සඳහා ගැසට් ආකෘතියම භාවිත කරන්න.",
    "PDF එකක් ලෙස, ඔබේ නමින් යවන්න.",
  ],
  faqs: [
    { q: "CV එකක් කියන්නේ මොකක්ද?", a: "CV (Curriculum Vitae) එකක් කියන්නේ ඔබේ අධ්‍යාපනය, රැකියා පළපුරුද්ද, කුසලතා සහ ජයග්‍රහණ රැකියා දෙන්නෙකුට ඉක්මනින් තේරෙන විදිහට පිටු එකක හෝ දෙකක ඉදිරිපත් කරන ලේඛනයයි. Curriculum Vitae යන්නේ තේරුම \"ජීවිතයේ ගමන් මග\" යන්නයි." },
    { q: "Resume එකක තේරුම මොකක්ද?", a: "Resume යනු \"සාරාංශය\" යන අර්ථය ඇති වචනයකි. ඇමරිකාවේ සහ කැනඩාවේ භාවිත කරන කෙටි, පිටු එකක හෝ දෙකක රැකියා ලේඛනයට Resume කියනවා. ලංකාවේ CV සහ Resume කියන වචන දෙකම එකම දේට භාවිත කරනවා." },
    { q: "CV එක සිංහලෙන් ලියන්න පුළුවන්ද?", a: "පෞද්ගලික අංශයේ සහ විදේශ රැකියා සඳහා CV එක ඉංග්‍රීසියෙන් ලියන්න. රජයේ රැකියා සඳහා දැන්වීමේ සඳහන් භාෂාවෙන් (සිංහල, දෙමළ හෝ ඉංග්‍රීසි) නියමිත අයදුම්පත් ආකෘතිය පුරවන්න." },
    { q: "CV එකක පිටු කීයක් තියෙන්න ඕනද?", a: "Students සහ freshers සඳහා පිටු එකයි. බොහෝ වෘත්තිකයන් සඳහා පිටු දෙකයි. ඉතා දිගු පළපුරුද්දක් ඇති ජ්‍යෙෂ්ඨ අය සඳහා පමණක් පිටු තුනක්." },
    { q: "CV එකට photo එකක් දාන්න ඕනද?", a: "ලංකාවේ පෞද්ගලික අංශයේ රැකියා සඳහා අනිවාර්ය නැහැ. දැන්වීමේ ඉල්ලා ඇත්නම් පමණක් professional photo එකක් දාන්න. එංගලන්තය, ඇමරිකාව, කැනඩාව සහ ඕස්ට්‍රේලියාව සඳහා කිසිසේත් photo එකක් දාන්න එපා." },
    { q: "CV එකට NIC අංකය දාන්න ඕනද?", a: "ඉල්ලුවොත් පමණයි. රජයේ රැකියා සහ සමහර බැංකු අයදුම්පත් NIC අංකය ඉල්ලනවා. බොහෝ පෞද්ගලික රැකියා සඳහා NIC අංකය, උපන් දිනය, ආගම සහ විවාහක බව අවශ්‍ය නැහැ." },
    { q: "Freshers ලාගේ CV එකට මොනවද දාන්නේ?", a: "අධ්‍යාපනය (උපාධිය, A/L ප්‍රතිඵල), projects, internships, part-time රැකියා, සමිති හෝ ක්‍රීඩා නායකත්ව තනතුරු සහ කුසලතා. පිටු එකකට සීමා කරන්න." },
    { q: "Professional CV එකක් ලියා ගන්න කීයක් යනවද?", a: `චනුක ජීවන්ත සමඟ ATS CV එකක් students සහ freshers සඳහා ${formatLKR(cv["under-2"])}, අවුරුදු 1 සිට 9 පළපුරුද්ද ඇති අය සඳහා ${formatLKR(cv["3-to-9"])}, සහ executives සඳහා ${formatLKR(cv["over-10"])}. හැම CV එකක්ම චනුක විසින්ම ලියනවා, revision එකක් සහ Word, PDF files සමඟ.` },
  ],
  related: [
    { href: "/cv-format-sri-lanka", label: "CV format guide (English)" },
    { href: "/foreign-job-cv-sri-lanka", label: "Foreign job CV" },
    { href: "/how-to-choose-a-cv-writer-sri-lanka", label: "CV writer කෙනෙක් තෝරන්නේ කොහොමද" },
    { href: "/cv-writing", label: "CV writing service" },
  ],
  cta: {
    heading: "මේ format එකට CV එක ලියා ගන්න",
    body: `ඔබේ ඉලක්ක රැකියාවට ගැලපෙන විදිහට චනුක විසින්ම ඔබේ CV එක ලියා දෙනවා. ${formatLKR(cv["under-2"])} සිට, පැය 24න් delivery.`,
    href: "/order?package=ats-cv",
    label: "CV එක order කරන්න",
  },
  alternate: { lang: "en", slug: "cv-format-sri-lanka", label: "Read in English" },
  ui: {
    contents: "මෙම මාර්ගෝපදේශයේ",
    faq: "නිතර අසන ප්‍රශ්න",
    related: "අදාළ",
    steps: "පියවරෙන් පියවර",
    summary: "කෙටියෙන්",
    keyFacts: "ප්‍රධාන කරුණු",
  },
};
