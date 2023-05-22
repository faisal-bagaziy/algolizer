import Link from 'next/link';
import styles from './ContentAlgorithmSection.module.css';
import Card from '../card/card';

function ContentAlgorithmSection() {
  return (
    <section className={styles.section} id='Algorithms' >
      <div className={styles.container}>
        <h1 className={styles.title}>Algorithms</h1>
        <p className={styles.description}>Get started by choosing one of the following algorithm categories</p>
        <div className={styles.cardsContainer}>
            <Link href="../algorithms-catagory/sorting">
                 <Card title="Sorting" description="Sort a collection of values in a particular order." icon="/sort.svg" width={200} height={200} />
            </Link>
            <Link href="../algorithms-catagory/searching">
                 <Card title="Searching" description="Find a specific value in a collection of values." icon="/search.svg" width={200} height={200} />
            </Link>

        </div>
      </div>
    </section>
  );
}

export default ContentAlgorithmSection;
