import {
    CREATE_NEW_WORK_REQUEST,
    CREATE_NEW_WORK_SUCCESS,
    CREATE_NEW_WORK_ERROR
} from './WorkTypes'

const initialState = {
    loading: false,
    error: null,
    success: false,
}


const createWorkReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case CREATE_NEW_WORK_REQUEST:
            return { loading: true }
        case CREATE_NEW_WORK_SUCCESS:
            return {
                loading: false,
                success: true
            }
        case CREATE_NEW_WORK_ERROR:
            return {
                loading: false,
                error: payload
            }
        default: return state
    }
}

export default createWorkReducer