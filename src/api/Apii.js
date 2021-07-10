import axios from 'axios';

const baseUrl = "http://localhost:3006/users";

export const getAllUser = async (id) => {
    id = id || "";
    return await axios.get(`${baseUrl}/${id}`);
}

export const addUser = async (user) => {
    return await axios.post(baseUrl,user);
}
export const editUser = async (id,user) => {
    return await axios.put(`${baseUrl}/${id}`,user);
}
export const deleteUser = async (id) => {
    return await axios.delete(`${baseUrl}/${id}`);
}