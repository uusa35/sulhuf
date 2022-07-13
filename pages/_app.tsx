import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {PersistGate} from "redux-persist/integration/react";
import {Provider} from "react-redux";
import {store, persist} from './../redux/store';
import 'react-toastify/dist/ReactToastify.css';
import {MainLayout} from "../components/layout/MainLayout";

function MyApp({Component, pageProps}: AppProps) {
    const isClient = typeof window !== 'undefined';
    return (
        <Provider store={store}>
            <MainLayout>
                {
                    isClient ?
                        <PersistGate persistor={persist}>
                            <Component {...pageProps} />
                        </PersistGate> :
                        <Component {...pageProps} />
                }
            </MainLayout>
        </Provider>
    )
}

export default MyApp
