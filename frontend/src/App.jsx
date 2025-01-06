import React from 'react';
import Home from './pages/home/Home.jsx';
import Login from './pages/login/Login.jsx';
import Signup from './pages/signup/Signup.jsx'


const App = () => {
  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      {/* <Signup /> */}
      {/* <Login /> */}
      <Home />
    </div>
  )
}

export default App
