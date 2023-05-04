import styles from './Footer.module.css';

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h2 className={styles.title}>Algolizer</h2>
        <p className={styles.description}>
          This is a powerful tool to learn algorithms.<br/><br/>
        </p>
        <p className={styles.description}>
            ©2023 - Algolizer  
        </p>
      </div>
    </div>
  );
}

export default Footer;
