import { USER_LOGIN_ERROR, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from './AuthTypes'

const initialState ={
    isAuthenticated : false,
    currentUser: null,
    loading: false,
    error: null,
}

const authReducer = (state = initialState, {type, payload}) =>{
    switch(type){
        case USER_LOGIN_REQUEST:
            return{ loading: true}
        case USER_LOGIN_SUCCESS:
            return{
                loading: false,
                isAuthenticated: true,
                currentUser: payload
            }
        case USER_LOGIN_ERROR:
            return{
                loading: false,
                error: payload
            }
        default : return state
    }
}

export default authReducer