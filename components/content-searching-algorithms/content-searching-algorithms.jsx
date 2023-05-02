import Link from 'next/link';
import styles from '../content-sorting-algorithms/ContentSortingAlgorithms.module.css';
import Card from '../card/card';

function ContentSearchingAlgorithms() {
    return (
        <section className={styles.section} id='Algorithms' >
             <div className={styles.container}>
                <h1 className={styles.title}>Sorting Algorithms</h1>
                <div className={styles.cardsContainer}>
                     <Link href="../searching-algorithm/dfs">
                        <Card title="Depth First Search" description="exploring as far as possible along each branch before backtracking." icon="/search.svg" width={100} height={100} />
                    </Link>
                     <Link href="../searching-algorithm/bfs">
                        <Card title="Breadth First Search" description="exploring all the vertices at each level of the graph before moving on to the next level." icon="/search.svg" width={100} height={100} />
                    </Link>
                     <Link href="/">
                        <Card title="Unified Cost Search" description="exploring the graph in increasing order of path cost." icon="/search.svg" width={100} height={100} />
                    </Link>
                     <Link href="/">
                        <Card title="Greedy Best First Search" description="exploring the graph in the order of the heuristic value of the nodes." icon="/search.svg" width={100} height={100} />
                    </Link>
                     <Link href="/">
                        <Card title="A Star" description="explores the nodes that are estimated to be closest to the goal node." icon="/search.svg" width={100} height={100} />
                    </Link>
                </div>
             </div>
        </section>
    );
}

export default ContentSearchingAlgorithms;
