import "./select.css";

function SelectStaff({ text, name, options, handleOnChange, value }) {
    return (
        <div className="form_control">
            <label htmlFor={name}>{text}:</label>
            <select name={name} id={name} onChange={handleOnChange} value={value || ""}>
                <option>Choose an option</option>
                {options.map((option) => (
                    <option value={option.id_staff} key={option.id_staff}>
                        {option.staff_name}
                    </option>
                ))}
            </select>
        </div>
    )

}

export default SelectStaff;