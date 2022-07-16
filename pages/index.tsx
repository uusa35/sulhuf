import type {NextPage} from 'next'
import React, {useContext} from "react";
import Image  from "next/image";
import {MainContext} from "../components/layout/MainLayout";
import {MainContextType} from "../types";
import {GetServerSideProps} from "next";


const Home: NextPage = () => {
    const { trans } = useContext<MainContextType>(MainContext)
    return (
        <div className={`flex flex-col items-center justify-center`}>
            <div className={`mb-10`}>
                <h1 className={`text-xl font-bold capitalize`}>{trans('welcome')}</h1>
            </div>
            <Image src={`/sulhuf.png`} width={120} height={40} className={`object-fill`}/>
        </div>
    )
}

export default Home;

export const getServerSideProps: GetServerSideProps = async ({ req, res}) => {
    return {
        props: { token : req.cookies.token || ""}
    }
}
