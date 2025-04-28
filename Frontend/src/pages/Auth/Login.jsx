


// import React, { useState } from 'react';
// import AuthLayout from '../../components/layouts/AuthLayout';
// import Input from '../../components/inputs/input.jsx';
// import { Link } from 'react-router-dom';
// import { validateEmail } from '../../utils/helper.js';
// import axiosInstance from '../../utils/axiosInstance.js';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleLogin = async (e) => {
//     e.preventDefault();
//      if(!validateEmail(email)){
//       setError('Please enter a valid email address');
//       return ;
//      }
//      if(!validatePassword(password)){
//       setError('Please enter the password');
//       return ;
//      }
//      setError("");
//      }
//   // login API call

//   try{ 
//     const response = await axiosInstance.post(API_PATH.AUTH.Login,{
//       email,
//       password,

//     });

//     const {token, user} = response.data;

//     if(token){
//       localStorage.setItem("token", token);
//       Navigate("/dashboard");
//     }
//   }catch{
//     if(error.response && error.response.data.message){
//       setError(error. response.data.message);

//     }else{
//       setError("Something went wrong. please try again");
//     }
//   }

// }

//   return (
//     <AuthLayout>
//       <div className="lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center">
//         <h3 className="text-xl font-semibold text-black">Welcome Back</h3>
//         <p className="text-xs text-slate-700 mt-[5px] mb-6">
//           Please enter your login details
//         </p>

//         <form onSubmit={handleLogin}>
//           <Input
//             value={email}
//             onChange={({ target }) => setEmail(target.value)}
//             type="email"
//             placeholder="xyz@gmail.com"
//             label="Email Address"
//           />
//           <Input
//             value={password}
//             onChange={({ target }) => setPassword(target.value)}
//             type="password"
//             placeholder="••••••••"
//             label="Password"
//           />
            
//              {error && <p className="text-red-500 mt-2">{error}</p>}


//           <button type="submit" className="w-full bg-violet-500 hover:bg-violet-900 text-white font-semibold py-2 rounded mt-4">
//             Login
//           </button>
//           <p className='text[13px] text-slate-700 mt-3'>
//            Don't have an account?{" "}
//             <Link className = "font-medium text-violet-500 underline" to="/signup">SignUp</Link>
//           </p>
//         </form>
     

        
//       </div>
//     </AuthLayout>
//   );
// };

// export default Login;


import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from '../../components/layouts/AuthLayout';
import Input from '../../components/inputs/input.jsx';
import { validateEmail } from './../../utils/helper.js';
import axiosInstance from "./../../utils/axiosInstance.js"
import { API_PATHS } from './../../utils/apiPath'; // Added this line
import {UserContext} from "../../context/userContext.jsx";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const {updateUser} = useContext(UserContext);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    if (!password) { // Basic check for password (you didn't define validatePassword)
      setError('Please enter the password');
      return;
    }

    setError("");

    // login API call
    try {
      const response = await axiosInstance.post(API_PATHS.AUTH.LOGIN, {
        email,
        password,
      });

      const { token, user } = response.data;

      if (token) {
        localStorage.setItem("token", token);
        updateUser(user);
        navigate("/dashboard"); // useNavigate hook
      }
    } catch (error) {
      if (error.response && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <AuthLayout>
      <div className="lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-black">Welcome Back</h3>
        <p className="text-xs text-slate-700 mt-[5px] mb-6">
          Please enter your login details
        </p>

        <form onSubmit={handleLogin}>
          <Input
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            type="email"
            placeholder="xyz@gmail.com"
            label="Email Address"
          />
          <Input
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            type="password"
            placeholder="••••••••"
            label="Password"
          />

          {error && <p className="text-red-500 mt-2">{error}</p>}

          <button type="submit" className="w-full bg-violet-500 hover:bg-violet-900 text-white font-semibold py-2 rounded mt-4">
            Login
          </button>
          <p className="text-[13px] text-slate-700 mt-3">
            Don't have an account?{" "}
            <Link className="font-medium text-violet-500 underline" to="/signup">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </AuthLayout>
  );
};

export default Login;
