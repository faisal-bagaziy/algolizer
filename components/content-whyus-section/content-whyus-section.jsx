import styles from './ContentWhyUsSection.module.css';
import Card from '../card/card';

function ContentWhyUsSection() {
  return (
    <section className={styles.section} id='Whyus'>
      <div className={styles.container}>
        <h1 className={styles.title}>The most complete algorithm visualizer around</h1>
        <div className={styles.cardsContainer}>
          <Card title="Great for novice" description="Algolizer is great for novice users who just started learning how to code and want to expand their knowledge about algorithms." icon="/egg.svg" width={75} height={75}/>
          <Card title="Fast setup" description="Set up and start visualization within minutes." icon="/launch.svg" width={75} height={75} />
          <Card title="Great number of algorithms" description="Algolizer cover variety of important basic algorithms." icon="/infinity.svg" width={75} height={75} />
        </div>
      </div>
    </section>
  );
}

export default ContentWhyUsSection;
