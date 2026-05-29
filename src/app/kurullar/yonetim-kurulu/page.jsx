"use client";

import PageHeader from "@/components/common/PageHeader/PageHeader";
import { useLanguage } from "@/context/LanguageContext";
import { boardsData } from "@/data/management";

export default function YonetimKuruluPage() {
  const { language } = useLanguage();

  return (
    <>
      <PageHeader title="Yönetim Kurulu" subtitle="Yönetim Kurulu" />

      <main className="container py-5">
        {boardsData.management.length === 0 ? (
          <p>Yönetim kurulu bilgileri yakında eklenecektir.</p>
        ) : (
          boardsData.management.map((member) => (
            <div
              key={member.id}
              className="d-flex gap-4 align-items-center mb-4"
            >
              <img src={member.image} alt={member.name} width="160" />

              <div>
                <h2>{member.name}</h2>
                <p>{member.position[language]}</p>
              </div>
            </div>
          ))
        )}
      </main>
    </>
  );
}
