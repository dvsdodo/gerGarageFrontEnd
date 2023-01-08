import BookingForm from "../../Componentes/BookingForm";
import Menu from "../../Componentes/Menu";
import "./styles.css";

function Booking () {
    return(
        <div>
            <Menu />
            <div className="container-barder">
                <div className="border">
                    <div className="booking_container">
                        <h1>New Booking</h1>
                        <p>BOOKING</p>
                        <BookingForm btnText="Booking"/>
                    </div>
                </div>
            </div>
        </div>
    )
    
};

export default Booking;