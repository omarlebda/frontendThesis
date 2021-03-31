
import axios from 'axios';
import { baseURL } from './config'


export const deleteWorkById = async (id) => {
    return await axios.delete(`${baseURL}/api/v1/${id}/edit_delete_job/`)
}

export const updateWorkById = async (id, values) => {
    return await axios.put(`${baseURL}/api/v1/${id}/edit_delete_job/`, values)
}


