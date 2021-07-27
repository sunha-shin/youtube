import {combineReducers} from "redux";
import appReducer from '../views/common/redux/app/redux';
import searchReducer from '../views/Search/redux/redux'
import authReducer from "../views/common/redux/auth/redux";
import watchReducer from "../views/Watch/redux/redux";
import homeReducer from "../views/Home/redux/redux";

const rootReducer = combineReducers({
    app: appReducer,
    auth: authReducer,
    home: homeReducer,
    watch: watchReducer,
    search: searchReducer,
})

export default rootReducer;