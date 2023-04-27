import Image from 'next/image';
import styles from './ContentAboutUsSection.module.css';

function ContentAboutUsSection() {
  return (
    <section className={styles.hero} id='About'>
      <div className={styles.content}>
        <h1>About Us</h1>
        <p>“Our mission is to help  you to unlock your potential and have deep<br/>understanding of how the algorithms works -- and do it all with a single click”</p>
      </div>
      <div className={styles.imageContainer}>
      <Image src="/sort.svg" alt="Algolizer Logo" width={500} height={500} />
      </div>
    </section>
  );
}

export default ContentAboutUsSection;
