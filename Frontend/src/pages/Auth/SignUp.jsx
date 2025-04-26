import React, { useState } from 'react';
import AuthLayout from '../../components/layouts/AuthLayout';
import Input from '../../components/inputs/input.jsx';
import { Link } from 'react-router-dom';
import { validateEmail } from '../../utils/helper.js';

const SignUp = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [profilePic, setProfilePic] = useState(null);
  const [fullName, setFullName] = useState("");
  
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    
  }
  return (
    <AuthLayout>
      <div className="lg:w-[100%] h-auto md:h-full md:mt-0 flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-black">Create an Account</h3>
        <p className="text-xs text-slate-700 mt-[5px] mb-6">
          Please enter your login details
        </p> 

        <form onSubmit={handleSignUp}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              value={fullName}
              onChange={({target})=>setFullName(target.value)}
              type="text"
              placeholder="Full Name"
              label="Full Name"
            />

          </div>
          </form>

        </div>
        </AuthLayout>
  )
}

export default SignUp