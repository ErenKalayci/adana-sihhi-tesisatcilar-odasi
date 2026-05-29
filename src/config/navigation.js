export const navigation = [
  {
    tr: "ANA SAYFA",
    en: "HOME",
    ar: "الرئيسية",
    href: "/",
  },

  {
    tr: "HAKKIMIZDA",
    en: "ABOUT",
    ar: "من نحن",
    href: "/hakkimizda",
  },
  {
    tr: "KURULLAR",
    en: "BOARDS",
    ar: "المجالس",
    href: "/kurullar",
    children: [
      {
        tr: "Başkan",
        en: "President",
        ar: "الرئيس",
        href: "/kurullar/baskan",
      },
      {
        tr: "Yönetim Kurulu",
        en: "Board of Directors",
        ar: "مجلس الإدارة",
        href: "/kurullar/yonetim-kurulu",
      },
      {
        tr: "Denetim Kurulu",
        en: "Supervisory Board",
        ar: "هيئة الرقابة",
        href: "/kurullar/denetim-kurulu",
      },
      {
        tr: "Sekreter",
        en: "Secretary",
        ar: "السكرتير",
        href: "/kurullar/sekreter",
      },
    ],
  },
  {
    tr: "HABERLER",
    en: "NEWS",
    ar: "الأخبار",
    href: "/haberler",
  },

  {
    tr: "FAALİYETLER",
    en: "ACTIVITIES",
    ar: "الفعاليات",
    href: "/faaliyetler",
  },

  {
    tr: "ÜYELİK",
    en: "MEMBERSHIP",
    ar: "العضوية",
    href: "/uyelik",
  },

  {
    tr: "İLETİŞİM",
    en: "CONTACT",
    ar: "التواصل",
    href: "/iletisim",
  },
];
