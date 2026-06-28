import BlogList from "@/components/blogList";
import { Suspense } from "react";
import styles from "./blogs.module.css";

export default function BlogsPage() {
    return (
        <div className={styles.page}>
            <header className={styles.header}>
                <h1 className={styles.title}>All Blogs</h1>
                <p className={styles.subtitle}>Explore a list of blogs from me</p>
            </header>
            <main>
                <Suspense fallback={<p className={styles.fallback}>Loading blogs...</p>}>
                    <BlogList number='all'/>
                </Suspense>
            </main>
        </div>
    )
}
