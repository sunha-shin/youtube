import {bindActionCreators} from "redux";

import {Action as AppAction} from '../views/common/redux/app/redux';
import {Action as homeAction} from "../views/Home/redux/redux";
import {Action as searchAction} from "../views/Search/redux/redux";
import {Action as authAction} from "../views/common/redux/auth/redux";
import {Action as watchAction} from '../views/Watch/redux/redux'
import store from "./store";

const {dispatch} = store;

export const appActions = bindActionCreators(AppAction.Creators, dispatch);
export const authActions = bindActionCreators(authAction.Creators, dispatch);
export const homeActions = bindActionCreators(homeAction.Creators, dispatch);
export const watchActions = bindActionCreators(watchAction.Creators, dispatch);
export const searchActions = bindActionCreators(searchAction.Creators, dispatch);

