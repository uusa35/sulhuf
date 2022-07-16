import {fork, take, all, throttle} from 'redux-saga/effects';
import {REHYDRATE, PURGE} from 'redux-persist/lib/constants';
import {
    triggerStartGetUser,
    triggerDisableBootStrapped,
    triggerEnableBootStrapped,
    triggerGetTranslations, triggerChangeLang, triggerLogout
} from "./triggers";

export default function* rootSaga() {
    yield all([
        fork(triggerStartGetUser),
        fork(triggerLogout),
        fork(triggerDisableBootStrapped),
        fork(triggerEnableBootStrapped),
        fork(triggerGetTranslations),
        fork(triggerChangeLang),
    ]);
    yield take(REHYDRATE); // Wait for rehydrate to prevent sagas from running with empty store
    yield take(PURGE);
}


