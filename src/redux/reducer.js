import {combineReducers} from "redux";
import appReducer from './app/redux';
import videoReducer from '../views/common/redux/video/redux'
import searchReducer from '../views/Search/redux/redux'

const rootReducer = combineReducers({
    app:appReducer,
    video:videoReducer,
    search:searchReducer,
})

export default rootReducer;