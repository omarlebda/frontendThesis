import {
    CREATE_NEW_GRADUATION_REQUEST,
    CREATE_NEW_GRADUATION_SUCCESS,
    CREATE_NEW_GRADUATION_ERROR
} from './GraduationTypes'

const initialState = {
    loading: false,
    error: null,
    success: false,
}


const createGraduationReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case CREATE_NEW_GRADUATION_REQUEST:
            return { loading: true }
        case CREATE_NEW_GRADUATION_SUCCESS:
            return {
                loading: false,
                success: true
            }
        case CREATE_NEW_GRADUATION_ERROR:
            return {
                loading: false,
                error: payload
            }
        default: return state
    }
}

export default createGraduationReducer