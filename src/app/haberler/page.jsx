"use client";

import Link from "next/link";

import { useLanguage } from "@/context/LanguageContext";
import { newsData, newsSectionData } from "@/data/news";
import PageHeader from "@/components/common/PageHeader/PageHeader";

export default function HaberlerPage() {
  const { language } = useLanguage();

  return (
    <>
      <PageHeader
        title={newsSectionData.title[language]}
        subtitle={newsSectionData.title[language]}
      />

      <main className="container py-5">
        <div className="row g-4">
          {newsData.map((item) => (
            <div className="col-lg-4 col-md-6" key={item.id}>
              <Link
                href={`/haberler/${item.id}`}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <div className="card h-100 shadow-sm border-0">
                  <img
                    src={item.image}
                    alt={item.title[language]}
                    className="card-img-top"
                    style={{
                      height: "230px",
                      objectFit: "cover",
                    }}
                  />

                  <div className="card-body">
                    <span
                      style={{
                        color: "#b00000",
                        fontWeight: "700",
                        fontSize: "14px",
                      }}
                    >
                      {item.date}
                    </span>

                    <h3
                      style={{
                        color: "#062b6f",
                        fontSize: "22px",
                        fontWeight: "800",
                        marginTop: "12px",
                      }}
                    >
                      {item.title[language]}
                    </h3>

                    <p style={{ color: "#555" }}>
                      {item.description[language]}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
