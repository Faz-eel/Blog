'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import styles from './mainHeader.module.css';

export default function MainHeader() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image
          src="/blog.png"
          alt="Profile picture"
          width={50}
          height={50}
          className={styles.profilePic}
        />
      </div>
      <nav className={styles.nav}>
        <Link href="/" className={`${styles.navLink} ${pathname === '/' ? styles.active : ''}`}>Home</Link>
        <Link href="/blogs" className={`${styles.navLink} ${pathname.startsWith('/blogs') ? styles.active : ''}`}>Blogs</Link>
        <Link href="/about" className={`${styles.navLink} ${pathname.startsWith('/about') ? styles.active : ''}`}>About</Link>
      </nav>
    </header>
  );
}
