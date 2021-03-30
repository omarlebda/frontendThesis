import axios from 'axios'
import {
    CREATE_NEW_GRADUATION_REQUEST,
    CREATE_NEW_GRADUATION_SUCCESS,
    CREATE_NEW_GRADUATION_ERROR
} from './GraduationTypes'
import { baseURL } from '../../Requests/config'


export const createNewGraduation = (values) => async (dispatch) => {
    try {
        dispatch({ type: CREATE_NEW_GRADUATION_REQUEST })
        const { data } = await axios.post(`${baseURL}/api/v1/add_graduation/`, values)
        dispatch({ type: CREATE_NEW_GRADUATION_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: CREATE_NEW_GRADUATION_ERROR, payload: error })
    }
}