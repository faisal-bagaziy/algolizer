import Link from 'next/link';
import styles from '../content-sorting-algorithms/ContentSortingAlgorithms.module.css';
import Card from '../card/card';

function ContentLearningAlgorithms() {
    return (
        <section className={styles.section} id='Algorithms' >
             <div className={styles.container}>
                <h1 className={styles.title}>Sorting Algorithms</h1>
                <div className={styles.cardsContainer}>
                     <Link href="/">
                        <Card title="ID3 Decision Tree" description="partitioning the training data into subsets based on the values of the features, and selecting the feature that provides the most information gain at each step." icon="/learn.svg" width={100} height={100} />
                    </Link>
                </div>
             </div>
        </section>
    );
}

export default ContentLearningAlgorithms;
