import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const blogsDir = path.join(process.cwd(), 'content/blogs');

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getBlogs() {
  await delay(5000);
  const files = fs.readdirSync(blogsDir);

  return files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const source = fs.readFileSync(path.join(blogsDir, file), 'utf8');
      const { data } = matter(source);
      return data;
    });
}

export function getBlogBySlug(slug) {
  const filePath = path.join(blogsDir, `${slug}.mdx`);
  const source = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(source);
  return { frontmatter: data, content };
}
