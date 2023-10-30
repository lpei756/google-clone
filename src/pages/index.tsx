import React from "react";
import styles from "./index.module.css";
import { useRouter } from 'next/router';
import Script from 'next/script'; // 导入Script组件

export default function Home() {
    const [searchTerm, setSearchTerm] = React.useState('');
    const router = useRouter();

    const handleSearch = () => {
        router.push(`/search?q=${searchTerm}`);
    };

    return (
        <div className={styles.container}>
            <img src="/images/googlelogo_color.png" alt="Google Logo" className={styles.logo} />

            <input
                type="text"
                className={styles.searchInput}
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            <button onClick={handleSearch} className={styles.searchButton}>
                Google Search
            </button>

            {/* 使用next/script代替直接的<script>标签 */}
            <Script src="https://cse.google.com/cse.js?cx=e2797d1cfb2c9452b" strategy="afterInteractive" />
            <div className="gcse-search"></div>
        </div>
    );
}
