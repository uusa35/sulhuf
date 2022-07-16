import {takeLatest, call, put, all, throttle} from "redux-saga/effects";
import {
    startGetUserScenario,
    startEnableBootStrappedScenario, startGetTranslationsScenario, startChangeLangScenario, startLogoutSceanrio
} from "./requestSagas";
// import {persist} from './../store';
import {bootStrappedSlice, enableBootStrapped} from "../slices/bootStrappedSlice";
import {authSlice} from './../slices/authSlice';
import {localeSlice} from "../slices/localeSlice";
import {translationsSlice}  from "../slices/translationsSlice";

export function* triggerStartGetUser() {
    yield throttle(2000,authSlice.actions.getUser, startGetUserScenario);
    // yield takeLatest(authSlice.actions.getUser, startGetUserScenario);
}

export function* triggerLogout() {
    yield takeLatest(authSlice.actions.logout, startLogoutSceanrio);
}

export function* triggerDisableBootStrapped() {
    yield takeLatest(bootStrappedSlice.actions.disableBootStrapped, startResetScenario);
}

export function* triggerEnableBootStrapped() {
    yield takeLatest(bootStrappedSlice.actions.enableBootStrapped, startEnableBootStrappedScenario);
}

export function* startResetScenario() {
    // persist.purge();
    yield all([
        // list of state reset
    ])
    yield put(enableBootStrapped())
}

export function* triggerGetTranslations() {
    yield takeLatest(translationsSlice.actions.getTranslations, startGetTranslationsScenario);
}

export function* triggerChangeLang() {
    yield takeLatest(localeSlice.actions.setLocale, startChangeLangScenario);
}
