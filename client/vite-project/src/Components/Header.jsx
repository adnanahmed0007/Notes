 import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Mycontext from '../Mycontext';

const Header = () => {
  const { student } = useContext(Mycontext);

  return (
    <>
      {/* Top Header */}
      <header className="bg-white shadow-md py-4 px-6 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        {/* Logo */}
        <div className="text-3xl font-extrabold text-black tracking-wide">
          PDF Hub
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap gap-4 items-center">
          <Link
            to="/"
            className="text-base md:text-lg font-medium text-white bg-black px-4 py-2 rounded-lg hover:bg-gray-800 transition duration-300 shadow"
          >
            Home
          </Link>

          {student && (
            <>
              <Link
                to="/signup/student"
                className="text-base md:text-lg font-medium text-white bg-black px-4 py-2 rounded-lg hover:bg-gray-800 transition duration-300 shadow"
              >
                Signup Student
              </Link>

              <Link
                to="/login/student"
                className="text-base md:text-lg font-medium text-white bg-black px-4 py-2 rounded-lg hover:bg-gray-800 transition duration-300 shadow"
              >
                Login Student
              </Link>
              <Link
                to="/logout/student"
                className="text-base md:text-lg font-medium text-white bg-black px-4 py-2 rounded-lg hover:bg-gray-800 transition duration-300 shadow"
              >
                Logout
              </Link>
              
            </>
          )}
        </nav>
      </header>

      {/* Sidebar only for logged in student */}
      {student && (
        <aside className="fixed top-20 left-0 w-48 h-full bg-gray-100 shadow-lg py-6 px-4 space-y-4">
          <Link
            to="/send/pdf/student"
            className="block text-base font-semibold text-gray-800 bg-white border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-200 transition"
          >
            Send PDF
          </Link>
          <Link
            to="/view/pdf/student"
            className="block text-base font-semibold text-gray-800 bg-white border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-200 transition"
          >
            View PDF
          </Link>
        </aside>
      )}
    </>
  );
};

export default Header;
