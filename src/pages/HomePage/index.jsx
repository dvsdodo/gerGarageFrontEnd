import React, { useEffect, useState } from "react";
//import Footer from "../../Componentes/Footer";
import Menu from "../../Componentes/Menu";

import { getUsers } from "../../services/api";



const HomePage = () => {
    
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    

    

    useEffect(() => {
        (async () => {
            const response = await getUsers();
            setUsers(response.data.result);
            setLoading(false);
        })();
    }, []);

    

    if (loading) {
        return <div className="loading">Loading...</div>;
    };

    return (
        <div>
            <Menu />

            <ul>
                {
                    users.map((user) => (
                        <li key={user.id_user}>
                            {user.id_user} - {user.name} - {user.username}
                        </li>
                    ))
                }
            </ul>
            
        </div>

    );

    /*return (
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
    )*/
};

export default HomePage