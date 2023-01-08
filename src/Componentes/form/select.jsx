import "./select.css";

function Select({ text, name, options, handleOnChange, value }) {
    return (
        <div className="form_control">
            <label htmlFor={name}>{text}:</label>
            <select name={name} id={name} onChange={handleOnChange} value={value || ""}>
                <option>Choose an option</option>
                {options.map((option) => (
                    <option value={option.id_type_vehicle} key={option.id_type_vehicle}>
                        {option.type_name}
                    </option>
                ))}
            </select>
        </div>
    )

}

export default Select;