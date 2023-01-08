import "./select.css";

function SelectEngine({ text, name, options, handleOnChange, value }) {
    return (
        <div className="form_control">
            <label htmlFor={name}>{text}:</label>
            <select name={name} id={name} onChange={handleOnChange} value={value || ""}>
                <option>Choose an option</option>
                {options.map((option) => (
                    <option value={option.id_engine_type} key={option.id_engine_type}>
                        {option.engine_name}
                    </option>
                ))}
            </select>
        </div>
    )

}

export default SelectEngine;