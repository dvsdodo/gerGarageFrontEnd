import { Form, FormGroup, Input, Label } from "reactstrap";
import SubmitButton from "./form/submitButton";
import "./BookingForm.css";
import { useContext, useEffect, useState } from "react";
import { getBookingService, getSlots, getVehicle } from "../services/api";
import SelectBookingService from "./form/selectBookingService";
import SelectVehicle from "./form/selectVehicle";
import { AuthContext } from "../contexts/auth";
import SelectSlots from "./form/SelectSlots";

function BookingForm({ btnText }) {

    const id_user = localStorage.getItem("user");
    const [BookingService, setBookingService] = useState([]);
    const [Vehicle, setVehicle] = useState([]);
    const [BookingDate, setBookingDate] = useState([]);
    const [Slots, setSlots] = useState([]);
    const [ServiceSelected, setServiceSelected] = useState([]);
    const [VehicleSelected, setVehicleSelected] = useState([]);
    const [SlotsSelected, setSlotsSelected] = useState([]);

    const { newBooking } = useContext(AuthContext);
    const [id_booking_service, setIdBookingService] = useState(0);
    const [id_vehicle, setIdVehicle] = useState(0);
    const [id_status, setIdStatus] = useState(1);
    const [id_slots, setIdSlots] = useState(0);
    const [date, setDate] = useState("");

    useEffect(() => {
        (async () => {
            const response = await getBookingService();
            setBookingService(response.data.result);
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
            const response = await getSlots();
            setSlots(response.data.result);
        })();
    }, []);

    function handleDate(e) {
        setDate(e.target.value)
        setBookingDate({ ...BookingDate, [e.target.name]: e.target.value })
    }

    function handleBookingService(e) {
        setIdBookingService(parseInt(e.target.value))
        setServiceSelected({
            ...ServiceSelected,
            BookingService: {
                id_booking_service: e.target.value,
                booking_service_name: e.target.options[e.target.selectedIndex].text,
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
            }
        });
    };

    function handleSlots(e) {
        setIdSlots(parseInt(e.target.value))
        setSlotsSelected({
            ...SlotsSelected,
            Slots: {
                id_slots: e.target.value,
                slots_name: e.target.options[e.target.selectedIndex].text,
            }
        });
    };

    const handleBooking = async (e) => {
        e.preventDefault();
        await setIdStatus(1);
        console.log("submit", { id_vehicle, id_status, date, id_booking_service, id_slots });
        await newBooking({ id_vehicle, id_status, date, id_booking_service, id_slots });
    };

    return (
        <Form onSubmit={handleBooking}>
            <FormGroup className="label">
                <Label for="exampleDate">
                    Date
                </Label>
                <Input
                    id="date"
                    name="date"
                    placeholder="date placeholder"
                    type="date"
                    onChange={handleDate}
                    value={BookingDate.name}
                />
            </FormGroup>
            <FormGroup className="label">
                <SelectSlots 
                    name="id_slots"
                    text="Select a Time"
                    options={Slots}
                    handleOnChange={handleSlots}
                    value={SlotsSelected.Slots ? SlotsSelected.Slots.id_slots : ""}               
                />
                <SelectBookingService
                    name="id_booking_service"
                    text="Choose a Service"
                    options={BookingService}
                    handleOnChange={handleBookingService}
                    value={ServiceSelected.BookingService ? ServiceSelected.BookingService.id_booking_service : ""}
                />
                <SelectVehicle
                    name="id_vehicle"
                    text="Choose Your Vehicle Licence"
                    options={Vehicle}
                    user={parseInt(id_user)}
                    handleOnChange={handleVehicle}
                    value={VehicleSelected.Vehicle ? VehicleSelected.Vehicle.id_vehicle : ""}
                />
            </FormGroup>
            <SubmitButton text={btnText} type="submit" />
        </Form>
    )
};

export default BookingForm;