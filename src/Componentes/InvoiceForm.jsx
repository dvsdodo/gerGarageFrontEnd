import "./InvoiceForm.css";
import { useEffect, useState } from "react";
import { getBooking, getBookingService, getMake, getVehicle } from "../services/api";
import SelectBooking from "./form/selectBooking";
import SelectVehicle from "./form/selectVehicle";

function InvoiceForm() {

    const name = localStorage.getItem("name");
    const phone_number = localStorage.getItem("phone_number");
    const id_user = localStorage.getItem("user");

    const [Booking, setBooking] = useState([]);
    const [Vehicle, setVehicle] = useState([]);
    const [Make, setMake] = useState([]);
    const [BookingService, setBookingService] = useState([]);
    const [BookingSelected, setBookingSelected] = useState([]);
    const [VehicleSelected, setVehicleSelected] = useState([]);
    const [MakeSelected, setMakeSelected] = useState();
    const [ServiceSelected, setServiceSelected] = useState();
    //const [id_booking, setIdBooking] = useState(0);
    const [id_vehicle, setIdVehicle] = useState(0);

    useEffect(() => {
        (async () => {
            const response = await getBooking();
            setBooking(response.data.result);
        })();
    }, []);

    useEffect(() => {
        (async () => {
            const response = await getVehicle();
            setVehicle(response.data.result);
        })();
    }, []);

    useEffect(() => {
        (async () => {
            const response = await getMake();
            setMake(response.data.result);
        })();
    }, []);

    useEffect(() => {
        (async () => {
            const response = await getBookingService();
            setBookingService(response.data.result);
        })();
    }, []);

    function handleBooking(e) {
        //setIdBooking(parseInt(e.target.value))
        setBookingSelected({
            ...BookingSelected,
            Booking: {
                id_vehicle: e.target.value,
                id_booking: e.target.options[e.target.selectedIndex].text,
                id_booking_service: e.target.options[e.target.selectedIndex].getAttribute('data_key')
            }
        });
        
    };

    function handleVehicle(e) {
        setIdVehicle(parseInt(e.target.value))
        setVehicleSelected({
            ...VehicleSelected,
            Vehicle: {
                id_vehicle: e.target.value,
                vehicle_licence: e.target.options[e.target.selectedIndex].text,
                id_make: e.target.options[e.target.selectedIndex].getAttribute('data_key')
            }
        });

    };

    function handleMake() {
        const Selected = Make.filter((option) => option.id_make === parseInt(VehicleSelected.Vehicle.id_make))
        setMakeSelected(Selected[0]);
        //console.log(Selected);
        
    };

    function handleService() {
        const Selected = BookingService.filter((option) => option.id_booking_service === parseInt(BookingSelected.Booking.id_booking_service))
        setServiceSelected(Selected[0]);
        console.log(Selected);
    };

    function handleClick() {
        
        handleMake();
        handleService();
    }

    return (
        <div>
            <div>
                <form className="form">
                    <SelectVehicle
                        name="id_vehicle"
                        text="Choose Your Vehicle Licence"
                        options={Vehicle}
                        user={parseInt(id_user)}
                        handleOnChange={handleVehicle}
                        value={VehicleSelected.Vehicle ? VehicleSelected.Vehicle.id_vehicle : ''}
                    />
                    <SelectBooking
                        name="id_booking"
                        text="Choose your Booking by ID"
                        options={Booking}
                        vehicle={parseInt(id_vehicle)}
                        handleOnChange={handleBooking}
                        value={BookingSelected.Booking ? BookingSelected.Booking.id_booking : ""}
                    />
                    <button className="view" onClick={handleClick} type="button">View</button>
                </form>
            </div>
            <div className="invoice-print">
                <h3>Your Invoice about Booking: {BookingSelected.Booking ? BookingSelected.Booking.id_booking : ""}</h3>
                <p>CUSTOMER: {name.split('"').join(" ")}</p>
                <p>Mob Phone: {phone_number.split('"').join(" ")}</p>
                <p> </p>
                <p>Vehicle: {MakeSelected ? MakeSelected.make_name : ""}</p>
                <p>Licence: {VehicleSelected.Vehicle ? VehicleSelected.Vehicle.vehicle_licence : ""}</p>
                <p>Service: {ServiceSelected ? ServiceSelected.booking_service_name : ""}</p>
                <p>------------------------------------</p>
                <h4>Total = </h4>
                <h2>{ServiceSelected ? ServiceSelected.booking_service_cost : ""}</h2>
            </div>
        </div>
    )

};

export default InvoiceForm;