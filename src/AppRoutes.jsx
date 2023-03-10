import React, {useContext} from "react";

import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from "react-router-dom";

import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import CreateUserPage from './pages/CreateUser';

import { AuthProvider, AuthContext } from "./contexts/auth";
import Vehicle from "./pages/Vehicle";
import Booking from "./pages/Booking";
import Admin from "./pages/Admin";
import Invoice from "./pages/Invoice";


const AppRoutes = () => {

    const Private = ({ children }) => {
        const { authenticated, loading } = useContext(AuthContext);
        

        if (loading) {
            return <div className="loading">Loading...</div>
        }

        if (!authenticated) {
            return <Navigate to="/login"/>;
        }

        return children;
    };

    const AdminPrivate = ({ children }) => {
        const { authenticated, loading, user } = useContext(AuthContext);
        console.log(user);
        

        if (loading) {
            return <div className="loading">Loading...</div>
        }

        if (!authenticated) {
            return <Navigate to="/login"/>;
        }
        if (user.is_admin === 0) {
            return <Navigate to="/"/>
        }

        return children;
    };

    return(
        <Router>
            <AuthProvider>
                <Routes>
                    <Route exact path="/login" element={<LoginPage />} />
                    <Route exact path="/" element={<Private><HomePage /></Private>} />
                    <Route exact path="/createUser" element={<CreateUserPage />} />
                    <Route exact path="/vehicle" element={<Vehicle />} />
                    <Route exact path="/booking" element={<Booking />} />
                    <Route exact path="/admin" element={<AdminPrivate><Admin /></AdminPrivate>} />
                    <Route exact path="/invoice" element={<Invoice />} />
                </Routes>
            </AuthProvider>
        </Router>
    )
}

export default AppRoutes;