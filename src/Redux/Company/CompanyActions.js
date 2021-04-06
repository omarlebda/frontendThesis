import axios from 'axios'
import {
    CREATE_NEW_COMPANY_REQUEST,
    CREATE_NEW_COMPANY_SUCCESS,
    CREATE_NEW_COMPANY_ERROR
} from './CompanyTypes'
import { baseURL } from '../../Requests/config'


export const createNewCompany = (values) => async (dispatch) => {
    try {
        dispatch({ type: CREATE_NEW_COMPANY_REQUEST })
        const { data } = await axios.post(`${baseURL}/api/v1/create_company/`, values)
        dispatch({ type: CREATE_NEW_COMPANY_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: CREATE_NEW_COMPANY_ERROR, payload: error })
    }
}