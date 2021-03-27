import { combineReducers } from "redux";
import authReducer from "./Auth/AuthReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


const persistConfig = {
    key: "key",
    storage,
    whiteList: ['auth'],
};

const rootReducer = combineReducers({
    auth : authReducer,
 
 });

 export default persistReducer(persistConfig, rootReducer);