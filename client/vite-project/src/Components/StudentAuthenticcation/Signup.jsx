 import React, { useContext } from 'react';
import Mycontext from '../../Mycontext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
const Signup = () => {
  const navigate = useNavigate(); // ✅ Step 2
  const {
    email,
    setEmail,
    department,
    setDepartment,
    admissionNumber,
    setAdmissionNumber,
    password,
    setPassword,
  } = useContext(Mycontext);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:9901/api/auth/student/signup',
        {
          email: email.trim().toLowerCase(),
          department: department.trim().toLowerCase(),
          password: password.trim(),
          admissionNumber: admissionNumber.trim(),
        },
        { withCredentials: true }
      );

      if (response&&response.status==200) {
         alert(`${response.data.message}. Please check your Gmail — OTP has been sent.`);
         navigate('/verifyotp/student');
      }
    } catch (error) {
      console.error(error);
      if (error.response && error.response.status === 400) {
        alert(error.response.data.message);
      }
    }
  }

  return (
    <div className="min-h-screen   flex items-center justify-center px-4">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-black mb-6">
          Student Signup
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Admission Number */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-1">Admission Number</label>
            <input
              type="number"
              placeholder="Enter your admission number"
              onChange={(e) => setAdmissionNumber(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Department */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-1">Department</label>
            <input
              type="text"
              placeholder="Enter your department"
              onChange={(e) => setDepartment(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-lg font-semibold hover:bg-gray-900 transition duration-300"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
