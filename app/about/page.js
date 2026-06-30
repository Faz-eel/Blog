import Image from 'next/image';
import styles from './about.module.css';

export const metadata = { title: 'About' };

export default function AboutPage() {
    return (
        <div className={styles.page}>
            <header className={styles.header}>
                <div className={styles.imageWrapper}>
                    <Image
                        src="/others/about.jpg"
                        alt="Fazil Yiah"
                        fill
                        sizes="(max-width: 600px) 120px, 180px"
                        className={styles.image}
                    />
                </div>
                <div className={styles.intro}>
                    <span className={styles.greeting}>About me</span>
                    <h1 className={styles.name}>Fazil Yiah</h1>
                    <p className={styles.role}>Web Developer & Writer</p>
                </div>
            </header>
            <main className={styles.body}>
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Who I am</h2>
                    <p>Hi, I&apos;m Fazil — a web developer with a passion for building clean, fast, and user-friendly applications. I enjoy working across the stack but spend most of my time in the JavaScript ecosystem, particularly with React and Next.js.</p>
                </section>
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>What I write about</h2>
                    <p>This blog is where I share what I learn. You&apos;ll find posts on JavaScript, React, Next.js, CSS, Node.js, Git, and anything else I find interesting or useful in day-to-day development. I write the way I wish things had been explained to me when I was starting out.</p>
                </section>
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Get in touch</h2>
                    <p>Have a question, feedback, or just want to say hello? Feel free to reach out at <a href="mailto:yiahhuaru@gmail.com" className={styles.link}>yiahhuaru@gmail.com</a>.</p>
                </section>
            </main>
        </div>
    );
}
