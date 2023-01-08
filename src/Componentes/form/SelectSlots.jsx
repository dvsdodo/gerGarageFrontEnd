import "./select.css";

function SelectSlots({ text, name, options, handleOnChange, value }) {
    return (
        <div className="form_control">
            <label htmlFor={name}>{text}:</label>
            <select name={name} id={name} onChange={handleOnChange} value={value || ""}>
                <option>Choose an option</option>
                {options.map((option) => (
                    <option value={option.id_slots} key={option.id_slots}>
                        {option.slots_name}
                    </option>
                ))}
            </select>
        </div>
    )

}

export default SelectSlots;