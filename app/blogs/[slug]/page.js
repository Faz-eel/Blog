import { getBlogBySlug } from "@/lib/getBlogs";
import BlogDetails from "@/components/blogDetails";

export default async function BlogPage({ params }) {
    const { slug } = await params;
    const { frontmatter, content } = getBlogBySlug(slug);

    return <BlogDetails frontmatter={frontmatter} content={content} />;
}
