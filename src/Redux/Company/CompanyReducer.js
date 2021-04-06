import {
    CREATE_NEW_COMPANY_REQUEST,
    CREATE_NEW_COMPANY_SUCCESS,
    CREATE_NEW_COMPANY_ERROR
} from './CompanyTypes'

const initialState = {
    loading: false,
    error: null,
    success: false,
}


const createCompanyReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case CREATE_NEW_COMPANY_REQUEST:
            return { loading: true }
        case CREATE_NEW_COMPANY_SUCCESS:
            return {
                loading: false,
                success: true
            }
        case CREATE_NEW_COMPANY_ERROR:
            return {
                loading: false,
                error: payload
            }
        default: return state
    }
}

export default createCompanyReducer