import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { setAuthToken } from '../../Api/Auth';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../Hooks/useTitle';

const Login = () => {
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: ''
  });

  useTitle('Login');

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const { loginUser, loginWithGoogle } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userInfo);
    const form = e.target;

    loginUser(userInfo.email, userInfo.password)
      .then((result) => {
        const { user } = result;
        console.log(user.email);

        const currentUser = {
          email: user.email
        }
        // get jwt token
        fetch('https://cloud-kitchen-assignment-server.vercel.app/jwt', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(currentUser)
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            // save token to local storage
            localStorage.setItem('authToken', data.token);
            navigate(from, { replace: true });
          });
        form.reset();
        toast.success('Successfully logged in');
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.message);
      })
  };

  const googleSignIn = () => {
    loginWithGoogle()
      .then((result) => {
        const { user } = result;
        console.log(user);

        setAuthToken(user);

        navigate(from, { replace: true });
        toast.success('Google Sign in Successful');
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.message);
      })
  };

  return (
    <div className="flex justify-center my-4">
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-orange-100">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <form onSubmit={handleSubmit} className="space-y-6 ng-untouched ng-pristine ng-valid">
          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="block dark:text-gray-400">Email</label>
            <input onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })} type="email" name="email" id="email" placeholder="Email" className="w-full px-4 py-3 rounded-md border-2 border-gray-500" />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block dark:text-gray-400">Password</label>
            <input onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })} type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border-2 border-gray-500" />
            <div className="flex justify-end text-xs dark:text-gray-400">
              <Link rel="noopener noreferrer" to="/">Forgot Password?</Link>
            </div>
          </div>
          <button className="block w-full p-3 text-center rounded-md bg-orange-500 text-white font-semibold">Login</button>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          <p className="px-3 text-sm dark:text-gray-400">Login with social accounts</p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        </div>
        <div className="flex justify-center space-x-4">
          <button onClick={googleSignIn} aria-label="Log in with Google" className="p-3 rounded-sm">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
          </button>
        </div>
        <p className="text-xl text-center sm:px-6">Don't have an account?
          <Link rel="noopener noreferrer" to="/signup" className="underline text-orange-500 font-semibold">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;