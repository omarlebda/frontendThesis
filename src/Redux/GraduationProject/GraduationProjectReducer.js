import {
    CREATE_NEW_GRADUATION_PROJECT_REQUEST,
    CREATE_NEW_GRADUATION_PROJECT_SUCCESS,
    CREATE_NEW_GRADUATION_PROJECT_ERROR
} from './GraduationProjectTypes'

const initialState = {
    loading: false,
    error: null,
    success: false,
}


const createGraduationProjectReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case CREATE_NEW_GRADUATION_PROJECT_REQUEST:
            return { loading: true }
        case CREATE_NEW_GRADUATION_PROJECT_SUCCESS:
            return {
                loading: false,
                success: true
            }
        case CREATE_NEW_GRADUATION_PROJECT_ERROR:
            return {
                loading: false,
                error: payload
            }
        default: return state
    }
}

export default createGraduationProjectReducer