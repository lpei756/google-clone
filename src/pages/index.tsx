import React from "react";
import styles from "./index.module.css";
import Link from "next/link";

export default function Home() {
    return (
        <div className={styles.container}>
            <img src="/images/googlelogo_color.png" alt="Google Logo" className={styles.logo} />

            <input type="text" className={styles.searchInput} placeholder="Search..."/>

            <Link href="/search" className={styles.searchButton}>
                Google Search
            </Link>
        </div>
    );
}
