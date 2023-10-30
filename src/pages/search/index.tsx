import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

const SearchPage: React.FunctionComponent = () => {
    const router = useRouter();
    const initialQuery = router.query.q as string || "";
    const [searchTerm, setSearchTerm] = useState<string>(initialQuery);
    const [results, setResults] = useState<any[]>([]);

    useEffect(() => {
        if (initialQuery) {
            fetchResults(initialQuery);
        }
    }, [initialQuery]);

    const fetchResults = async (query: string) => {
        try {
            const response = await fetch(`/api/query?q=${query}`);
            const data = await response.json();
            setResults(data.items || []);
        } catch (error) {
            console.error("Error fetching search results:", error);
        }
    };

    const handleSearch = () => {
        router.push(`/search?q=${searchTerm}`);
        fetchResults(searchTerm);
    };

    return (
        <div>
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search..."
            />
            <button onClick={handleSearch}>Search</button>

            <div>
                {results.map((result, index) => (
                    <div key={index}>
                        <h3>{result.title}</h3>
                        <p>{result.snippet}</p>
                        <a href={result.link} target="_blank" rel="noopener noreferrer">
                            View More
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearchPage;
