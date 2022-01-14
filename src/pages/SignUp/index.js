import React, { useState } from 'react';
import { REGISTER_NEW_USER } from './createUser.graphql';
import { useMutation } from '@apollo/client';
import { Redirect } from 'react-router'

const Login = () => {
    //State
    const [values, setValues] = useState({ email: 'sakibqa@gain.mail', password: 'aasdasdsad', name: 'Sakib Hasan', phone: '0176238121' });
    const [errors, setErrors] = useState({ email: '', password: '', name: '', phone: '' });

    const validEmailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const { email, password, name, phone } = values;

    const [createUser, { loading, error, data }] = useMutation(REGISTER_NEW_USER)

    if (error) {
        console.log('error', error);
    }
    if (loading) {
        console.log('Loading...')
    }
    if (data && data.createUser && data.createUser.token) {
        //Redirect to login page
        return <Redirect to='/login' />
    }

    const HandleChange = (event) => {
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
    const disable = errors && (errors.email || errors.password || errors.password || errors.phone) ? true : false;

    const HandleSubmit = async (e) => {
        e.preventDefault();
        if (email && password && name && phone) {
            await createUser({
                variables: {
                    inputData: values
                }
            })
        }

    }

    return (
        <div className="w-full container mx-auto pt-5">
            <div className="w-full justify-center max-w-xs mx-auto">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="name">
                            Full Name</label>
                        <input value={name} name="name" onChange={(e) => HandleChange(e)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="name" />
                        <p className="text-red-500 text-xs italic">{errors && errors.name}</p>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="name">
                            Phone Number</label>
                        <input value={phone} name="phone" onChange={(e) => HandleChange(e)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="text" placeholder="phone" />
                        <p className="text-red-500 text-xs italic">{errors && errors.phone}</p>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="email">
                            Email</label>
                        <input value={email} name="email" onChange={(e) => HandleChange(e)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="email" />
                        <p className="text-red-500 text-xs italic">{errors && errors.email}</p>
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                            Password
                     </label>
                        <input value={password} name="password" onChange={(e) => HandleChange(e)} className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                        <p className="text-red-500 text-xs italic">{errors && errors.password}</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <button disabled={disable} onClick={HandleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Sign Up
                               </button>
                    </div>
                </form>
                <p className="text-center text-gray-500 text-xs">
                    &copy;2021 Acme Corp. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Login;
