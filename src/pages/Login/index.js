import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from './loginUser.graphql';
import { Redirect } from 'react-router';
import Cookies from 'js-cookie';

const Login = () => {

    //State
    const [values, setValues] = useState({ email: 'sakibqa@gain.mail', password: 'aasdasdsad' });
    const [errors, setErrors] = useState({ email: '', password: '' });

    const validEmailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const { email, password } = values;

    const [loginUser, { loading, error, data }] = useMutation(LOGIN_USER, {
        fetchPolicy: "no-cache"
    })

    // Store token if login is successful
    if (data && data.loginUser && data.loginUser.token) {
        localStorage.setItem('token', data.loginUser.token);
        Cookies.set('authToken', data.loginUser.token)

        //Redirect to home page
        return <Redirect to='/' />
    }

    if (error) {
        console.log('error', error);
    }
    if (loading) {
        console.log('Loading...')
    }


    const handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;

        let NewErrors = errors;
        switch (name) {
            case 'name':
                NewErrors.name = value.length < 5 ? 'Name must be 5 characters long!' : '';
                break;
            case 'email':
                if (value) {
                    NewErrors.email = validEmailRegex.test(value) ? '' : 'Email is not valid!';
                } else {
                    NewErrors.email = 'Email is required!';
                }
                break;
            case 'phone':
                NewErrors.phone = value.length < 11 ? 'Phone Number must be 11 characters long!' : '';
                break;
            case 'password': NewErrors.password = value.length < 8 ? 'Password must be 8 characters long!' : '';
                break;
            default:
                break;
        }

        setValues({ ...values, [name]: value });
        setErrors(NewErrors);
    }

    const HandleSubmit = async (event) => {
        event.preventDefault();
        if (email && password) {
            const response = await loginUser({
                variables: {
                    inputData: values
                }
            })
            console.log({ response })
        }

    }


    return (
        <div className="w-full container mx-auto pt-5">
            <div className="w-full justify-center max-w-xs mx-auto">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="email">
                            Email</label>
                        <input value={email} name="email" autoComplete="off" onChange={(e) => handleChange(e)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="email" />
                        <p className="text-red-500 text-xs italic">{errors && errors.email}</p>
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                            Password
                     </label>
                        <input value={password} name="password" autoComplete="off" onChange={(e) => handleChange(e)} className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                        <p className="text-red-500 text-xs italic">{errors && errors.password}</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <button onClick={HandleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Sign In
                               </button>
                        <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                            Forgot Password?
                                </a>
                    </div>
                </form>
                <p className="text-center text-gray-500 text-xs">
                    &copy;2021 Acme Corp. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Login;
