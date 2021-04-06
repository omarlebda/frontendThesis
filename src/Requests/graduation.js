
import axios from 'axios';
import { baseURL } from './config'


export const deleteGraduationById = async (id) => {
    return await axios.delete(`${baseURL}/api/v1/edit_or_delete_graduation/${id}/`)
}

export const updateGraduationById = async (id, values) => {
    return await axios.put(`${baseURL}/api/v1/edit_or_delete_graduation/${id}/`, values)
}

export const deleteGraduationProjectById = async (id) => {
    return await axios.delete(`${baseURL}/api/v1/${id}/edit_or_delete_graduation_project/`)
}

export const updateGraduationProjectById = async (id, values) => {
    return await axios.put(`${baseURL}/api/v1/${id}/edit_or_delete_graduation_project/`, values)
}
