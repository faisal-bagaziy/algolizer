import Link from "next/link";
import Image from "next/image";
import styles from './ByStudentOf.module.css';

function ByStudentOf() {
    return (
        <div className={styles.clge}>
        <h2>By Students Of</h2>
        <Image
        src="/jicLogo.png"
        alt="college logo"
        width={100} 
        height={100}
        />
        </div>
    );
}

export default ByStudentOf;
