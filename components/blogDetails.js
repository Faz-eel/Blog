import { MDXRemote } from 'next-mdx-remote/rsc';
import styles from './blogDetails.module.css';

export default function BlogDetails({ frontmatter, content }) {
    const { title, date, readingTime, tag, author } = frontmatter;

    return (
        <article className={styles.article}>
            <header className={styles.header}>
                <span className={styles.tag}>{tag}</span>
                <h1 className={styles.title}>{title}</h1>
                <div className={styles.meta}>
                    <span className={styles.author}>{author}</span>
                    <span className={styles.dot}>·</span>
                    <span>{date}</span>
                    <span className={styles.dot}>·</span>
                    <span>{readingTime} min read</span>
                </div>
            </header>
            <div className={styles.body}>
                <MDXRemote source={content} />
            </div>
        </article>
    );
}
