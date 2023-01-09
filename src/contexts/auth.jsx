import React, { useState, useEffect, createContext } from "react";

import { useNavigate } from "react-router-dom";

import { api, createBooking, createSession, createUser, createVehicle } from "../services/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const recoveredUser = localStorage.getItem("user");
        const token = localStorage.getItem("token");

        if (recoveredUser) {
            setUser(JSON.parse(recoveredUser));
            api.defaults.headers.Authorization = `Bearer ${token}`;           
        }
        setLoading(false);
    }, []);
    
    const login = async (username, password) => {

        const response = await createSession(username, password);
        
        console.log("login", response.data);

        const loggedUser = response.data.user;
        const token = response.data.token;
        
        localStorage.setItem("user", JSON.stringify(loggedUser.id_user));
        localStorage.setItem("name", JSON.stringify(loggedUser.name));
        localStorage.setItem("admin", JSON.stringify(loggedUser.is_admin));
        localStorage.setItem("token", token);

        api.defaults.headers.Authorization = `Bearer ${token}`;

        setUser(loggedUser);

        
       // if (user.is_admin === 0) {
            navigate("/");
       // } else {
       //     navigate("/admin")
        //}
        

        /*if (response.data.length === 0) {
            console.log("User not found")
        } else {
            localStorage.setItem("user", JSON.stringify(loggedUser));
            setUser(loggedUser);
            navigate("/");
            console.log("User has found")
        }*/
    };

    const logout = () => {
        console.log("logout");
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        api.defaults.headers.Authorization = null;
        setUser(null);
        navigate("/login");
    };

    const newUser = async (name, phone_number, username, password) => {
        const response = await createUser(name, phone_number, username, password);
        console.log(response.data);
        //const newUsercreated = response.data;

        //localStorage.setItem("user",JSON.stringify(newUsercreated));
        //setUser(newUsercreated);
       //navigate("/");
    };

    const newVehicle = async (id_user, id_make, id_engine_type, vehicle_comment, vehicle_licence) => {
        const response = await createVehicle(id_user, id_make, id_engine_type, vehicle_comment, vehicle_licence);
        console.log(response.data);
    };

    const newBooking = async (id_vehicle, id_status, date, id_booking_service, id_slots) => {
        const response = await createBooking(id_vehicle, id_status, date, id_booking_service, id_slots);
        console.log(response.data);
    };

    return (
        <AuthContext.Provider value={{ authenticated: !!user, user, loading,login, logout, newUser, newVehicle,newBooking }}>
            { children }
        </AuthContext.Provider>
    )
}