import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signUpRequest } from './helpers/apiRequest';

const Login = () => {
  // State
  const [values, setValues] = useState({
    email: 'sakibqa@gain.mail',
    password: 'aasdasdsad',
    name: 'Sakib Hasan'
  });
  const [errors, setErrors] = useState({ email: '', password: '', name: '' });

  const validEmailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const { email, password, name } = values;

  const navigate = useNavigate()

  const HandleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    const NewErrors = errors;
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
      case 'password':
        NewErrors.password = value.length < 8 ? 'Password must be 8 characters long!' : '';
        break;
      default:
        break;
    }

    setValues({ ...values, [name]: value });
    setErrors(NewErrors);
  };
  const disable = !!(
    errors &&
    (errors.email || errors.password || errors.password)
  );

  const HandleSubmit = async (e) => {
    e.preventDefault();
    if (email && password && name) {
      const registerValue = {
        email,
        password,
        name
      };
      const response = await signUpRequest(registerValue);

      if (response && response.data && response.data.profile) {
        // Redirect to login page
        navigate("/login")
        return true
      }
    }
  };

  return (
    <div className="w-full container flex mx-auto h-screen ">
      <div className="w-full max-w-md m-auto">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <p className="text-xl py-8">Sign Up From</p>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Full Name
              </label>
              <input
                value={name}
                name="name"
                onChange={(e) => HandleChange(e)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="name"
              />
              <p className="text-red-500 text-xs italic">{errors && errors.name}</p>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
            </label>
              <input
                value={email}
                name="email"
                onChange={(e) => HandleChange(e)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="email"
              />
              <p className="text-red-500 text-xs italic">{errors && errors.email}</p>
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
            </label>
              <input
                value={password}
                name="password"
                onChange={(e) => HandleChange(e)}
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
              />
              <p className="text-red-500 text-xs italic">{errors && errors.password}</p>
            </div>
            <div className="flex items-center justify-between">
              <button
                disabled={disable}
                onClick={HandleSubmit}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Sign Up
            </button>
            </div>
          </form>
          <p className="text-center text-gray-500 text-xs">
            &copy;{new Date().getFullYear()} MyBlog. All rights reserved.
        </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
