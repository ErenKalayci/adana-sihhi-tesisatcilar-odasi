"use client";

import PageHeader from "@/components/common/PageHeader/PageHeader";
import { useLanguage } from "@/context/LanguageContext";
import { aboutData } from "@/data/about";

export default function HakkimizdaPage() {
  const { language } = useLanguage();

  return (
    <>
      <PageHeader
        title={aboutData.pageTitle[language]}
        subtitle={aboutData.pageTitle[language]}
      />

      <main className="container py-5">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <h2
              style={{
                color: "#062b6f",
                fontWeight: "800",
                marginBottom: "20px",
              }}
            >
              {aboutData.title[language]}
            </h2>

            <p
              style={{
                fontSize: "18px",
                lineHeight: "1.8",
                color: "#444",
              }}
            >
              {aboutData.description[language]}
            </p>
          </div>

          <div className="col-lg-6">
            <img
              src="/images/about/about-1.jpg"
              alt={aboutData.title[language]}
              style={{
                width: "100%",
                height: "360px",
                objectFit: "cover",
              }}
            />
          </div>
        </div>

        <div className="row g-4 mt-5">
          <div className="col-md-6">
            <div className="p-4 h-100 shadow-sm bg-white border-start border-5 border-primary">
              <h3 style={{ color: "#062b6f", fontWeight: "800" }}>
                {aboutData.missionTitle[language]}
              </h3>

              <p style={{ color: "#555", lineHeight: "1.7" }}>
                {aboutData.mission[language]}
              </p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="p-4 h-100 shadow-sm bg-white border-start border-5 border-primary">
              <h3 style={{ color: "#062b6f", fontWeight: "800" }}>
                {aboutData.visionTitle[language]}
              </h3>

              <p style={{ color: "#555", lineHeight: "1.7" }}>
                {aboutData.vision[language]}
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
