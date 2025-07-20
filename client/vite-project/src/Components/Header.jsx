 import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Mycontext from '../Mycontext';

const Header = () => {
  const { stundent, setStudent } = useContext(Mycontext);

  return (
    <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <div className="text-3xl font-extrabold text-blue-700 tracking-wide">
        PDF Hub
      </div>

      <nav className="flex items-center gap-8">
        <Link
          to="/"
          className="text-lg font-semibold text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300 shadow-sm"
        >
          Home
        </Link>

        {stundent && (
          <div>
          <Link
            to="/signup/student"
            className="text-lg font-semibold text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300 shadow-sm"
          >
            Signup Student
          </Link>
          <Link
            to="/login/student"
            className="text-lg font-semibold text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300 shadow-sm"
          >
            Login Student
          </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;


