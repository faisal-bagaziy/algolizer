import Link from 'next/link';
import styles from './ContentSortingAlgorithms.module.css';
import Card from '../card/card';

function ContentSortingAlgorithms() {
    return (
        <section className={styles.section} id='Algorithms' >
             <div className={styles.container}>
                <h1 className={styles.title}>Sorting Algorithms</h1>
                <div className={styles.cardsContainer}>
                     <Link href="/">
                        <Card title="Bubble Sort" description="Repeatedly steps through the list to be sorted, compares each pair of adjacent items and swaps them if they are in the wrong order." icon="/sort.svg" width={100} height={100} />
                    </Link>
                    <Link href="/">
                        <Card title="Selection Sort" description="Repeatedly finding the minimum element from the unsorted part of the list and swapping it with the first element of the unsorted part." icon="/sort.svg" width={100} height={100} />
                    </Link>
                    <Link href="/">
                        <Card title="Insertion Sort" description="Repeatedly taking an unsorted element and inserting it into its correct position in the sorted part of the list." icon="/sort.svg" width={100} height={100} />
                    </Link>
                    <Link href="/">
                        <Card title="Merge Sort" description="dividing the input list into two halves, sorting each half recursively using Merge Sort, and then merging the two sorted halves back together." icon="/sort.svg" width={100} height={100} />
                    </Link>
                    <Link href="/">
                        <Card title="Heap Sort" description=" building a binary heap data structure from the input list and repeatedly extracting the maximum element from the heap and inserting it into the sorted part of the list." icon="/sort.svg" width={100} height={100} />
                    </Link>
                </div>
             </div>
        </section>
    );
}

export default ContentSortingAlgorithms;
