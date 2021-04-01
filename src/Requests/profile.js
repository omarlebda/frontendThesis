import axios from 'axios';
import { baseURL } from './config'


export const fetchUsers = async () => {
    const { data } = await axios.get(`${baseURL}/api/v1/`)
    return data;
}


export const fetchUserById = async (id) => {
    const { data } = await axios.get(`${baseURL}/api/v1/${id}`)
    return data;
}


export const fetchCompanies = async () => {
    const { data } = await axios.get(`${baseURL}/api/v1/companies`)
    return data;
}


export const updateProfileById = async (id, values) => {
    return await axios.put(`${baseURL}/api/v1/edit_profile/${id}/`, values)
}