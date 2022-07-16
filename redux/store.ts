import {applyMiddleware, createStore} from '@reduxjs/toolkit'
import createSagaMiddleWare from 'redux-saga';
import {rootReducer} from "./slices/rootReducer";
import rootSaga from "./sagas/rootSaga";
import {createLogger} from 'redux-logger';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {composeWithDevTools} from 'redux-devtools-extension';
import {persistStore, persistReducer} from 'redux-persist'


const sagaMiddleWare = createSagaMiddleWare();
const composeEnhancers = composeWithDevTools()

const persistConfig = {
    key: 'root',
    storage : AsyncStorage,
    blacklist: [
        // 'cart'
    ],
    debug: process.env.NODE_ENV !== "production",
}

const persistedReducer = persistReducer(persistConfig, rootReducer);
const appLogger = createLogger({
    collapsed: true,
    duration: true,
});

const store = createStore(persistedReducer, process.env.NODE_ENV !== 'production' ? applyMiddleware(sagaMiddleWare, appLogger) : applyMiddleware(sagaMiddleWare))
// const persist = persistStore(store);
sagaMiddleWare.run(rootSaga)



// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export {store}
