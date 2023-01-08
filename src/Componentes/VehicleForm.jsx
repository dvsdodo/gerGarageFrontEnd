import Input from "./form/input";
import Select from "./form/select";
import SubmitButton from "./form/submitButton";
import "./VehicleForm.css";
import React, { useContext, useEffect, useState } from "react";
import { getEngineType, getMake, getType } from "../services/api";
import SelectMake from "./form/selectMake";
import SelectEngine from "./form/selectEngine";
import { AuthContext } from "../contexts/auth";
import { useNavigate } from "react-router-dom";

function VehicleForm({ btnText }) {

    const [Type, setType] = useState([]);
    const [Make, setMake] = useState([]);
    const [Engine, setEngine] = useState([]);
    const [Licence, setLicence] = useState([]);
    const [Comment, setComment] = useState([]);
    const [TypeSelected, setTypeSelected] = useState([]);
    const [MakeSelected, setMakeSelected] = useState([]);
    const [EngineSelected, setEngineSelected] = useState([]);

    const id_user = localStorage.getItem('user');
    const navigate = useNavigate();

    const { newVehicle } = useContext(AuthContext);
    const [idType, setIdType] = useState(0);
    const [id_make, setIdmake] = useState(0);
    const [id_engine_type, setIdengine] = useState(0);
    const [vehicle_comment, setVehiclecomment] = useState("");
    const [vehicle_licence, setVehiclelicence] = useState("");

    console.log(id_user);

    useEffect(() => {
        (async () => {
            const response = await getType();
            setType(response.data.result);
        })();
    }, []);

    useEffect(() => {
        (async () => {
            const response = await getMake();
            setMake(response.data.result);
        })();
    }, []);

    useEffect(() => {
        (async () => {
            const response = await getEngineType();
            setEngine(response.data.result);
        })();
    }, []);

    function handleChange(e) {
        setVehiclelicence(e.target.value)
        setLicence({ ...Licence, [e.target.name]: e.target.value })
    }

    function handleComment(e) {
        setVehiclecomment(e.target.value)
        setComment({ ...Comment, [e.target.name]: e.target.value })
    }

    function handleSelect(e) {
        setIdType(parseInt(e.target.value))
        //console.log(e.target.value);
        
        setTypeSelected({
            ...TypeSelected,
            Type: {
                id_type_vehicle: e.target.value,
                name_type: e.target.options[e.target.selectedIndex].text,
            },
        });
    }

    function handleSelectMake(e) {
        setIdmake(parseInt(e.target.value))
        setMakeSelected({
            ...MakeSelected,
            Make: {
                id_make: e.target.value,
                make_name: e.target.options[e.target.selectedIndex].text,
            }

        });
    }

    function handleSelectEngineSelected(e) {
        setIdengine(parseInt(e.target.value))
        setEngineSelected({
            ...EngineSelected,
            Engine: {
                id_engine_type: e.target.value,
                engine_name: e.target.options[e.target.selectedIndex].text,
            }

        });
    }

    const handleVehicle = async (e) => {
        e.preventDefault();
        console.log("submit", { id_user: parseInt(id_user), id_make, id_engine_type, vehicle_comment, vehicle_licence });
        await newVehicle({id_user: parseInt(id_user), id_make, id_engine_type, vehicle_comment, vehicle_licence});
        await navigate("/");
    };

    return (

        <form className="form" onSubmit={handleVehicle}>

            <Select
                name="id_type_vehicle"
                text="Choose a type"
                options={Type}
                handleOnChange={handleSelect}
                value={TypeSelected.Type ? TypeSelected.Type.id_type_vehicle : ""}

            />
            <SelectMake
                name="id_make"
                text="Choose a make"
                options={Make}
                id_maker={idType}
                handleOnChange={handleSelectMake}
                value={MakeSelected.Make ? MakeSelected.Make.id_make : ""}
            />
            <SelectEngine
                name="id_engine_type"
                text="Choose an engine type"
                options={Engine}
                handleOnChange={handleSelectEngineSelected}
                value={EngineSelected.Engine ? EngineSelected.Engine.id_engine_type : ""}
            />
            <Input
                type="text"
                text="Licence"
                name="licence"
                placeholder="Insert Licence"
                handleOnChange={handleChange}
                value={Licence.name}
            />
            <Input
                type="text"
                text="Comment"
                name="Comment"
                placeholder="Insert Comment"
                handleOnChange={handleComment}
                value={Comment.name}
            />
            <SubmitButton text={btnText} type="submit"/>

        </form>

    )
};

export default VehicleForm;