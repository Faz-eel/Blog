import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const blogsDir = path.join(process.cwd(), 'content/blogs');


export async function getBlogs() {
  const files = fs.readdirSync(blogsDir);

  return files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const source = fs.readFileSync(path.join(blogsDir, file), 'utf8');
      const { data } = matter(source);
      return data;
    });
}

export async function getLatestBlogs() {
  const blogs = await getBlogs();
  return blogs
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);
}

export function getBlogBySlug(slug) {
  const filePath = path.join(blogsDir, `${slug}.mdx`);
  const source = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(source);
  return { frontmatter: data, content };
}
