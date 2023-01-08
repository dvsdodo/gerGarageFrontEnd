import "./select.css";

function SelectMake({ text, name, options, id_maker, handleOnChange, value }) {

    const newOptions = options.filter((option) => option.id_type_vehicle === id_maker)
    //console.log(newOptions);
    //console.log(typeof id_maker);
    //console.log(options);

    return (
        <div className="form_control">
            <label htmlFor={name}>{text}:</label>
            <select name={name} id={name} onChange={handleOnChange} value={value || ""}>
                <option>Choose an option</option>
                {newOptions.map((option) => (
                    <option value={option.id_make} key={option.id_make}>
                        {option.make_name}
                    </option>
                ))}
            </select>
        </div>
    )

}

export default SelectMake;