import React, { useState, useCallback } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { ToastContainer, toast, Slide } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import signUpRequest from './helpers/signUpRequest';
import { Loader } from '@/components/UI';
import { validateEmail, toastCall } from '@/utils';

const SignUp = () => {
  // State
  const [values, setValues] = useState({
    fields: {
      email: 'sakissb2@gain.media',
      fullname: 'Sakib Hasan',
      password: '123456'
    },
    errors: {
      fullname: '',
      email: '',
      password: ''
    }
  });

  const [showErrorMsg, setShowErrorMsg] = useState();
  const [disablesignup, setDisablesignup] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigator = useNavigate();
  // Redux
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.Authontication.isLoggedIn);

  // validation
  // eslint-disable-next-line consistent-return
  const validate = useCallback((name, value) => {
    switch (name) {
      case 'fullname':
        if (!value) {
          setDisablesignup(true);
          return 'Name is required!';
        }
        setDisablesignup(false);
        break;
      case 'email':
        if (!value) {
          setDisablesignup(true);
          return 'Email is required!';
        }
        if (!validateEmail(value)) {
          setDisablesignup(true);
          return 'Please provide a valid email!';
        }
        setDisablesignup(false);
        break;
      case 'password':
        if (!value) {
          setDisablesignup(true);
          return 'Password is required!';
        }
        setDisablesignup(false);
        break;
      default: {
        return '';
      }
    }
  }, []);

  // change input
  const HandleChange = (e) => {
    setValues({
      fields: {
        ...values.fields,
        [e.target.name]: e.target.value
      },
      errors: {
        ...values.errors,
        [e.target.name]: validate(e.target.name, e.target.value)
      }
    });
  };

  const handleSignupResult = (result) => {
    setLoading(false);
    if (result.error) {
      setShowErrorMsg({ error: result.error });
      setTimeout(() => {
        setShowErrorMsg(false);
      }, 1000);
    } else {
      navigator('/login');
    }
  };
  const HandleSubmit = async (event) => {
    try {
      event.preventDefault();
      setLoading(true);

      const validationErrors = {};

      // check errors
      Object.keys(values.fields).forEach((name) => {
        const error = validate(name, values.fields[name]);
        if (error && error.length > 0) {
          validationErrors[name] = error;
        }
      });

      // check validation
      if (Object.keys(validationErrors).length > 0) {
        setValues({
          fields: {
            ...values.fields
          },
          errors: {
            ...validationErrors
          }
        });
      }

      if (values.fields.email && values.fields.password && values.fields.fullname) {
        const signUpValue = {
          email: values.fields.email,
          password: values.fields.password,
          name: values.fields.fullname
        };

        dispatch(signUpRequest(signUpValue)).then((data) => {
          handleSignupResult(data);
        });
      }
    } catch (error) {
      toastCall('danger', error?.message || 'Internal Server error', 'top-right');
    }
  };

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

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
                value={values.fields.fullname}
                name="fullname"
                onChange={(e) => HandleChange(e)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="name"
              />
              <p className="text-red-500 text-xs italic">{values.errors.fullname}</p>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                value={values.fields.email}
                name="email"
                onChange={(e) => HandleChange(e)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="email"
              />
              <p className="text-red-500 text-xs italic">{values.errors.email}</p>
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                value={values.fields.password}
                name="password"
                onChange={(e) => HandleChange(e)}
                className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
              />
              <p className="text-red-500 text-xs italic">{values.errors.password}</p>
            </div>
            <div className="flex items-center justify-between">
              <button
                disabled={disablesignup}
                onClick={HandleSubmit}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                {loading && loading ? (
                  <div className="flex align-items-center justify-content-center">
                    <span className="px-1">Sign Up </span>
                    <span>
                      <Loader variant="#fff" width="24px" height="24px" />
                    </span>
                  </div>
                ) : (
                  <span>Sign Up</span>
                )}
              </button>
            </div>
          </form>
          <p className="text-center text-gray-500 text-xs">
            &copy;{new Date().getFullYear()} MyBlog. All rights reserved.
          </p>
        </div>
      </div>
      {showErrorMsg && (
        <ToastContainer
          transition={Slide}
          position="top-right"
          autoClose={3000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        >
          {
            (toast.error(showErrorMsg.message),
            {
              toastId: '123'
            })
          }
        </ToastContainer>
      )}
    </div>
  );
};

export default SignUp;
