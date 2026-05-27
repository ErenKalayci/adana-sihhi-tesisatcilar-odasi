"use client";

import styles from "./Footer.module.css";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

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
            <h3 className={styles.bigTitle}>{footerData.title[language]}</h3>
            <p>{footerData.description[language]}</p>
          </div>

          <div>
            <h4>{footerData.menuTitle[language]}</h4>

            <div className={styles.menuLinks}>
              {navigation.map((item, index) => (
                <a key={index} href={item.href}>
                  {item[language]}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className={styles.contactTop}>
              <h4>{footerData.contactTitle[language]}</h4>
            </div>

            <p>{footerData.address[language]}</p>
            <p>
              Telefon:
              <a className={styles.phoneLink} href="tel:+903223652025">
                0322 365 20 25
              </a>
            </p>

            <p>
              E-posta: <br />
              Adanatesisat_Dogalgaz_Gunesenerji_Esnafodasi@hotmail.com
            </p>

            <p>
              E-posta: <br />
              astdkgeieso@gmail.com
            </p>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© 2026 {footerData.copyright[language]}</p>

          <div className={styles.bottomSocials}>
            <a href="https://www.facebook.com/astdkgeieso/">
              <FaFacebookF />
            </a>

            <a href="#">
              <FaInstagram />
            </a>

            <a href="#">
              <FaXTwitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
