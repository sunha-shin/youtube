import {all, fork} from 'redux-saga/effects'
import appSaga from './app/saga'
import videoSaga from '../views/common/redux/video/saga';
import searchSaga from '../views/Search/redux/saga';

function* sagas() {
    yield all([
        fork(appSaga),
        fork(videoSaga),
        fork(searchSaga)
    ])
}

export default sagas;