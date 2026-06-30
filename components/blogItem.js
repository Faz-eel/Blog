import Link from 'next/link';
import Image from 'next/image';
import styles from './blogItem.module.css';

export default function BlogItem({ title, date, readingTime, tag, author, slug, coverImage }) {
  return (
    <Link href={`/blogs/${slug}`} className={styles.card}>
      {coverImage && (
        <div className={styles.imageWrapper}>
          <Image
            src={coverImage}
            alt={title}
            fill
            sizes="(max-width: 600px) 72px, 220px"
            className={styles.image}
          />
        </div>
      )}
      <div className={styles.content}>
        <span className={styles.tag}>{tag}</span>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.meta}>
          <span className={styles.author}>{author}</span>
          <span className={styles.dot}>·</span>
          <span>{date}</span>
          <span className={styles.dot}>·</span>
          <span>{readingTime} min read</span>
        </div>
      </div>
    </Link>
  );
}
