import {call, put} from 'redux-saga/effects';
import {PayloadAction} from '@reduxjs/toolkit';
import * as api from '../../pages/api';
import {Auth} from "../../types";
import {setTranslations, getTranslations} from "../slices/translationsSlice";
import {setLocale} from "../slices/localeSlice";
import {toast} from "react-toastify";
import {setUser} from "../slices/authSlice";
import Cookies from 'js-cookie'
import Router from "next/router";


export function* startGetUserScenario(action: PayloadAction<Auth>) {
    try {
        const element: Auth = yield call(api.postLogin, action.payload)
        if (element.id && element.username) {
            // yield put(setUser(element))
        }
        const authUser = {id: 1, email: 'usama@usama.com', username: 'usama', token: '1234567', isLogged: true};
        Cookies.set('auth', authUser.token);
        yield put(setUser(authUser))
        toast.error(element);
    } catch (e) {
        console.log('the eee => getUser', e)
    } finally {

    }

}

export function* startEnableBootStrappedScenario() {
    yield put(getTranslations())
    yield put(setLocale('ar'))
    yield put(getTranslations())
}


export function* startGetTranslationsScenario() {
    try {
        const translations: {} = yield call(api.getTrans);
        yield put(setTranslations(translations));
        // yield put({type: 'translations/setTranslations', payload: translations});
    } catch (e) {
        console.log('e ===> from trans', e)
    } finally {
    }
}

export function* startChangeLangScenario(action: PayloadAction<string>) {
    try {
        yield call(api.changeLang, action.payload);
    } catch (e) {
        console.log('e ===> from trans', e)
    } finally {
    }
}

export function* startLogoutSceanrio(action: PayloadAction<any>) {
    console.log('here =++==>>> logout ')
    try {
        Cookies.remove('auth')
        yield call(Router.push, '/', 'home')
        yield call(toast.info, 'You logged out successfully !')
    } catch (e) {
        console.log('e from logout ==>', e)
    }
}




