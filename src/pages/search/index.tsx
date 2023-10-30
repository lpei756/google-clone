import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import styles from "./search.module.css";

export default function SearchPage() {
    const router = useRouter();
    const [searchResults, setSearchResults] = useState([]);
    const query = router.query.q;

    useEffect(() => {
        if (query) {
            fetch(`/api/query?q=${query}`)
                .then(response => response.json())
                .then(data => {
                    if (data && Array.isArray(data.items)) {
                        setSearchResults(data.items);
                    } else {
                        console.error("Unexpected API response structure:", data);
                    }
                })
                .catch(error => {
                    console.error("Error fetching search results:", error);
                });
        }
    }, [query]);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Search results for: {query}</h1>

            <ul className={styles.resultsList}>
                {Array.isArray(searchResults) && searchResults.map((result, index) => (
                    <li key={index} className={styles.resultItem}>
                        <a href={result.link} className={styles.resultLink}>
                            {result.title}
                        </a>
                        <p className={styles.resultDescription}>
                            {result.snippet}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
