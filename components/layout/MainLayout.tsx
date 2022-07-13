import React, {createContext, Fragment, ReactNode, useEffect} from 'react'
import {Disclosure, Menu, Transition} from '@headlessui/react'
import {BellIcon, MenuIcon, XIcon} from '@heroicons/react/outline'
import Image from 'next/image'
import Head from "next/head";
import Link from "next/link";
import { useRouter } from 'next/router'
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {setLocale} from "../../redux/slices/localeSlice";
import {MainContextType} from "../../types";
import {enableBootStrapped} from "../../redux/slices/bootStrappedSlice";
import {baseUrl} from "../../pages/api";
import MainNav from "./MainNav";
import {ToastContainer} from "react-toastify";


function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

interface MainLayoutProps {
    children: ReactNode | undefined,
}

const contextState: MainContextType = {
    trans: () => '',
    getLocalized: () => '',
    getAsset: () => '',
    getThumb: () => '',
    getMedium: () => '',
    getLarge: () => '',
    getFileUrl: () => '',
    classNames: () => '',
}

const MainContext = createContext<MainContextType>(contextState);


const MainLayout = ({children}: MainLayoutProps) => {
    const {locale, translations, bootStrapped} = useAppSelector(state => state);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!bootStrapped) {
            dispatch(enableBootStrapped())
        }
    }, [bootStrapped])

    const context: MainContextType = {
        trans: (name: string) => translations[name] ? translations[name][locale.lang] : name,
        classNames: (...classes: any) => classes.filter(Boolean).join(' '),
        getLocalized: (element: string = 'name') => locale.lang === 'ar' ? `${element}_ar` : `${element}_en`,
        getAsset: (element: string, type = 'png') => `${baseUrl}/${element}.${type}`,
        getThumb: (element: string) => `${baseUrl}thumbnail/${element}`,
        getMedium: (element: string) => `${baseUrl}medium/${element}`,
        getLarge: (element: string) => `${baseUrl}large/${element}`,
        getFileUrl: (element: string) => `${baseUrl}files/${element}`,
    }

    return (
        <MainContext.Provider value={context}>
            <Head>
                <title>Sulhuf</title>
                <link rel="icon" href="/sulhuf.png"/>
            </Head>
            <div className="h-screen w-full" dir={locale.isRTL ? 'rtl' : 'ltr'}>
                <MainNav />

                <div className="py-10">
                    <header>
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <h1 className="text-3xl font-bold leading-tight text-gray-900">SULHUF</h1>
                        </div>
                    </header>
                    <main className={`mx-auto mt-12`}>
                        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8  h-full ">
                            {/* Replace with your content */}
                            <div className="px-4 py-8 sm:px-0">
                            </div>
                            <div className={``}>
                                {children}
                            </div>
                        </div>
                    </main>
                </div>
                <footer
                    className="flex items-center justify-center w-full border-t absolute bottom-0 border-t shadow-lg p-3">
                    <Link
                        as={`home`}
                        className="flex items-center justify-center gap-2"
                        href="/"
                    >
                        <Image src="/sulhuf.png" alt="Vercel Logo" width={120} height={40}/>
                    </Link>
                </footer>
            </div>


            <ToastContainer />
        </MainContext.Provider>
    );
}

export {MainContext, MainLayout}
