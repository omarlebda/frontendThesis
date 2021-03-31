import axios from 'axios'
import {
    CREATE_NEW_WORK_REQUEST,
    CREATE_NEW_WORK_SUCCESS,
    CREATE_NEW_WORK_ERROR
} from './WorkTypes'
import { baseURL } from '../../Requests/config'


export const createNewWork = (values) => async (dispatch) => {
    try {
        dispatch({ type: CREATE_NEW_WORK_REQUEST })
        const { data } = await axios.post(`${baseURL}/api/v1/create_job/`, values)
        dispatch({ type: CREATE_NEW_WORK_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: CREATE_NEW_WORK_ERROR, payload: error })
    }
}