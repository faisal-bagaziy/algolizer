import Link from 'next/link';
import Image from 'next/image';
import styles from './HeroSection.module.css';

function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1>Welcome to your<br/> new algorithm<br/> visualizer</h1>
<p>If you’re looking for the state of the art Algorithm visualizer look no further<br/> Algolizer is for you!</p>
        <Link href="/algorithms">
         <p className={styles.button}>Start Now!</p>
        </Link>
      </div>
      <div className={styles.imageContainer}>
      <Image src="/HeroPic.svg" alt="Algolizer Logo" width={500} height={500} />
      </div>
    </section>
  );
}

export default HeroSection;
