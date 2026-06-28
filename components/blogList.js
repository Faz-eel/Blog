import BlogItem from './blogItem';
import styles from './blogList.module.css';
import { getBlogs } from '@/lib/getBlogs';

export default async function BlogList() {
    const allBlogs = await getBlogs();
    
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
