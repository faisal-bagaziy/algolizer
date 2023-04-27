import styles from './Footer.module.css';

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h2 className={styles.title}>Algolizer</h2>
        <p className={styles.description}>
          this is a powerful tool to learn algorithms.<br/>
          compatible with different type of devices.
        </p>
        <p className={styles.description}>
            ©2023 - Algolizer  |   All right reserved
        </p>
      </div>
      <div className={styles.right}>
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Products</h3>
          <ul className={styles.sectionList}>
            <li className={styles.sectionItem}>How it works</li>
            <li className={styles.sectionItem}>Features</li>
            <li className={styles.sectionItem}>Algorithms</li>
          </ul>
        </div>
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>About</h3>
          <ul className={styles.sectionList}>
            <li className={styles.sectionItem}>About Us</li>
          </ul>
        </div>
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Contact</h3>
          <ul className={styles.sectionList}>
            <li className={styles.sectionItem}>Algolizer@gmail.com</li>

          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
