import React, { useState, useEffect } from "react";

export default function DebouncedSearch() {
    const [query, setQuery] = useState('')
    const [results, setResults] = useState([])
    useEffect(() => {
        const debounceTimeout = setTimeout(() => {
            if (query) {
                fetch(`https://api.example.com/search?q=${query}`)
                    .then(response => response.json())
                    .then(data => setResults(data))
                    .catch(error => console.error('Error searching:', error));
            }
        }, 300);


        return () => clearTimeout(debounceTimeout);
    }, [query])

    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Search..."
            />
            <ul>
                {results.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    )
}