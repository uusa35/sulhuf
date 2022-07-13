import type {NextPage} from 'next'
import React from "react";
import {GetServerSideProps} from "next";
import LoginForm from "../components/forms/LoginForm";
import MainLayout from "../components/layout/MainLayout";

const Login: NextPage = () => {
    return (

            <LoginForm/>
    )
}

export default Login

export const getServerSideProps: GetServerSideProps = async (context: any) => {
    return {
        props: {}
    }
}
