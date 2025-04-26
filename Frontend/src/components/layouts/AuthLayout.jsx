// import React from 'react'

// import image1 from '../../assets/images/image1.png'
// import { LuTrendingUp } from 'react-icons/lu'   // ✅ Correct icon imported

// // StatsInfoCard moved up
// const StatsInfoCard = ({ icon, label, value, color }) => {
//   return (
//     <div className="flex gap-6 bg-white p-4 rounded-xl shadow-md shadow-purple-400/10 border border-gray-200/50 z-1">
//       <div className={`w-12 h-12 flex items-center justify-center text-[26px] text-white ${color} rounded-full drop-shadow-xl`}>
//         {icon}
//       </div>
//       <div>
//         <h6 className="text-xs text-gray-500 mb-1">{label}</h6>
//         <span>${value}</span>
//       </div>
//     </div>
//   );
// };

// const AuthLayout = ({ children }) => {
//   return (
//     <div className='flex'>
//       {/* Left side */}
//       <div className="w-screen h-screen md:w-[60vw] px-12 pt-8 pb-12">
//         <h2 className="text-lg font-medium text-black">Expense Tracker</h2>
//         {children}
//       </div>

//       {/* Right side */}
//       <div className="hidden md:block w-[40vw] h-screen bg-violet-50 bg-cover bg-center overflow-hidden p-8 relative">

//         {/* Decorative blocks */}
//         <div className='w-48 h-48 rounded-[40px] bg-slate-600 absolute -top-7 -left-5' />
//         <div className='w-48 h-56 rounded-[40px] border-[20px] border-slate-300 absolute top-[30%] -right-10' />
//         <div className='w-48 h-48 rounded-[40px] bg-sky-400 absolute -bottom-7 -left-5' />

//         {/* Card */}
//         <div className="grid grid-cols-1 z-20 relative">
//           <StatsInfoCard
//             icon={<LuTrendingUp />}
//             label="Track Your Income & Expenses"
//             value="540,000"
//             color="bg-violet-500" // ✅ Changed color to a valid Tailwind color
//           />
//         </div>

//         {/* Image */}
//         <img src={image1} alt="card" className='w-96 lg:w-[90%] absolute bottom-10 shadow-lg shadow-blue-400/15' />
//       </div>
//     </div>
//   );
// };

// export default AuthLayout;

import React from 'react';
import image1 from '../../assets/images/image1.png';
import { LuTrendingUp } from 'react-icons/lu';

const StatsInfoCard = ({ icon, label, value, color }) => {
  return (
    <div className="flex gap-6 bg-white p-4 rounded-xl shadow-md shadow-purple-400/10 border border-gray-200/50 z-1">
      <div className={`w-12 h-12 flex items-center justify-center text-[26px] text-white ${color} rounded-full drop-shadow-xl`}>
        {icon}
      </div>
      <div>
        <h6 className="text-xs text-gray-500 mb-1">{label}</h6>
        <span>${value}</span>
      </div>
    </div>
  );
};

const AuthLayout = ({ children }) => {
  return (
    <div className="flex">
      {/* Left side */}
      <div className="w-screen h-screen md:w-[60vw] px-12 pt-8 pb-12">
        <h2 className="text-lg font-medium text-black">Expense Tracker</h2>
        {children}
      </div>

      {/* Right side */}
      <div className="hidden md:block w-[40vw] h-screen bg-violet-50 bg-cover bg-center overflow-hidden p-8 relative">

        {/* Decorative blocks */}
        <div className="w-48 h-48 rounded-[40px] bg-slate-600 absolute -top-7 -left-5" />
        <div className="w-48 h-56 rounded-[40px] border-[20px] border-slate-300 absolute top-[30%] -right-10" />
        <div className="w-48 h-48 rounded-[40px] bg-sky-400 absolute -bottom-7 -left-5" />

        {/* Card */}
        <div className="grid grid-cols-1 z-20 relative">
          <StatsInfoCard
            icon={<LuTrendingUp />}
            label="Track Your Income & Expenses"
            value="540,000"
            color="bg-violet-500"
          />
        </div>

        {/* Image */}
        <img src={image1} alt="card" className="w-96 lg:w-[90%] absolute bottom-10 shadow-lg shadow-blue-400/15" />
      </div>
    </div>
  );
};

export default AuthLayout;
