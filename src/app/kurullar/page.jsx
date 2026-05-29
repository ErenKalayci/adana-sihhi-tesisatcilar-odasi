"use client";

import Link from "next/link";

import PageHeader from "@/components/common/PageHeader/PageHeader";
import { useLanguage } from "@/context/LanguageContext";

export default function KurullarPage() {
  const { language } = useLanguage();

  const boards = [
    {
      title: {
        tr: "Başkan",
        en: "President",
        ar: "الرئيس",
      },
      href: "/kurullar/baskan",
    },
    {
      title: {
        tr: "Yönetim Kurulu",
        en: "Board of Directors",
        ar: "مجلس الإدارة",
      },
      href: "/kurullar/yonetim-kurulu",
    },
    {
      title: {
        tr: "Denetim Kurulu",
        en: "Supervisory Board",
        ar: "هيئة الرقابة",
      },
      href: "/kurullar/denetim-kurulu",
    },
    {
      title: {
        tr: "Sekreter",
        en: "Secretary",
        ar: "السكرتير",
      },
      href: "/kurullar/sekreter",
    },
  ];

  return (
    <>
      <PageHeader
        title={boards[0].title[language] === "Başkan" ? "Kurullar" : "Boards"}
        subtitle="Kurullar"
      />

      <main className="container py-5">
        <div className="row g-4">
          {boards.map((item, index) => (
            <div key={index} className="col-lg-3 col-md-6">
              <Link href={item.href} style={{ textDecoration: "none" }}>
                <div className="p-4 bg-white shadow-sm text-center h-100">
                  <h3 style={{ color: "#062b6f", fontWeight: "700" }}>
                    {item.title[language]}
                  </h3>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
