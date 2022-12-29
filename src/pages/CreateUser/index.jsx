import React, { useState, useContext} from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";

const CreateUser = () => {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [phoneNumber, setPhonenumber] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleBack = () => {
        navigate("/login");
    };

    const handleCreate = (e) => {
        e.preventDefault();
        console.log("submit", { name, phoneNumber, username, password });
        login(name, phoneNumber, username, password);
    };

    return (
        <div id="createUser">
            <h1 className="title">Create User</h1>
            <form className="form" onSubmit={handleCreate}>
            <div className="field">
                    <label htmlFor="name">Name</label>
                    <input type="name" name="name" id="name" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className="field">
                    <label htmlFor="phoneNumber">Phone number</label>
                    <input type="phoneNumber" name="phoneNumber" id="phoneNumber" 
                    value={phoneNumber}
                    onChange={(e) => setPhonenumber(e.target.value)}/>
                </div>
                <div className="field">
                    <label htmlFor="username">User name</label>
                    <input type="username" name="username" id="username" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}/>
                </div>
                <div className="field">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}/>
                </div>
            </form>
            <div className="actions">
                <button type="submit">Create</button>
            </div>
            <div className="actions">
                <button onClick={handleBack}>Back</button>
            </div>
        </div>
    );
};

export default CreateUser