import React, {useContext, useState} from "react";
import {postLogin} from "../../pages/api";
import {EyeIcon} from "@heroicons/react/outline";
import {MainContext} from "../layout/MainLayout";
import {MainContextType} from "../../types";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {getUser} from "../../redux/slices/authSlice";


const LoginForm = () => {
    const {trans, classNames} = useContext<MainContextType>(MainContext)
    const {locale} = useAppSelector(state => state);
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useAppDispatch();
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(getUser({username, password}))
        // const result = await postLogin(username, password).then(r => console.log('data', r));
        // console.log('the result', result)
    };
    return (
        <div className={`w-full md:w-96 m-auto h-full border rounded-md shadow-md p-6 lg:my-10`}>
            <form className='space-y-6' onSubmit={handleSubmit} encType='multipart/form-data'>
                {/* username */}
                <div>
                    <label htmlFor="email" className={`block text-sm font-medium capitalize`}>
                        {trans('email')}
                    </label>
                    <div className="mt-1">
                        <input
                            onChange={(e) => setUsername(e.target.value)}
                            type={`username`}
                            defaultValue={`pharmacy_superadmin`}
                            required
                            className={`appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-600 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm`}/>
                    </div>
                </div>

                {/* password */}
                <div>
                    <label htmlFor="email" className={`block text-sm font-medium capitalize`}>
                        {trans('password')}
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            type={showPassword ? `text` : `password`}
                            defaultValue={`Sed@LIa2@dev`}
                            required
                            className={`appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-600 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm`}/>
                        <div
                            className={classNames(locale.isRTL ? `left-0` : `right-0`, `absolute inset-y-0 px-3 flex items-center`)}>
                            <EyeIcon className="h-5 w-5 text-gray-500" aria-hidden="true"
                                     onClick={() => setShowPassword(!showPassword)}/>
                        </div>
                    </div>
                </div>

                <div>
                    <button
                        type="submit"
                        className={`bg-gray-200 capitalize w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500`}
                    >
                        {trans('login')}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default LoginForm;
