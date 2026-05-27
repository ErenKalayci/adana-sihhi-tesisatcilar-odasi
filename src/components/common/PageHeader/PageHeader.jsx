import styles from "./PageHeader.module.css";

export default function PageHeader({ title, subtitle }) {
  return (
    <section className={styles.pageHeader}>
      <div className="container">
        <div className={styles.content}>
          <h1>{title}</h1>

          <p>Ana Sayfa / {subtitle}</p>
        </div>
      </div>
    </section>
  );
}
