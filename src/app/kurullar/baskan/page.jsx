"use client";

import PageHeader from "@/components/common/PageHeader/PageHeader";
import { useLanguage } from "@/context/LanguageContext";
import { boardsData } from "@/data/management";

export default function BaskanPage() {
  const { language } = useLanguage();

  return (
    <>
      <PageHeader title="Başkan" subtitle="Başkan" />

      <main className="container py-5">
        <div className="row align-items-center g-5">
          <div className="col-lg-4">
            <img
              src={boardsData.president.image}
              alt={boardsData.president.name}
              style={{
                width: "100%",
                borderRadius: "12px",
                objectFit: "cover",
              }}
            />
          </div>

          <div className="col-lg-8">
            <h2
              style={{
                color: "#062b6f",
                fontWeight: "800",
                marginBottom: "10px",
              }}
            >
              {boardsData.president.name}
            </h2>

            <h5
              style={{
                color: "#666",
                marginBottom: "25px",
              }}
            >
              {boardsData.president.position[language]}
            </h5>

            <p
              style={{
                fontSize: "18px",
                lineHeight: "1.9",
                color: "#444",
              }}
            >
              {boardsData.president.message[language]}
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
