import "./select.css";

function SelectOnlyBooking({ text, name, options, handleOnChange, value }) {
    return (
        <div className="form_control">
            <label htmlFor={name}>{text}:</label>
            <select name={name} id={name} onChange={handleOnChange} value={value || ""}>
                <option>Choose an option</option>
                {options.map((option) => (
                    <option value={option.date} data_key={option.id_staff} key={option.id_booking}>
                        {option.id_booking}
                    </option>
                ))}
            </select>
        </div>
    )

}

export default SelectOnlyBooking;