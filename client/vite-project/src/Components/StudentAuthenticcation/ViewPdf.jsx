 import React, { useState } from 'react';
import axios from 'axios';

const ViewPdf = () => {
  const [pdfs, setPdfs] = useState([]);
  const [pdfName, setPdfName] = useState('');
  const [department, setDepartment] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchPdfs = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        'http://localhost:9901/api/pdf/student/get/pdf',
        { pdfName, department },
        { withCredentials: true }
      );
      setPdfs(response.data.findpdf);
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response?.data?.message || 'Something went wrong');
      setPdfs([]);
    } finally {
      setLoading(false);
    }
  };

  return (
   <div className="min-h-screen bg-white text-black p-6 ml-[300px]">

      <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">
        📄 View PDF Files
      </h1>

      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-10">
        <input
          type="text"
          placeholder="Enter PDF Name"
          value={pdfName}
          onChange={(e) => setPdfName(e.target.value)}
          className="p-3 rounded w-64 text-black bg-white shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="text"
          placeholder="Enter Department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          className="p-3 rounded w-64 text-black bg-white shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={fetchPdfs}
          className="bg-blue-600 text-white font-semibold px-5 py-3 rounded hover:bg-blue-700 transition"
        >
          🔍 Search
        </button>
      </div>

      {loading && <p className="text-center text-lg text-gray-600">Loading...</p>}
      {!loading && message && (
        <p className="text-center text-green-600 mb-6">{message}</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {pdfs.map((pdf) => (
          <div
            key={pdf._id}
            className="bg-white text-black rounded-xl shadow-md p-6 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-xl font-bold mb-2 capitalize">
                📘 {pdf.pdfName}
              </h2>
              <p className="text-sm mb-1">
                <span className="font-semibold">Department:</span>{' '}
                {pdf.department}
              </p>
              <p className="text-sm mb-4">
                <span className="font-semibold">Student:</span>{' '}
                {pdf.Studentname}
              </p>
            </div>
            <div className="mt-auto">
              <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full">
                Download PDF ⬇️
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewPdf;

