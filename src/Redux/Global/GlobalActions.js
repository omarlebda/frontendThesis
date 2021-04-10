import {
    CREATE_COMPANY,
    CREATE_GRADUATION,
    CREATE_WORK,
    DELETE_GRADUATION,
    DELETE_WORK,
    EDIT_GRADUATION,
    EDIT_WORK,
    RESET_CREATE_COMPANY,
    RESET_CREATE_GRADUATION,
    RESET_CREATE_WORK,
    RESET_DELETE_WORK,
    RESET_EDIT_GRADUATION,
    RESET_EDIT_WORK,
    RESET_UPDATE_PROFILE,
    UPDATE_PROFILE
} from './GlobalTypes'

export const updateProfile = () => ({
    type: UPDATE_PROFILE
})

export const resetUpdateProfile = () => ({
    type: RESET_UPDATE_PROFILE
})

export const createGraduation = () => ({
    type: CREATE_GRADUATION
})

export const resetCreateGraduation = () => ({
    type: RESET_CREATE_GRADUATION
})

export const updateGraduation = () => ({
    type: EDIT_GRADUATION
})

export const resetUpdateGraduation = () => ({
    type: RESET_EDIT_GRADUATION
})

export const deleteGraduation = () => ({
    type: DELETE_GRADUATION
})

export const resetDeleteGraduation = () => ({
    type: RESET_DELETE_GRADUATION
})


export const createWork = () => ({
    type: CREATE_WORK
})

export const resetCreateWork = () => ({
    type: RESET_CREATE_WORK
})

export const updateWork = () => ({
    type: EDIT_WORK
})

export const resetUpdateWork = () => ({
    type: RESET_EDIT_WORK
})


export const deleteWork = () => ({
    type: DELETE_WORK
})

export const resetDeleteWork = () => ({
    type: RESET_DELETE_WORK
})

export const createCompany = () => ({
    type: CREATE_COMPANY
})

export const resetCreateCompany = () => ({
    type: RESET_CREATE_COMPANY
})

