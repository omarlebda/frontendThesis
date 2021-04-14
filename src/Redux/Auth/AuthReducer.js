import {
    USER_LOGIN_ERROR,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT,
    USER_REGISTRATION_REQUEST,
    USER_REGISTRATION_SUCCESS,
    USER_REGISTRATION_ERROR,
    USER_LOGIN_SAVE_VALUES
} from './AuthTypes'

const initialState = {
    isAuthenticated: false,
    currentUser: null,
    loading: false,
    error: null,
    saveValues: null
}

const authReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case USER_LOGIN_REQUEST:
            return { loading: true }
        case USER_LOGIN_SUCCESS:
            return {
                loading: false,
                isAuthenticated: true,
                currentUser: payload.data,
                saveValues: payload.values.username
            }
        case USER_LOGIN_ERROR:
            return {
                loading: false,
                error: payload
            }
        // case USER_LOGIN_SAVE_VALUES:
        //     return{ }
        case USER_LOGOUT:
            return {
                isAuthenticated: false,
                currentUser: null
            }
        case USER_REGISTRATION_REQUEST:
            return {
                loading: true
            }
        case USER_REGISTRATION_SUCCESS:
            return {
                loading: false,
            }
        case USER_REGISTRATION_ERROR:
            return {
                loading: false,
                error: payload
            }


        default: return state
    }
}

export default authReducer