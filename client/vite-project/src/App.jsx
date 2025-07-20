 import React, { useState } from 'react'
 import { BrowserRouter,Route,Routes } from 'react-router-dom'
 import Header from './Components/Header'
 import Home from './Components/Home'
 import Signup from './Components/StudentAuthenticcation/Signup'
 import Login from './Components/StudentAuthenticcation/Login'
 import Mycontext from './Mycontext'
 

 const App = () => {
  const [stundent,setStudent]=useState(false)
  const [email,setEmail]=useState("");
  const [department,setDepartment]=useState("");
  const [password,setPassword]=useState("");
  const [admissionNumber,setAdmissionNumber]=useState("");
   return (
    <Mycontext.Provider value={{stundent,setStudent,email,setEmail,department,setDepartment,admissionNumber,setAdmissionNumber,password,setPassword}}> 
    <BrowserRouter> 
    <Header />
     <nav>
<Routes>
  <Route path="/" element={<Home />}/>
  <Route path="/signup/student" element={<Signup />} />
    <Route path="/login/student" element={<Login />} />

  
</Routes>
     </nav>
     </BrowserRouter>
     </Mycontext.Provider>
   )
 }
 
 export default App
 
