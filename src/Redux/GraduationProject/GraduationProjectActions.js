import axios from 'axios'
import {
    CREATE_NEW_GRADUATION_PROJECT_REQUEST,
    CREATE_NEW_GRADUATION_PROJECT_SUCCESS,
    CREATE_NEW_GRADUATION_PROJECT_ERROR
} from './GraduationProjectTypes'
import { baseURL } from '../../Requests/config'


export const createNewGraduationProject = (values) => async (dispatch) => {
    try {
        dispatch({ type: CREATE_NEW_GRADUATION_PROJECT_REQUEST })
        const { data } = await axios.post(`${baseURL}/api/v1/add_graduation_project/`, values)
        dispatch({ type: CREATE_NEW_GRADUATION_PROJECT_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: CREATE_NEW_GRADUATION_PROJECT_ERROR, payload: error })
    }
}