import Link from 'next/link';
import styles from './Navbar.module.css'; // Import CSS Module for styling

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}><Link href="/">Home</Link></li>
        <li className={styles.navItem}><Link href="/about">About</Link></li>
        <li className={styles.navItem}><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
