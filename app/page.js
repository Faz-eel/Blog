import { Suspense } from "react";
import Link from "next/link";
import BlogList from "@/components/blogList";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <span className={styles.greeting}>Welcome</span>
        <h1 className={styles.title}>Fazil&apos;s Blog</h1>
        <p className={styles.subtitle}>
          Thoughts on web development, JavaScript, and building things for the web.
        </p>
        <Link href="/blogs" className={styles.cta}>Read all posts</Link>
      </header>
      <main>
        <h2 className={styles.sectionTitle}>Latest Posts</h2>
        <Suspense fallback={<p>Loading blogs...</p>}>
          <BlogList number="latest" />
        </Suspense>
      </main>
    </div>
  );
}
