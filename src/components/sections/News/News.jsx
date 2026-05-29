"use client";

import Link from "next/link";

import { useLanguage } from "@/context/LanguageContext";
import styles from "./News.module.css";
import { newsData, newsSectionData } from "@/data/news";

export default function News() {
  const { language } = useLanguage();

  return (
    <section className={styles.news}>
      <div className="container">
        <div className={styles.top}>
          <h2>{newsSectionData.title[language]}</h2>

          <Link href="/haberler">{newsSectionData.button[language]}</Link>
        </div>

        <div className={styles.grid}>
          {newsData.map((item) => (
            <Link
              key={item.id}
              href={`/haberler/${item.id}`}
              className={styles.card}
            >
              <div
                className={styles.image}
                style={{
                  backgroundImage: `url(${item.image})`,
                }}
              ></div>

              <div className={styles.content}>
                <span>{item.date}</span>

                <h3>{item.title[language]}</h3>

                <p>{item.description[language]}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
