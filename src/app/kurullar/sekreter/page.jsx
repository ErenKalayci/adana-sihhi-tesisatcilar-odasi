"use client";

import PageHeader from "@/components/common/PageHeader/PageHeader";
import { useLanguage } from "@/context/LanguageContext";
import { boardsData } from "@/data/management";

export default function SekreterPage() {
  const { language } = useLanguage();

  return (
    <>
      <PageHeader title="Sekreter" subtitle="Sekreter" />

      <main className="container py-5">
        {boardsData.secretary.map((member) => (
          <div key={member.id} className="d-flex gap-4 align-items-center mb-4">
            <img src={member.image} alt={member.name} width="160" />

            <div>
              <h2>{member.name}</h2>
              <p>{member.position[language]}</p>
            </div>
          </div>
        ))}
      </main>
    </>
  );
}
