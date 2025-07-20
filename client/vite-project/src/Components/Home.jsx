import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import Mycontext from '../Mycontext';

const Home = () => {
    const {stundent,setStudent}=useContext(Mycontext)
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-6 text-center">
        Welcome to PDF Hub
      </h1>
      <p className="text-lg text-gray-700 mb-10 text-center max-w-md">
        A platform for students, teachers, and admins to upload and access subject-wise PDFs easily.
      </p>

      <div className="flex flex-col md:flex-row gap-6">
        <Link to="/signup/student">
          <button
           onClick={()=>setStudent(!stundent)}
           className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-2xl shadow-md transition-all duration-300">
            Sign up as Student
          </button>
        </Link>
        <Link to="/signup-teacher">
          <button className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-2xl shadow-md transition-all duration-300">
            Sign up as Teacher
          </button>
        </Link>
        <Link to="/signup-admin">
          <button className="px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-2xl shadow-md transition-all duration-300">
            Sign up as Admin
          </button>
        </Link>
        {console.log(stundent)}
      </div>
    </div>
  );
};

export default Home;
