import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/auth";
import { getBooking, getStaff } from "../services/api";
import "./AdminForm.css";
import SelectOnlyBooking from "./form/selectOnlyBooking";
import SelectStaff from "./form/selectStaff";

const AdminForm = ({ onEdit }) => {

    const [Booking, setBooking] = useState([]);
    const [BookingSelected, setBookingSelected] = useState([]);
    const [Staff, setStaff] = useState([]);
    const [StaffSelected, setStaffSelected] = useState([]);
    const [NameStaff, setNameStaff] = useState([]);
    const [id_staff, setIdStaff] = useState(0);
    const [id_booking, setIdBooking] = useState(0);
    //const [StaffSelected, setStaffSelected] = useState([]);
    const { newUpdateBooking } = useContext(AuthContext);

    useEffect(() => {
        (async () => {
            const response = await getBooking();
            setBooking(response.data.result);
        })().catch(console.error);
    }, [NameStaff]);

    useEffect(() => {
        (async () => {
            const response = await getStaff();
            setStaff(response.data.result);
        })().catch(console.error);
        
    }, []);
    
    function handleBooking(e) {
        setIdBooking(e.target.options[e.target.selectedIndex].text)
        setBookingSelected({
            ...BookingSelected,
            Booking: {
                id_booking: e.target.value,
                date: e.target.options[e.target.selectedIndex].text,
                id_staff: e.target.options[e.target.selectedIndex].getAttribute('data_key')
            }
        });
    };

    function handleStaff(e) {
        setIdStaff(parseInt(e.target.value))
        setStaffSelected({
            ...StaffSelected,
            Staff: {
                id_staff: e.target.value,
                staff_name: e.target.options[e.target.selectedIndex].text,
            }
        });
    };

    function handleNameStaff() {
        const Selected = Staff.filter((option) => option.id_staff === parseInt(BookingSelected.Booking.id_staff))
        setNameStaff(Selected[0]);
        console.log(Selected);
    };

    const handleUpdateBooking = async (e) => {
        //e.preventDefault();
        //await setIdStatus(1);
        console.log("submit", { id_booking, id_staff });
        await newUpdateBooking ({ id_booking, id_staff });
        const Selected = Staff.filter((option) => option.id_staff === parseInt(id_staff))
        setNameStaff(Selected[0]);
        console.log(Selected);
    };

    return (
        <div>
            <div>
                <form className="form">
                    <SelectOnlyBooking
                        name="id_booking"
                        text="Select ID Booking"
                        options={Booking}
                        handleOnChange={handleBooking}
                        value={BookingSelected.Booking ? BookingSelected.Booking.id_booking : ""}
                    />
                </form>
                <button className="view" type="submit" onClick={handleNameStaff}>View</button>
            </div>
            <div>
                <form className="form">
                    <SelectStaff
                        name="id_staff"
                        text="Select Staff"
                        options={Staff}
                        handleOnChange={handleStaff}
                        value={StaffSelected.Staff ? StaffSelected.Staff.id_staff : ""}
                    />
                </form>
                <button className="view" type="submit" onClick={handleUpdateBooking}>Set</button>
            </div>
            <div className="adminForm-print">
                <h3>Booking Selected</h3>
                <p>ID Booking: {BookingSelected.Booking ? BookingSelected.Booking.date : ""}</p>
                <p>Booking Date: {BookingSelected.Booking ? BookingSelected.Booking.id_booking : ""}</p>
                <p>Staff: {NameStaff ? NameStaff.staff_name : ""}</p> 
            </div>
        </div>
    );
};

export default AdminForm;