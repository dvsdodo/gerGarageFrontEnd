import "./select.css";

function SelectVehicle({ text, name, options, user, handleOnChange, value }) {

    const newOptions = options.filter((option) => option.id_user === user)
    //console.log(newOptions);

    return (
        <div className="form_control">
            <label htmlFor={name}>{text}:</label>
            <select name={name} id={name} onChange={handleOnChange} value={value}>
                <option>Choose an option</option>
                {newOptions.map((option) => (
                    <option value={option.id_vehicle} data_key={option.id_make} key={option.id_vehicle}>
                        {option.vehicle_licence}
                    </option>
                ))}
            </select>
        </div>
    )

}

export default SelectVehicle;