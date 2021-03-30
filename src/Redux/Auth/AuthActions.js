import axios from 'axios'
import {
    USER_LOGIN_ERROR,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT,
    USER_REGISTRATION_REQUEST,
    USER_REGISTRATION_SUCCESS,
    USER_REGISTRATION_ERROR
} from './AuthTypes'
import { baseURL } from '../../Requests/config'


export const userLogin = (values) => async (dispatch) => {
    try {
        dispatch({ type: USER_LOGIN_REQUEST })
        // const { data } = await axios.post(`${baseURL}/api/v1/rest-auth/login/`, values)
        const { data } = await axios.post(`${baseURL}/users/authenticate/`, values)
        dispatch({ type: USER_LOGIN_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: USER_LOGIN_ERROR, payload: error })
    }
}

export const userLogout = () => ({
    type: USER_LOGOUT
})

export const userRegistration = (values) => async (dispatch) => {
    try {
        dispatch({ type: USER_REGISTRATION_REQUEST })
        const { data } = await axios.post(`${baseURL}/api/v1/rest-auth/registration/`, values)
        dispatch({ type: USER_REGISTRATION_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: USER_REGISTRATION_ERROR, payload: error })
    }
}