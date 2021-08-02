import {all, fork} from 'redux-saga/effects'
import appSaga from '../views/common/redux/app/saga'
import searchSaga from '../views/Search/redux/saga';
import watchSaga from '../views/Watch/redux/saga'
import homeSaga from '../views/Home/redux/saga'
import videoSaga from '../views/common/redux/videos/saga';

function* sagas() {
    yield all([
        fork(appSaga),
        fork(searchSaga),
        fork(homeSaga),
        fork(videoSaga),
        fork(watchSaga),
        fork(homeSaga)
    ])
}

export default sagas;