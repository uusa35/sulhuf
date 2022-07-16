import type {NextPage} from 'next'
import React, {useContext} from "react";
import Image from "next/image";
import {MainContext} from "../components/layout/MainLayout";
import {MainContextType} from "../types";
import {GetServerSideProps} from "next";
import Link from "next/link";
import {useAppSelector} from "../redux/hooks";


const Home: NextPage = () => {
    const {trans} = useContext<MainContextType>(MainContext)
    const { auth } = useAppSelector(state => state);
    return (
        <div className={`flex flex-col items-center justify-center`}>
            <div className={`mb-10`}>
                <h1 className={`text-xl font-bold capitalize`}>{trans('welcome')}</h1>
            </div>
            <div className={`my-10`}>
                {/* Hero card */}
                <div className="relative">
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100"/>
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
                            <div className="absolute inset-0">
                                <img
                                    className="h-full w-full object-cover"
                                    src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
                                    width={500}
                                    height={500}
                                    alt="People working on laptops"
                                />
                                <div className="absolute inset-0 bg-gray-400 mix-blend-multiply"/>
                            </div>
                            <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                                <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                                    <span className="block text-white">{trans('welcome')}</span>
                                    <span className="block text-indigo-200">Sulhuf</span>
                                </h1>
                                <p className="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl">
                                    Just a Demo Site for sulhuf.com
                                </p>
                                <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                                    {
                                        !auth.isLogged && <div
                                            className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                                            <div

                                                className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 sm:px-8"
                                            >
                                                <Link href={`/login`}>
                                                    {trans('login')}
                                                </Link>
                                            </div>
                                            <div
                                                className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8"
                                            >
                                                <Link href={`/login`}>
                                                    {trans('login')}
                                                </Link>
                                            </div>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Logo cloud */}
                <div className="bg-gray-100">
                    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                        <p className="text-center text-sm font-semibold uppercase text-gray-500 tracking-wide">
                            Trusted by over 5 very average small businesses
                        </p>
                        <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
                            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                <img className="h-12" src="/sulhuf.png"
                                     alt="Tuple"/>
                            </div>
                            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                <img className="h-12" src="/sulhuf.png"
                                     alt="Mirage"/>
                            </div>
                            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                <img
                                    className="h-12"
                                    src="/sulhuf.png"
                                    alt="StaticKit"
                                />
                            </div>
                            <div className="col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1">
                                <img
                                    className="h-12"
                                    src="/sulhuf.png"
                                    alt="Transistor"
                                />
                            </div>
                            <div className="col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1">
                                <img
                                    className="h-12"
                                    src="/sulhuf.png"
                                    alt="Workcation"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;

export const getServerSideProps: GetServerSideProps = async ({req, res}) => {
    return {
        props: {token: req.cookies.token || ""}
    }
}
