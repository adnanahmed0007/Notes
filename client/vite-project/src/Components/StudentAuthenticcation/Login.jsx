 import React, { useContext } from 'react';
import Mycontext from '../../Mycontext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
const Login = () => {
  const navigate=useNavigate();
  const { email, setEmail, password, setPassword } = useContext(Mycontext);

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:9901/api/auth/stuednt/login',
        {
          email: email.trim().toLowerCase(),
          password: password.trim(),
        },
        { withCredentials: true }
      );

      if (response) {
         alert(`${response.data.message}. Please check your Gmail — OTP has been sent.`);
         navigate('/verifyotp/student');
        console.log('Login success:', response);
      }
    } catch (e) {
      console.log('Login error:', e);
      if (e.response && e.response.status === 400) {
        alert(e.response.data.message);
      }
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-md border border-black">
        <h2 className="text-3xl font-bold text-center text-black mb-2">
          Welcome Back
        </h2>
        <p className="text-center text-black mb-6">
          Please log in to your student dashboard
        </p>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block mb-1 font-medium text-black">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-black">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-lg hover:bg-opacity-80 transition duration-300 font-semibold"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

