import "./select.css";

function SelectBooking({ text, name, options, vehicle, handleOnChange, value }) {

    const newOptions = options.filter((option) => option.id_vehicle === vehicle)

    return (
        <div className="form_control">
            <label htmlFor={name}>{text}:</label>
            <select name={name} id={name} onChange={handleOnChange} value={value || ""}>
                <option>Choose an option</option>
                {newOptions.map((option) => (
                    <option value={option.id_booking} data_key={option.id_booking_service} key={option.id_booking}>
                        {option.id_booking}
                    </option>
                ))}
            </select>
        </div>
    )

}

export default SelectBooking;