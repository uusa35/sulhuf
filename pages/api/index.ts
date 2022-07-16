import axios from 'axios'
import {Users, User, Auth} from "../../types";
import {toast} from "react-toastify";

export const ecommerceUrl = `http://ecommerce.iads-kw.com/api/`;
export const baseUrl = `http://dev-api.trysedalia.com/`;
export const axiosInstance = axios.create({
    baseURL: ecommerceUrl,
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "application/json",
    }
});


export const postLogin = async (params: { username : string, password : string }):Promise<Auth | string> => {
    return await axios.post(`${baseUrl}auth/local`, {
            data: {
                identifier : params.username,
                password : params.password
            },
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-type": "application/json",
            }
        }
    ).then(r => r.data).catch(e => e.response.data.message[0].messages[0].message)
}

export const getTrans = async () => await axiosInstance.get(`translations`).then(r => r.data).catch(e => console.log(e));


export const getUsers = async (params: Object): Promise<Users> => {
    return await axiosInstance.get(`search/user?`, {params}).then(r => r.data).catch(e => console.log(e))
}

export const getUser = async (id: string | number): Promise<User> => {
    return await axiosInstance.get(`user/${id}`).then(r => r.data).catch(e => console.log(e))
}

export const changeLang = async (lang: string): Promise<User> => {
    return await axiosInstance.get(`lang/${lang}`).then(r => r.data).catch(e => console.log(e))
}
