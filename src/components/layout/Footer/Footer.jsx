"use client";

import styles from "./Footer.module.css";

import { useLanguage } from "@/context/LanguageContext";
import { footerData } from "@/data/footer";
import { navigation } from "@/config/navigation";

export default function Footer() {
  const { language } = useLanguage();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div>
            <h3>{footerData.title[language]}</h3>

            <p>{footerData.description[language]}</p>
          </div>

          <div>
            <h4>{footerData.menuTitle[language]}</h4>

            {navigation.map((item, index) => (
              <a key={index} href={item.href}>
                {item[language]}
              </a>
            ))}
          </div>

          <div>
            <h4>{footerData.contactTitle[language]}</h4>

            <p>{footerData.address[language]}</p>

            <p>Telefon: 0322 000 00 00</p>

            <p>E-posta: info@ornekoda.org.tr</p>
          </div>
        </div>

        <div className={styles.bottom}>
          © 2026 {footerData.copyright[language]}
        </div>
      </div>
    </footer>
  );
}
