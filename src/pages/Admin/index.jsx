import Menu from "../../Componentes/Menu";
import "./styles.css";

function Admin() {
    return (
        <div >
            <Menu />
            <div className="container-barder">
                <div className="border">
                    <div className="admin_container">
                        <h1>Admin Page</h1>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Admin;