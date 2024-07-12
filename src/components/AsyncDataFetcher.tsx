import React, { useEffect, useState } from "react";

export default function AsyncDataFetcher() {
    const [data, setData] = useState(null)

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('https://google.com');
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error("error fetching data:", error);
            }
        }
        fetchData();
    }, [])
    if (!data) return <div>Loading...</div>;
    return <div>{JSON.stringify(data)}</div>
}