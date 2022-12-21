import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { saveUserWithToken } from '../../Api/Auth';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../Hooks/useTitle';

const SignUp = () => {

  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({
    UserName: '',
    photoUrl: '',
    UserEmail: '',
    UserPassword: '',
  });

  useTitle('Sign Up');

  const { createUser, updateUserProfile, loginWithGoogle } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userInfo);
    const form = e.target;

    // sign up
    createUser(userInfo.UserEmail, userInfo.UserPassword)
      .then((result) => {
        const { user } = result;
        console.log(user);
        // update user profile
        updateUserProfile(userInfo.UserName, userInfo.photoUrl)
          .then(() => {
            toast.success('User Updated')
            saveUserWithToken(user);
            navigate('/');
          })
          .catch((error) => {
            toast.error(error.message);
          })

        form.reset();
        toast.success('Sign Up Successful')
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.message)
      })
  };

  const googleSignUp = () => {
    loginWithGoogle()
      .then((result) => {
        const { user } = result;
        console.log(user);
        toast.success('Google Sign Up Successful');
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.message);
      })
  };

  return (
    <div>
      <div className="flex justify-center my-4">
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl shadow-md">
          <h1 className="text-2xl font-bold text-center">Sign Up</h1>
          <form onSubmit={handleSubmit} className="space-y-6 ng-untouched ng-pristine ng-valid">
            {/* user name */}
            <div className="space-y-1 text-sm">
              <label htmlFor="name" className="block dark:text-gray-400">Name</label>
              <input onChange={(e) => setUserInfo({ ...userInfo, UserName: e.target.value })} type="name" name="name" id="name" placeholder="Name" className="w-full px-4 py-3 rounded-md border-2 border-gray-500" />
            </div>
            {/* photo url */}
            <div className="space-y-1 text-sm">
              <label htmlFor="photoUrl" className="block dark:text-gray-400">Photo URL</label>
              <input onChange={(e) => setUserInfo({ ...userInfo, photoUrl: e.target.value })} type="photoUrl" name="photoUrl" id="photoUrl" placeholder="Photo URL" className="w-full px-4 py-3 rounded-md border-2 border-gray-500" />
            </div>
            {/* email */}
            <div className="space-y-1 text-sm">
              <label htmlFor="email" className="block dark:text-gray-400">Email</label>
              <input onChange={(e) => setUserInfo({ ...userInfo, UserEmail: e.target.value })} type="email" name="email" id="email" placeholder="Email" className="w-full px-4 py-3 border-2 rounded-md border-gray-500" />
            </div>
            {/* password */}
            <div className="space-y-1 text-sm">
              <label htmlFor="password" className="block dark:text-gray-400">Password</label>
              <input onChange={(e) => setUserInfo({ ...userInfo, UserPassword: e.target.value })} type="password" name="password" id="password" placeholder="Password" className="w-full px-4 border-2 py-3 rounded-md border-gray-500" />
            </div>
            <button className="block w-full p-3 text-center rounded-md bg-orange-500 text-white font-semibold">Sign Up</button>
          </form>
          <div className="flex flex-col justify-center items-center">
            <button onClick={googleSignUp} className="block w-full p-3 text-center rounded-md bg-gray-100 text-black font-semibold">Sign Up With Google</button>
          </div>
          <p className="text-xl text-center sm:px-6">Already have an account?
            <Link rel="noopener noreferrer" to="/login" className="underline text-orange-500 font-semibold">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;