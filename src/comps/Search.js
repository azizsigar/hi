import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Search() {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const id = "dadfdff5830f7d125e53";
        const secret = "161fc2ff787c6efb3f324d0346687659c98a6070";

        if (search) { // Arama terimi boş değilse API isteğini yap
            axios
                .get(`https://api.github.com/users/${search}?client_id=${id}&client_secret=${secret}&sort=created`)
                .then((res) => {
                    setUsers([res.data]);
                })
                .catch((err) => {
                    console.error("API isteği yanlisligi:", err);
                    setUsers([]);
                });
        } else {
            setUsers([]); 
        }
    }, [search]);

    return (
        <div>
            <h1>Github Search</h1>
            <label>Search:</label>
            <input
                name="search"
                value={search}
                
                onChange={(e) => setSearch(e.target.value)}
                placeholder="search important peoples"
            />

            <ul>
                {users.map((user) => (

                    <li key={user?.id}>

                        <img src={user?.avatar_url} alt={`${user?.login}'s avatar`} />
                        
                        <div className="data">
                        <p>user name: {user?.login}</p>
                        <p> github account
                            <a href={user.html_url} rel="" target="_blank"> 🔗 </a>
                        </p>
                        <p> About user: {user?.bio}</p>
                        <p> Followers: {user?.followers}</p>
                        <p> Followin': {user?.following}</p>
                        <p> Location: {user?.location}</p>
                        <p> Repos: {user?.public_repos}</p>

                        </div>
                    </li>
                ))}
            </ul>

        </div>
    )
}
