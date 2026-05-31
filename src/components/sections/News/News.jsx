"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { useLanguage } from "@/context/LanguageContext";
import styles from "./News.module.css";
import { newsSectionData } from "@/data/news";
import { supabase } from "@/lib/supabase";

export default function News() {
  const { language } = useLanguage();
  const [news, setNews] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      const { data, error } = await supabase
        .from("news")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(3);

      if (!error) {
        setNews(data);
      }
    };

    getNews();
  }, []);

  return (
    <section className={styles.news}>
      <div className="container">
        <div className={styles.top}>
          <h2>{newsSectionData.title[language]}</h2>

          <Link href="/haberler">{newsSectionData.button[language]}</Link>
        </div>

        <div className={styles.grid}>
          {news.map((item) => (
            <Link
              key={item.id}
              href={`/haberler/${item.id}`}
              className={styles.card}
            >
              <div
                className={styles.image}
                style={{
                  backgroundImage: `url(${
                    item.image_url || "/images/news/default.jpg"
                  })`,
                }}
              ></div>

              <div className={styles.content}>
                <span>
                  {new Date(item.created_at).toLocaleDateString("tr-TR")}
                </span>

                <h3>{item[`title_${language}`] || item.title_tr}</h3>

                <p>{item[`description_${language}`] || item.description_tr}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
