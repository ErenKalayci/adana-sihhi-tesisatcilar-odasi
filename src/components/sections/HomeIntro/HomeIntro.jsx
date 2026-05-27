"use client";

import styles from "./HomeIntro.module.css";

import { homeIntroData } from "@/data/homeIntro";
import { useLanguage } from "@/context/LanguageContext";

export default function HomeIntro() {
  const { language } = useLanguage();

  return (
    <section className={styles.homeIntro}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.sliderBox}>
            <div className={styles.sliderContent}>
              <h1>{homeIntroData.title[language]}</h1>

              <p>{homeIntroData.description[language]}</p>
            </div>
          </div>

          <aside className={styles.sideBox}>
            <h3>{homeIntroData.presidentTitle[language]}</h3>

            <p>{homeIntroData.presidentDescription[language]}</p>

            <button>{homeIntroData.button[language]}</button>
          </aside>
        </div>
      </div>
    </section>
  );
}
