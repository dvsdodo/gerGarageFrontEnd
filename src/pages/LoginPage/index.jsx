import React, { useState, useContext } from "react";
import { AuthContext } from "../../contexts/auth";

import "./styles.css";

const LoginPage = () => {
    const { authenticated, login } = useContext(AuthContext);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        
        e.preventDefault();
        console.log("submit", { username, password });
        login(username, password);
    };

    return (
        <div id="login">
            <h1 className="title">Login</h1>
            <p>{String(authenticated)}</p>
            <form className="form" onSubmit={handleSubmit}>
                <div className="field">
                    <label htmlFor="username">User name</label>
                    <input type="username" 
                    name="username" 
                    id="username" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="field">
                    <label htmlFor="password">Senha</label>
                    <input type="password" 
                    name="password" 
                    id="password"
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className="actions">
                    <button type="submit">Enter</button>
                </div>
                <div className="text-center">
                    <span className="txt1">Do you already have an account? </span>
                    <a href="/createUser" className="txt2">Create account.</a>
                </div>
            </form>
        </div>
    );
};

export default LoginPage