import { combineReducers } from "redux";
import authReducer from "./Auth/AuthReducer";
import createReducer from './Graduation/GraduationReducer'
import globalReducer from './Global/GlobalReducer'
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import createCompanyReducer from "./Company/CompanyReducer";
import createGraduationReducer from "./Graduation/GraduationReducer";
import createGraduationProjectReducer from "./GraduationProject/GraduationProjectReducer";
import createWorkReducer from "./Work/WorkReducer";


const persistConfig = {
    key: "key",
    storage,
    whiteList: ['auth'],
};

const rootReducer = combineReducers({
    auth: authReducer,
    createGraduation: createReducer,
    global: globalReducer,
    company: createCompanyReducer,
    graduation: createGraduationReducer,
    graduationProject: createGraduationProjectReducer,
    work: createWorkReducer
});

export default persistReducer(persistConfig, rootReducer);