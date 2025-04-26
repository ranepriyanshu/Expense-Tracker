import React from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";

import Login from './pages/Auth/Login'  
import SignUp from './pages/Auth/SignUp'
import Income from './pages/Auth/Dashboard/Income';
import Expense from './pages/Auth/Dashboard/Expense';
import Home from './pages/Auth/Dashboard/Home';  




const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Root/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Home />} />
          <Route path="/income" element={<Income />} />
          <Route path="/expense" element={<Expense />} />
        </Routes>
      </Router>
      </div>
  )
}

export default App


const Root = () => {

  // check if token is exists in localstorage
 
   const isAuthanticated = !!localStorage.getItem('token');

    return isAuthanticated ? (<Navigate to="/dashboard" />) :  ( <Navigate to="/login" />);
  ;
}