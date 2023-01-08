import "./select.css";

function SelectBookingService({ text, name, options, handleOnChange, value }) {
    return (
        <div className="form_control">
            <label htmlFor={name}>{text}:</label>
            <select name={name} id={name} onChange={handleOnChange} value={value || ""}>
                <option>Choose an option</option>
                {options.map((option) => (
                    <option value={option.id_booking_service} key={option.id_booking_service}>
                        {option.booking_service_name}
                    </option>
                ))}
            </select>
        </div>
    )

}

export default SelectBookingService;