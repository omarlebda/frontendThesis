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
    RESET_DELETE_GRADUATION_PROJECT,
    ADD_PROFILE_PICTURE,
    RESET_ADD_PROFILE_PICTURE
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




export const createGraduationProject = () => ({
    type: CREATE_GRADUATION_PROJECT
})

export const resetCreateGraduationProject = () => ({
    type: RESET_CREATE_GRADUATION_PROJECT
})

export const updateGraduationProject = () => ({
    type: EDIT_GRADUATION_PROJECT
})

export const resetUpdateGraduationProject = () => ({
    type: RESET_EDIT_GRADUATION_PROJECT
})

export const deleteGraduationProject = () => ({
    type: DELETE_GRADUATION_PROJECT
})

export const resetDeleteGraduationProject = () => ({
    type: RESET_DELETE_GRADUATION_PROJECT
})

export const addProfilePicture = () => ({
    type: ADD_PROFILE_PICTURE
})

export const resetAddProfilePicture = () => ({
    type: RESET_ADD_PROFILE_PICTURE
})