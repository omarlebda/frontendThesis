import {
    CREATE_COMPANY,
    CREATE_GRADUATION,
    CREATE_GRADUATION_PROJECT,
    CREATE_WORK,
    DELETE_GRADUATION,
    DELETE_GRADUATION_PROJECT,
    DELETE_WORK,
    EDIT_GRADUATION,
    EDIT_GRADUATION_PROJECT,
    EDIT_WORK,
    RESET_CREATE_COMPANY,
    RESET_CREATE_GRADUATION,
    RESET_CREATE_GRADUATION_PROJECT,
    RESET_CREATE_WORK,
    RESET_DELETE_WORK,
    RESET_EDIT_GRADUATION,
    RESET_EDIT_GRADUATION_PROJECT,
    RESET_EDIT_WORK,
    RESET_UPDATE_PROFILE,
    UPDATE_PROFILE,
    RESET_DELETE_GRADUATION,
    RESET_DELETE_GRADUATION_PROJECT
} from './GlobalTypes'

const initialState = {
    isProfileEdited: false,
    isGraduationCreated: false,
    isGraduationUpdated: false,
    isGraduationDeleted: false,
    isWorkCreated: false,
    isWorkUpdated: false,
    isWorkDeleted: false,
    isCompanyCreated: false,
    isGraduationProjectCreated: false,
    isGraduationProjectUpdated: false,
    isGraduationProjectDeleted: false,
}


const globalReducer = (state = initialState, { type }) => {
    switch (type) {
        case UPDATE_PROFILE:
            return { isProfileEdited: true }
        case RESET_UPDATE_PROFILE:
            return { isProfileEdited: false }
        case CREATE_GRADUATION:
            return { isGraduationCreated: true }
        case RESET_CREATE_GRADUATION:
            return { isGraduationCreated: false }
        case EDIT_GRADUATION:
            return { isGraduationUpdated: true }
        case RESET_EDIT_GRADUATION:
            return { isGraduationUpdated: false }
        case DELETE_GRADUATION:
            return { isGraduationDeleted: true }
        case RESET_DELETE_GRADUATION:
            return { isGraduationDeleted: false }
        case CREATE_WORK:
            return { isWorkCreated: true }
        case RESET_CREATE_WORK:
            return { isWorkCreated: false }
        case EDIT_WORK:
            return { isWorkUpdated: true }
        case RESET_EDIT_WORK:
            return { isWorkUpdated: false }
        case DELETE_WORK:
            return { isWorkDeleted: true }
        case RESET_DELETE_WORK:
            return { isWorkDeleted: false }
        case CREATE_COMPANY:
            return { isCompanyCreated: true }
        case RESET_CREATE_COMPANY:
            return { isCompanyCreated: false }
        case CREATE_GRADUATION_PROJECT:
            return { isGraduationProjectCreated: true }
        case RESET_CREATE_GRADUATION_PROJECT:
            return { isGraduationProjectCreated: false }
        case EDIT_GRADUATION_PROJECT:
            return { isGraduationProjectUpdated: true }
        case RESET_EDIT_GRADUATION_PROJECT:
            return { isGraduationProjectUpdated: false }
        case DELETE_GRADUATION_PROJECT:
            return { isGraduationProjectDeleted: true }
        case RESET_DELETE_GRADUATION_PROJECT:
            return { isGraduationProjectDeleted: false }
        default: return state
    }
}

export default globalReducer