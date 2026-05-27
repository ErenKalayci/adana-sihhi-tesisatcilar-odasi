import styles from "./MobileMenu.module.css";

export default function MobileMenu({ isOpen, navigation, language }) {
  if (!isOpen) return null;

  return (
    <div className={styles.mobileMenu}>
      {navigation.map((item, index) => (
        <a key={index} href={item.href}>
          {item[language]}
        </a>
      ))}
    </div>
  );
}
