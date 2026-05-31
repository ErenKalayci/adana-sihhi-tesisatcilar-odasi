"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";

import { supabase } from "@/lib/supabase";
import { useLanguage } from "@/context/LanguageContext";

export default function NewsDetailPage() {
  const { id } = useParams();
  const { language } = useLanguage();

  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getNews = async () => {
      const { data, error } = await supabase
        .from("news")
        .select("*")
        .eq("id", id)
        .single();

      if (!error) {
        setNews(data);
      }

      setLoading(false);
    };

    getNews();
  }, [id]);

  if (loading) {
    return (
      <main className="container py-5">
        <p>Yükleniyor...</p>
      </main>
    );
  }

  if (!news) {
    return (
      <main className="container py-5">
        <h1>Haber bulunamadı.</h1>
      </main>
    );
  }

  return (
    <main className="container py-5">
      <Image
        src={news.image_url || "/images/news/default.jpg"}
        alt={news[`title_${language}`] || news.title_tr}
        width={1200}
        height={600}
        style={{
          width: "100%",
          height: "420px",
          objectFit: "cover",
        }}
      />

      <div style={{ marginTop: "30px", maxWidth: "900px" }}>
        <p style={{ color: "#b00000", fontWeight: "700" }}>
          {new Date(news.created_at).toLocaleDateString("tr-TR")}
        </p>

        <h1 style={{ color: "#062b6f", fontWeight: "800" }}>
          {news[`title_${language}`] || news.title_tr}
        </h1>

        <p
          style={{
            fontSize: "18px",
            lineHeight: "1.8",
            whiteSpace: "pre-line",
          }}
        >
          {news[`content_${language}`] || news.content_tr}
        </p>
      </div>
    </main>
  );
}
