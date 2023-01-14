import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:5000",
});

export const createSession = async (username, password) => {
    return api.post("/sessions", { username, password });
};

export const getUsers = async () => {
    return api.get("/listUsers");
};

export const getType = async () => {
    return api.get("/listType");
};

export const getMake = async () => {
    return api.get("/listMake");
};

export const getEngineType = async () => {
    return api.get("/listEngineType");
};

export const getBooking = async () => {
    return api.get("/listBooking");
};

export const getBookingService = async () => {
    return api.get("/listBookingService");
};

export const getVehicle = async () => {
    return api.get("/listVehicle");
};

export const getSlots = async () => {
    return api.get("/listSlots");
};

export const getStaff = async () => {
    return api.get("/listStaff");
};

export const createUser = async (name, phone_number, username, password) => {
    return api.post("/createUser", { name, phone_number, username, password });
};

export const createVehicle = async (id_user, id_make, id_engine_type, vehicle_comment, vehicle_licence) => {
    return api.post("/createVehicle", { id_user, id_make, id_engine_type, vehicle_comment, vehicle_licence });
};

export const createBooking = async (id_vehicle, id_status, date, id_booking_service, id_slots) => {
    return api.post("/createBooking", { id_vehicle, id_status, date, id_booking_service, id_slots });
};

export const updateBooking = async (id_booking, id_staff) => {
    console.log(id_booking);
    return api.put("/createBooking/"+(parseInt(id_booking)), { id_staff });
};