import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.content}>
          <span className={styles.subtitle}>1967'DEN BUGÜNE</span>

          <h1>Adana Sıhhi Tesisatçılar Odası</h1>

          <p>
            Sıhhi tesisat, doğalgaz, kalorifer ve güneş enerjisi sektörlerinde
            üyelerimize güçlü, güvenilir ve kurumsal hizmet sunuyoruz.
          </p>

          <div className={styles.buttons}>
            <button className="btn btn-primary">Hakkımızda</button>

            <button className="btn btn-outline-light">İletişim</button>
          </div>
        </div>
      </div>
    </section>
  );
}
