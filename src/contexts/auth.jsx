import React, { useState, useEffect, createContext } from "react";

import { useNavigate } from "react-router-dom";

import { createSession } from "../services/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const recoveredUser = localStorage.getItem("user");

        if (recoveredUser) {
            setUser(JSON.parse(recoveredUser));            
        }
        setLoading(false);
    }, []);

    const login = async (username, password) => {

        const response = await createSession(username, password);
        
        console.log("login", response.data);

        const loggedUser = response.data;

        

        if (response.data.length === 0) {
            console.log("User not found")
        } else {
            localStorage.setItem("user", JSON.stringify(loggedUser));
            setUser(loggedUser);
            navigate("/");
            console.log("User has found")
        }
    };

    const logout = () => {
        console.log("logout");
        localStorage.removeItem("user");
        setUser(null);
        navigate("/login");
    };

    return (
        <AuthContext.Provider value={{ authenticated: !!user, user, loading,login, logout }}>
            { children }
        </AuthContext.Provider>
    )
}