import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import styles from './HeaderForRest.module.css';

function HeaderForRest() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.title}>
        <Link  href="/">
          Algolizer
        </Link>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.menu}>
          <li className={styles.menuItem}>
            <Link href='/'>
              Home
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link href='../algorithms-catagory/algorithms'>
              Algorithms
            </Link>
          </li>
        </ul>
        <div className={styles.icons}>
          <button className={styles.searchIcon} onClick={toggleSearch}>
            <Image src="/search-svgrepo-com 1.png" alt="Search Icon" width={20} height={20} />
          </button>
          <div className={isSearchOpen ? styles.searchBarOpen : styles.searchBarClosed}>
            <input type="text" placeholder="Search..." />
            <button onClick={toggleSearch}>Close</button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default HeaderForRest;
