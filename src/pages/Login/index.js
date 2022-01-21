import React, { useCallback, useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { Slide, toast, ToastContainer } from 'react-toastify';
import { toastCall, validateEmail } from '@/utils';
import { Loader } from '@/components/UI';
import { loginRequest } from './helpers/apiRequest';
import { setToken } from './helpers/login-helper';

const Login = () => {
  //  state
  const [login, setLogin] = useState({
    fields: {
      user: '',
      password: ''
    },
    errors: {
      user: '',
      password: ''
    }
  });

  const [showErrorMsg, setShowErrorMsg] = useState(false);
  const [disableLogin, setDisableLogin] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    fields: { user, password }
  } = login;

  // validation
  const validate = useCallback((name, value) => {
    switch (name) {
      case 'user':
        if (!value) {
          setDisableLogin(true);
          return 'Email is required!';
        }
        if (!validateEmail(value)) {
          setDisableLogin(true);
          return 'Please provide a valid email!';
        }

        setDisableLogin(false);
        break;
      case 'password':
        if (!value) {
          setDisableLogin(true);
          return 'Password is required!';
        }
        setDisableLogin(false);
        break;
      default: {
        return '';
      }
    }
  }, []);

  // change input
  const handleChange = (e) => {
    setLogin({
      errors: {
        ...login.errors,
        [e.target.name]: validate(e.target.name, e.target.value)
      },
      fields: {
        ...login.fields,
        [e.target.name]: e.target.value
      }
    });
  };

  // location and navigate
  const navigate = useNavigate();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: '/' } };

  const handleTokenResult = useCallback(
    (tokenResult) => {
      if (tokenResult.msg === 'Invalid credentials') {
        setShowErrorMsg(true);
        setLoading(false);
        setTimeout(() => {
          setShowErrorMsg(false);
        }, 3000);
      } else {
        navigate(from);
        setLoading(false);
      }
    },
    [from, navigate]
  );

  useEffect(() => {
    validate();
  }, [validate]);

  const HandleSubmit = async (event) => {
    try {
      event.preventDefault();
      setLoading(true);

      const validationErrors = {};

      // check errors
      Object.keys(login.fields).forEach((name) => {
        const error = validate(name, login.fields[name]);
        if (error && error.length > 0) {
          validationErrors[name] = error;
        }
      });

      // check validation
      if (Object.keys(validationErrors).length > 0) {
        setLogin({
          fields: {
            ...login.fields
          },
          errors: {
            ...validationErrors
          }
        });
      }

      if (login.fields.user && login.fields.password) {
        const loginValue = {
          user: login.fields.user,
          password: login.fields.password
        };

        const response = await loginRequest(loginValue);
        if (response && response.token) {
          const tokenInfo = await setToken(response);
          handleTokenResult(tokenInfo);
        }
      }
    } catch (error) {
      toastCall('danger', error?.message || 'Internal Server error', 'top-right');
    }
  };

  const isEnabled = !login.errors.user && !login.errors.password;
  console.log({ loading })
  return (
    <div>
      <div className="w-full container flex mx-auto h-screen ">
        <div className="w-full max-w-md m-auto">
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <p className="text-xl py-8">Login From</p>
            <form className="" onSubmit={HandleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  value={user}
                  name="email"
                  autoComplete="off"
                  onChange={(e) => handleChange(e)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="email"
                />
                <p className="text-red-500 text-xs italic">{login.errors.user}</p>
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                  Password
                </label>
                <input
                  value={password}
                  name="password"
                  autoComplete="off"
                  onChange={(e) => handleChange(e)}
                  className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="******************"
                />
                <p className="text-red-500 text-xs italic">{login.errors.password}</p>
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                  disabled={loading || !isEnabled || disableLogin}
                >
                  {loading && loading ? (
                    <div className="d-flex align-items-center justify-content-center">
                      <span className="px-1">Authenticating </span>
                      <span>
                        <Loader variant="#fff" width="24px" height="24px" />
                      </span>
                    </div>
                  ) : (
                    <span>Login</span>
                  )}
                </button>
                <Link
                  to="/"
                  className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                >
                  Forgot Password?
                </Link>
              </div>
            </form>
          </div>
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
            (toast.error('Iinvalid email or password'),
            {
              toastId: '123'
            })
          }
        </ToastContainer>
      )}
    </div>
  );
};

export default Login;
