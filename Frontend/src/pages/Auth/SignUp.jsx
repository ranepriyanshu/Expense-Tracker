import React, { useState } from 'react';
import AuthLayout from '../../components/layouts/AuthLayout';
import Input from '../../components/inputs/input.jsx';
import { Link, useNavigate } from 'react-router-dom';
import { validateEmail } from '../../utils/helper.js';
import ProfilePhotoSelector from '../../components/inputs/ProfilePhotoSelector.jsx';

const SignUp = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [profilePic, setProfilePic] = useState(null);
  const [fullName, setFullName] = useState("");
  
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    let profileImageUrl = "";

    if(!fullName){

      setError("Please enter your full name");

      return ; 
    }

    if(!validateEmail(email)){
      setError('Please enter a valid email address');
    return ;}

    if(!password){
      setError('Please enter the password');
    
    return;
    }

    setError("");

    // signUp API call 

  };
  return (
    <AuthLayout>
      <div className="lg:w-[100%] h-auto md:h-full md:mt-0 flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-black">Create an Account</h3>
        <p className="text-xs text-slate-700 mt-[5px] mb-6">
          Please enter your login details
        </p> 

        <form onSubmit={handleSignUp}>
          <ProfilePhotoSelector
          image = {profilePic}
          setImage = {setProfilePic}
          
          ></ProfilePhotoSelector >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              value={fullName}
              onChange={({target})=>setFullName(target.value)}
              type="text"
              placeholder="Full Name"
              label="Full Name"
            />
            <Input
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            type="email"
            placeholder="xyz@gmail.com"
            label="Email Address"
          />
          <div className="col-span-2">
          <Input
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            type="password"
            placeholder="••••••••"
            label="Password"
          />
          </div>

          </div>
            {error && <p className="text-red-500 mt-2">{error}</p>}
          
          
                    <button type="submit" className="w-full bg-violet-500 hover:bg-violet-900 text-white font-semibold py-2 rounded mt-4">
                      Sign Up
                    </button>
                    <p className='text[13px] text-slate-700 mt-3'>
                      Already have an account?{" "}
                      <Link className = "font-medium text-violet-500 underline" to="/login">Login</Link>
                    </p>
          </form>

        </div>
        </AuthLayout>
  )
}

export default SignUp