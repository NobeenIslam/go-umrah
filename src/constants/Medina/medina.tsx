import { Building, HeartHandshake, Landmark, MapPin } from "lucide-react";
import type { QuoteSection, IconListItem } from "@/types/content";

export const tiles = [
  {
    title: "Masjid Al-Nabawi",
    subtitle: "المسجد النبوي",
    href: "/medina/masjid-an-nabawi",
    colors: ["#FFF6DE", "#FCE9B4"],
    icon: (
      <Landmark
        className="h-9 w-9 text-[color:var(--brand-primary)]"
        aria-hidden="true"
      />
    ),
  },
  {
    title: "Giving Salawaat",
    subtitle: "الصلاة على النبي",
    href: "/medina/giving-salawaat",
    colors: ["#E9EEF4", "#D8E2EE"],
    icon: (
      <HeartHandshake
        className="h-9 w-9 text-[color:var(--brand-primary)]"
        aria-hidden="true"
      />
    ),
  },
  {
    title: "Rawdah",
    subtitle: "الروضة الشريفة",
    href: "/medina/rawdah",
    colors: ["#EAF4F1", "#DCECE7"],
    icon: (
      <Building
        className="h-9 w-9 text-[color:var(--brand-primary)]"
        aria-hidden="true"
      />
    ),
  },
  {
    title: "Al-Baqee Cemetery",
    subtitle: "البقيع",
    href: "/medina/al-baqee",
    colors: ["#F3E8FF", "#E9D5FF"],
    icon: (
      <MapPin
        className="h-9 w-9 text-[color:var(--brand-primary)]"
        aria-hidden="true"
      />
    ),
  },
] as const;

export const masjidAnNabawiSections: QuoteSection[] = [
  {
    heading: "Arriving at the Prophet's Mosque",
    quoteHeading: "Supplications when entering the masjid",
    quotes: [
      "In the name of Allah. O Allah, open for me the doors of Your mercy.",
      "Send abundant prayers and peace upon Muhammad ﷺ as you enter.",
    ],
    variant: "success",
  },
  {
    heading: "Virtue of praying in Masjid an-Nabawi",
    quoteHeading: "Hadith",
    quotes: [
      "A single prayer in this mosque of mine is better than a thousand prayers elsewhere, except for Masjid al-Haram.",
    ],
    variant: "info",
  },
  {
    heading: "Etiquettes inside the masjid",
    quoteHeading: "Guidance",
    quotes: [
      "Walk calmly, lower your voice, and avoid disturbing worshippers.",
      "Keep the masjid clean, be mindful of others, and maintain humility.",
    ],
    variant: "neutral",
  },
];

export const givingSalawaatSections: QuoteSection[] = [
  {
    heading: "Command to send prayers upon the Prophet ﷺ",
    quoteHeading: "Qur'an (33:56)",
    quotes: [
      "Indeed, Allah and His angels send blessings upon the Prophet. O you who believe, send blessings upon him and greetings of peace.",
    ],
    variant: "info",
  },
  {
    heading: "A concise formula of salawaat",
    quoteHeading: "Phrase",
    quotes: [
      "Allahumma salli 'ala Muhammad wa 'ala aali Muhammad, kama sallayta 'ala Ibraheem wa 'ala aali Ibraheem. Innaka Hameedun Majeed.",
    ],
    variant: "success",
  },
  {
    heading: "Merit of salawaat",
    quoteHeading: "Hadith",
    quotes: [
      "Whoever sends one blessing upon me, Allah sends ten blessings upon him.",
    ],
    variant: "neutral",
  },
];

export const rawdahSections: QuoteSection[] = [
  {
    heading: "Significance of the Rawdah",
    quoteHeading: "Hadith",
    quotes: [
      "Between my house and my pulpit is a garden from the gardens of Paradise.",
    ],
    variant: "info",
  },
  {
    heading: "Etiquettes of visiting",
    quoteHeading: "Guidance",
    quotes: [
      "Be patient, avoid pushing, and do not harm others.",
      "Pray two units with tranquility and offer sincere supplication.",
    ],
    variant: "success",
  },
  {
    heading: "Practical notes",
    quoteHeading: "Guidance",
    quotes: [
      "Follow the current scheduling system and on-site instructions.",
      "Prioritize safety, respect, and consideration for all visitors.",
    ],
    variant: "neutral",
  },
];

export const alBaqeeSections: QuoteSection[] = [
  {
    heading: "Significance of Al-Baqee",
    quoteHeading: "Context",
    quotes: ["Resting place of many Companions and family of the Prophet ﷺ."],
    variant: "info",
  },
  {
    heading: "Dua when visiting graves",
    quoteHeading: "Sunnah supplication",
    quotes: [
      "Peace be upon you, O inhabitants of these dwellings from among the believers and Muslims. Indeed we will, if Allah wills, join you. We ask Allah for well-being for us and for you.",
    ],
    variant: "success",
  },
  {
    heading: "Etiquettes",
    quoteHeading: "Guidance",
    quotes: [
      "Offer prayers for the deceased; avoid wailing or improper conduct.",
      "Maintain humility and reflect upon the Hereafter.",
    ],
    variant: "neutral",
  },
];

export const recommendedActsMedinaItems: IconListItem[] = [
  {
    title: "Pray abundantly in Masjid an-Nabawi",
    description:
      "Maximize your prayers and remembrance; a prayer here carries multiplied reward except for Masjid al-Haram.",
  },
  {
    title: "Send frequent salawaat",
    description:
      "Increase prayers upon the Prophet ﷺ throughout the day, especially in his city.",
  },
  {
    title: "Pursue knowledge and remembrance",
    description:
      "Attend circles of knowledge and beneficial reminders when available.",
  },
  {
    title: "Give charity and maintain good manners",
    description:
      "Be generous, lower your voice, and be considerate of all visitors and residents.",
  },
  {
    title: "Visit the Rawdah when possible",
    description:
      "If possible, visit with patience and respect, following the current system.",
  },
];
