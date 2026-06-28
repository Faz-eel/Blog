import Link from 'next/link';
import styles from './blogItem.module.css';

export default function BlogItem({ title, date, readingTime, tag, author, slug }) {
  return (
    <Link href={`/blogs/${slug}`} className={styles.card}>
      <span className={styles.tag}>{tag}</span>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.meta}>
        <span className={styles.author}>{author}</span>
        <span className={styles.dot}>·</span>
        <span>{date}</span>
        <span className={styles.dot}>·</span>
        <span>{readingTime} min read</span>
      </div>
    </Link>
  );
}
