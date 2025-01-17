import Image from "next/image";
import styles from "./styles/header.module.scss";

export default function Header({ }) {
    return <header className={styles.header}>
        <h2>Erik Halenkamp</h2>
        <h4>About</h4>
        <h4>Projects</h4>
        <div>
            <a href="https://github.com/ewhalenkamp" target="_blank" rel="noopener noreferrer"><Image src="/img/github-icon.png" alt="GitHub" width={30} height={30} className={styles.header_img} /></a>
            <a href="https://www.linkedin.com/in/erik-h-4b49451a6/" target="_blank" rel="noopener noreferrer"><Image src="/img/linkedin-icon.png" alt="LinkedIn" width={30} height={30} className={styles.header_img} /></a>
        </div>
    </header>
}