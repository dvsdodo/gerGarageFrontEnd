import React, { useState, useContext } from "react";
import SubmitButton from "../../Componentes/form/submitButton";
import { AuthContext } from "../../contexts/auth";

import "./styles.css";

const LoginPage = () => {
    const { login } = useContext(AuthContext);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {

        e.preventDefault();
        console.log("submit", { username, password });
        login(username, password);
    };

    return (
        <div className="container-barder">
            <div className="border">
                <div className="login_container">
                    <h1 className="title">Login</h1>

                    <form className="form" onSubmit={handleSubmit} >
                        <div className="field">
                            <label htmlFor="username">User name</label>
                            <input type="username"
                                name="username"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div className="field">
                            <label htmlFor="password">Password</label>
                            <input type="password"
                                name="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="actions">
                            <SubmitButton text="Enter" type="submit" />
                        </div>
                        <div className="text-center">
                            <span className="txt1">Do you already have an account? </span>
                            <a href="/createUser" className="txt2">Create account.</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage