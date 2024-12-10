import React from 'react'
import Signup from './components/Signup'
import Login from './components/Login'
import Dashboard from './components/Dashboard.jsx'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Forgetpassword from './components/Forgetpassword'
import Resetpassword from './components/Resetpassword'


function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>

<Route path='/signup' element={<Signup/>}/>

<Route path='/login' element={<Login/>}/>

<Route path='/dashboard' element={<Dashboard/>}/>

<Route path='/forgetpassword' element={<Forgetpassword/>}/>

<Route path='/reset-password/:randomString/:expirationTimestamp' element={<Resetpassword/>}/>

<Route path='*' element={<Login/>}/>

   </Routes>
   
   </BrowserRouter>
   
   </>
  )
}

export default App
