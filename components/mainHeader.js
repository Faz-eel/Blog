import Link from 'next/link';
import Image from 'next/image';
import styles from './mainHeader.module.css';

export default function MainHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image
          src="/next.svg"
          alt="Profile picture"
          width={48}
          height={48}
          className={styles.profilePic}
        />
      </div>
      <nav className={styles.nav}>
        <Link href="/" className={styles.navLink}>Home</Link>
        <Link href="/blogs" className={styles.navLink}>Blogs</Link>
        <Link href="/about" className={styles.navLink}>About</Link>
      </nav>
    </header>
  );
}
