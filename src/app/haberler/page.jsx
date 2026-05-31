"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { useLanguage } from "@/context/LanguageContext";
import { newsSectionData } from "@/data/news";
import PageHeader from "@/components/common/PageHeader/PageHeader";
import { supabase } from "@/lib/supabase";

export default function HaberlerPage() {
  const { language } = useLanguage();
  const [news, setNews] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      const { data, error } = await supabase
        .from("news")
        .select("*")
        .order("created_at", { ascending: false });

      if (!error) {
        setNews(data);
      }
    };

    getNews();
  }, []);

  return (
    <>
      <PageHeader
        title={newsSectionData.title[language]}
        subtitle={newsSectionData.title[language]}
      />

      <main className="container py-5">
        <div className="row g-4">
          {news.map((item) => (
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
                    src={item.image_url || "/images/news/default.jpg"}
                    alt={item[`title_${language}`] || item.title_tr}
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
                      {new Date(item.created_at).toLocaleDateString("tr-TR")}
                    </span>

                    <h3
                      style={{
                        color: "#062b6f",
                        fontSize: "22px",
                        fontWeight: "800",
                        marginTop: "12px",
                      }}
                    >
                      {item[`title_${language}`] || item.title_tr}
                    </h3>

                    <p style={{ color: "#555" }}>
                      {item[`description_${language}`] || item.description_tr}
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
