import React, { useEffect, useState } from "react";

export default function DataFetcher() {
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch('https://google.com')
            .then(response => response.json())
            .then(result => setData(result))
            .catch(error => console.error("error fetching data:", error));
    }, [])

    if (!data) return <div>Loading...</div>;
    return <div>{JSON.stringify(data)}</div>
}