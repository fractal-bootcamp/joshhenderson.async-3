import React, { useState, useEffect } from "react";

export default function AsyncCounter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let isMounted = true;
        const intervalId = setInterval(() => {
            if (isMounted) {
                setCount(prevCount => prevCount + 1);
            }
        }, 1000);

        return () => {
            isMounted = false;
            clearInterval(intervalId);
        };
    }, [])

    return <div> Count: {count}</div>;
}