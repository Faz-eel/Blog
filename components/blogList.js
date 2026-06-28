import BlogItem from './blogItem';
import styles from './blogList.module.css';
import { getBlogs, getLatestBlogs } from '@/lib/getBlogs';

export default async function BlogList({ number }) {
    const allBlogs = number === 'latest' ? await getLatestBlogs() : await getBlogs();
    
  return (
    <ul className={styles.list}>
      {allBlogs.map((blog) => (
        <li key={blog.slug}>
          <BlogItem {...blog} />
        </li>
      ))}
    </ul>
  );
}
