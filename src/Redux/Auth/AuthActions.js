import axios from 'axios'
import { USER_LOGIN_ERROR, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from './AuthTypes'
import {baseURL } from '../../Requests/config'


export const userLogin = (values) => async (dispatch) =>{
    try {
        dispatch({ type : USER_LOGIN_REQUEST})
        const { data } = await axios.post(`${baseURL}/api/v1/rest-auth/login/`, values)
        dispatch({type: USER_LOGIN_SUCCESS, payload: data})
    } catch (error) {
        dispatch({type: USER_LOGIN_ERROR, payload: error})
    }
}