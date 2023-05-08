import { Link } from 'react-scroll/modules';
import Image from 'next/image';
import { useState } from 'react';
import styles from './Header.module.css';

function Header() {
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
            <Link activeClass='active' to='Algorithms' spy={true} smooth={true} offset={50} duration={500}>
              Algorithms
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link activeClass='active' to='Whyus' spy={true} smooth={true} offset={50} duration={500}>
              Why Us
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link activeClass='active' to='About' spy={true} smooth={true} offset={50} duration={500}>
              About
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link activeClass='active' to='HowItWorks' spy={true} smooth={true} offset={50} duration={500}>
              How It Works
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

export default Header;
