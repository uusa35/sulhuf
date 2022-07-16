import type {NextPage} from 'next'
import React, {useContext} from "react";
import {GetServerSideProps} from "next";
import LoginForm from "../components/forms/LoginForm";
import {MainContext} from "../components/layout/MainLayout";
import {useAppDispatch, useAppSelector} from "../redux/hooks";
import {MainContextType} from "../types";
import { logout } from './../redux/slices/authSlice'
import Cookies from 'js-cookie';
const Login: NextPage = () => {
    const {auth} = useAppSelector(state => state);
    const {trans} = useContext<MainContextType>(MainContext);
    const dispatch = useAppDispatch();
    return (
        <>
            {
                auth.isLogged ? <div>
                    <h1>{`${trans('welcome')} ${auth.username}`} </h1>
                    <button onClick={() => dispatch(logout({}))}>{trans('logout')}</button>
                </div> : <LoginForm/>
            }
        </>

    )
}

export default Login

export const getServerSideProps: GetServerSideProps = async ({req , res }) => {
    if (req.cookies.auth) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    }
    return {
        props: {}
    }
}
