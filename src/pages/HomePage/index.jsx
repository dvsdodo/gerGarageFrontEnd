import React, { useEffect, useContext, useState } from "react";
import { AuthContext } from "../../contexts/auth";
import { getUsers } from "../../services/api";

const HomePage = () => {
    const { authenticated, logout } = useContext(AuthContext);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const response = await getUsers();
            setUsers(response.data.result);
            setLoading(false);
        })();
    }, []);

    const handleLogout = () => {
        logout();
    };

    if (loading) {
        return <div className="loading">Loading...</div>;
    };

    return (
        <>
            <h1>HomePage</h1>
            <p>{String(authenticated)}</p>
            <button onClick={handleLogout}>Logout</button>
            <ul>
                {
                    users.map((user) => (
                        <li key={user.id_user}>
                            {user.id_user} - {user.name} - {user.username}
                        </li>
                    ))
                }
            </ul>
        </>
    )
};

export default HomePage