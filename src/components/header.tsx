import Image from "next/image";
import styles from "./styles/header.module.scss";
import useScrollDirection from "hooks/useScrollDirection";
import { useEffect } from "react";

export default function Header({ }) {
    // stateful value from custom hook
    const scrollDirection = useScrollDirection();

    return <header className={`${styles.header}${scrollDirection === "down" ? ` ${styles.hidden}` : ""}`}>
        <div className={styles.header_inner}><h2>Erik Halenkamp</h2>
            <a href="#about"><h4>About</h4></a>
            <a href="#projects"><h4>Projects</h4></a>
        </div>
        <div>
            <a href="https://github.com/ewhalenkamp" target="_blank" rel="noopener noreferrer"><Image src="/img/github-icon.png" alt="GitHub" width={30} height={30} className={styles.header_img} /></a>
            <a href="https://www.linkedin.com/in/erik-h-4b49451a6/" target="_blank" rel="noopener noreferrer"><Image src="/img/linkedin-icon.png" alt="LinkedIn" width={30} height={30} className={styles.header_img} /></a>
        </div>
    </header >
}