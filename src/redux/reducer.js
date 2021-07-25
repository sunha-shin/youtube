import {combineReducers} from "redux";
import appReducer from './app/redux';
import videoReducer from './video/redux'
import searchReducer from '../views/Search/redux/redux'
import authReducer from "../redux/auth/redux";

const rootReducer = combineReducers({
    app:appReducer,
    video:videoReducer,
    search:searchReducer,
    auth:authReducer
})

export default rootReducer;