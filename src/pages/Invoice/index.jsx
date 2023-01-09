import Menu from "../../Componentes/Menu";
import "./styles.css";

function Invoice() {
    return (
        <div >
            <Menu />
            <div className="container-barder">
                <div className="border">
                    <div className="invoice_container">
                        <h1>Invoice Page</h1>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Invoice;