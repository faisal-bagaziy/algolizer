import Image from 'next/image';
import styles from './Card.module.css';

function Card({ title, description, icon, width, height }) {
  return (
    <div className={styles.card}>
      <Image src={icon} alt={title} className={styles.icon} width={width} height={height} />
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
    </div>
  );
}

export default Card;
