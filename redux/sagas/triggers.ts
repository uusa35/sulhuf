import {takeLatest, call, put, all, throttle} from "redux-saga/effects";
import {
    startGetUsersScenario,
    startGetUserScenario,
    startEnableBootStrappedScenario, startGetTranslationsScenario, startChangeLangScenario
} from "./requestSagas";
import {persist} from './../store';
import {bootStrappedSlice, enableBootStrapped} from "../slices/bootStrappedSlice";
import {resetUser, resetUsers, usersSlice} from "../slices/usersSlice";
import {localeSlice} from "../slices/localeSlice";
import {translationsSlice}  from "../slices/translationsSlice";

export function* triggerStartGetUsers() {
    yield throttle(2000,usersSlice.actions.getUsers, startGetUsersScenario);
}

export function* triggerStartGetUser() {
    yield throttle(5000,usersSlice.actions.getUser, startGetUserScenario);
}

export function* triggerDisableBootStrapped() {
    yield takeLatest(bootStrappedSlice.actions.disableBootStrapped, startResetScenario);
}

export function* triggerEnableBootStrapped() {
    yield takeLatest(bootStrappedSlice.actions.enableBootStrapped, startEnableBootStrappedScenario);
}

export function* startResetScenario() {
    persist.purge();
    yield all([
        put(resetUsers({})),
        put(resetUser({})),
    ])
    yield put(enableBootStrapped())
}

export function* triggerGetTranslations() {
    yield takeLatest(translationsSlice.actions.getTranslations, startGetTranslationsScenario);
}

export function* triggerChangeLang() {
    yield takeLatest(localeSlice.actions.setLocale, startChangeLangScenario);
}
