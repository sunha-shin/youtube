import {bindActionCreators} from "redux";

import {Action as AppAction} from './app/redux';
import {Action as videoAction} from "./video/redux";
import {Action as searchAction} from "../views/Search/redux/redux";
import {Action as authAction} from "./auth/redux";
import store from "./store";

const {dispatch} = store;

export const appActions = bindActionCreators(AppAction.Creators, dispatch);
export const videoActions = bindActionCreators(videoAction.Creators, dispatch);
export const searchActions = bindActionCreators(searchAction.Creators, dispatch);
export const authActions = bindActionCreators(authAction.Creators, dispatch);

