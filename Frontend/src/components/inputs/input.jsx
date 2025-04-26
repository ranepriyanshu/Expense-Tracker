// import React from 'react'
// import { useState } from 'react';
// import {FaRegEye, FaRegEyeSlash} from 'react-icons/fa6'

// const Input = ({value , onChange, type , placeholder, label} ) => {

//     const [showPassword, setShowpassword] = useState(false);
//     const toggleShowPassword = () => {
//         setShowpassword(!showPassword);
//     }
//   return (
//     <div>
//         <label className= "text-[13px] text-slate-800">{label}</label>  
//         <div className="input-box">
//             <input type={type=='password'? showPassword? 'text': 'password': type} 
//             placeholder={placeholder}
//             className='w-full outline-none bg-transparent'
//             value={value}
//             onChange={(e)=>onChange(e)}
//             />
//             {type==='password' && (
//                 <>
//                 {showPassword ?( <FaRegEyeSlash 
//                 size={22}
//                  className='cursor-pointer text-slate-800' 
//                  onClick={toggleShowPassword()} />)

//                  : ( <FaRegEye 
//                     size={22}
//                  onClick={toggleShowPassword()} 
//                  className='text-slate-400 cursor-p'/>)}
//                 </>
//                 )}
//         </div>
//     </div>
//   )
// }

// export default Input









import React, { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6';

const Input = ({ value, onChange, type, placeholder, label }) => {
  const [showPassword, setShowpassword] = useState(false);
  const toggleShowPassword = () => {
    setShowpassword(!showPassword);
  };

  return (
    <div>
      <label className="text-[13px] text-slate-800">{label}</label>
      <div className="input-box flex items-center border-b border-slate-300">
        <input
          type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
          placeholder={placeholder}
          className="w-full outline-none bg-transparent py-2"
          value={value}
          onChange={onChange}
        />
        {type === 'password' && (
          <>
            {showPassword ? (
              <FaRegEyeSlash
                size={22}
                className="cursor-pointer text-slate-800"
                onClick={toggleShowPassword} // ✅ pass reference, not call
              />
            ) : (
              <FaRegEye
                size={22}
                className="cursor-pointer text-slate-400"
                onClick={toggleShowPassword} // ✅ pass reference, not call
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Input;
