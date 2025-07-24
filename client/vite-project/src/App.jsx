 import React, { useState } from 'react'
 import { BrowserRouter,Route,Routes } from 'react-router-dom'
 import Header from './Components/Header'
 import Home from './Components/Home'
 import Signup from './Components/StudentAuthenticcation/Signup'
 import Login from './Components/StudentAuthenticcation/Login'
 import Sendpdfstudent from './Components/StudentAuthenticcation/Sendpdfstudent'
 import Mycontext from './Mycontext'
 import ViewPdf from './Components/StudentAuthenticcation/ViewPdf'
 import Logout from './Components/StudentAuthenticcation/Logout'
 import VerifyOtp from './Components/StudentAuthenticcation/VerifyOtp'
 

 const App = () => {
  const [student,setStudent]=useState(false)
  const [email,setEmail]=useState("");
  const [department,setDepartment]=useState("");
  const [password,setPassword]=useState("");
  const [admissionNumber,setAdmissionNumber]=useState("");
   return (
    <Mycontext.Provider value={{student,setStudent,email,setEmail,department,setDepartment,admissionNumber,setAdmissionNumber,password,setPassword}}> 
    <BrowserRouter> 
    <Header />
     <nav>
<Routes>
  <Route path="/" element={<Home />}/>
  <Route path="/signup/student" element={<Signup />} />
    <Route path="/login/student" element={<Login />} />
        <Route path="/logout/student" element={<Logout/>} />
    <Route path="/send/pdf/student" element={<Sendpdfstudent />} />
    <Route path="/view/pdf/student" element ={<ViewPdf />}/>
<Route path="/verifyotp/student" element={<VerifyOtp />}/>
    

  
</Routes>
     </nav>
     </BrowserRouter>
     </Mycontext.Provider>
   )
 }
 
 export default App
 
