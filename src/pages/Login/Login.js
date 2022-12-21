import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { saveUserWithToken } from '../../Api/Auth';
import Spinner from '../../components/Spinner/Spinner';
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

  const { loginUser, loginWithGoogle, loading, setLoading } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userInfo);
    const form = e.target;

    loginUser(userInfo.email, userInfo.password)
      .then((result) => {
        const { user } = result;
        console.log(user.email);
        saveUserWithToken(user);
        form.reset();
        toast.success('Successfully logged in');
        setLoading(false);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.message);
        setLoading(false);
      })
  };

  const googleSignIn = () => {
    loginWithGoogle()
      .then((result) => {
        const { user } = result;
        saveUserWithToken(user);
        console.log(user);
        toast.success('Google Sign in Successful');
        navigate(from, { replace: true });
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.message);
        setLoading(false);
      })
  };

  // spinner for loading
  if (loading) {
    return <Spinner/>
  }

  return (
    <div className="flex justify-center my-4">
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl shadow-md">
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
       
        <div className="flex flex-col justify-center items-center">
          <button onClick={googleSignIn} className="block w-full p-3 text-center rounded-md bg-gray-100 text-black font-semibold">Login With Google</button>
        </div>
        <p className="text-xl text-center sm:px-6">Don't have an account?
          <Link rel="noopener noreferrer" to="/signup" className="underline text-orange-500 font-semibold">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;