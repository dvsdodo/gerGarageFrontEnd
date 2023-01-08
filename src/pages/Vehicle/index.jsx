import Menu from "../../Componentes/Menu";
import VehicleForm from "../../Componentes/VehicleForm";
import "./styles.css";

function Vehicle() {
    return (
        <div >
            <Menu />
            <div className="container-barder">
                <div className="border">
                    <div className="vehicle_container">
                        <h1>New Vehicle</h1>
                        <p>Create a new Vehicle</p>
                        <VehicleForm btnText="Create Vehicle" />
                    </div>
                </div>
            </div>
        </div>
    )

};

export default Vehicle;