"use client";

import { useState } from "react";
import Image from "next/image";

import styles from "./Header.module.css";

import { navigation } from "@/config/navigation";
import { languages } from "@/config/languages";
import { useLanguage } from "@/context/LanguageContext";
import MobileMenu from "@/components/layout/MobileMenu/MobileMenu";

export default function Header() {
  const { language, setLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.logoArea}>
            <Image
              src="/images/oda.png"
              alt="Logo"
              width={120}
              height={120}
              className={styles.logo}
            />
          </div>

          <nav className={styles.navbar}>
            {navigation.map((item, index) => (
              <a key={index} href={item.href}>
                {item[language]}
              </a>
            ))}
          </nav>

          <div className={styles.rightArea}>
            <div className={styles.languages}>
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={
                    language === lang.code ? styles.activeLanguage : ""
                  }
                >
                  <Image
                    src={lang.flag}
                    alt={lang.label || lang.code}
                    width={20}
                    height={20}
                  />
                </button>
              ))}
            </div>

            <button
              className={styles.menuButton}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              ☰
            </button>
          </div>
        </div>

        <MobileMenu
          isOpen={isMenuOpen}
          navigation={navigation}
          language={language}
        />
      </div>
    </header>
  );
}
