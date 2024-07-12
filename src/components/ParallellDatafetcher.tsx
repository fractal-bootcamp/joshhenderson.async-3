import React, { useState, useEffect } from "react";

export default function ParallelDataFetcher() {
    const [userData, setUserData] = useState(null)
    const [postsData, setPostsData] = useState(null)

    useEffect(() => {
        async function fetchData() {
            try {
                const [userResponse, postsReseponse] = await Promise.all([
                    fetch('https://api.example.com/users'),
                    fetch('https://api.example.com/posts')
                ]);
                const userData = await userResponse.json();
                const postsData = await postsReseponse.json();
                setUserData(userData);
                setPostsData(postsData);
            } catch (error) {
                console.log.error('error fetching data:', error);
            }
        }
        fetchData();
    }, [])

    if (!userData || !postsData) return <div>Loading...</div>;
    return (
        <div>
            <h2>User: {userData.name}</h2>
            <h3>Posts:</h3>
            <ul>
                {PostsData.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
}