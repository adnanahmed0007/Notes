 import React, { useState } from 'react';
import axios from 'axios';

const AllviewPdf = () => {
  const [pdfs, setPdfs] = useState([]);
  const [pdfName, setPdfName] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSearch = async () => {
    if (!pdfName) {
      setMessage("Please enter a PDF name.");
      return;
    }

    setLoading(true);
    setMessage('');
    try {
      const response = await axios.post(
        'http://localhost:9901/api/pdf/student/get/all/pdf',
        { pdfName },
        { withCredentials: true }
      );

      const result = response.data.findallapdf;

      if (result && result.length > 0) {
        setPdfs(result);
        setMessage(response.data.message);
      } else {
        setPdfs([]);
        setMessage('No PDFs found with that name.');
      }
    } catch (error) {
      console.error('Error fetching PDFs:', error);
      setMessage(error.response?.data?.message || 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-black p-6 ml-[300px]">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        📑 Search Uploaded PDF Files
      </h1>

      <div className="flex items-center justify-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Enter PDF Name"
          value={pdfName}
          onChange={(e) => setPdfName(e.target.value)}
          className="border border-gray-400 rounded px-4 py-2 w-64"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Search PDF 🔍
        </button>
      </div>

      {loading && <p className="text-center text-gray-600">Loading PDFs...</p>}
      {!loading && message && <p className="text-center text-green-600 mb-4">{message}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {pdfs.length > 0 ? (
          pdfs.map((pdf) => (
            <div
              key={pdf._id}
              className="bg-white text-black rounded-xl shadow-md p-6 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-xl font-bold mb-2 capitalize">📘 {pdf.pdfName}</h2>
                <p className="text-sm mb-1">
                  <span className="font-semibold">Department:</span> {pdf.department}
                </p>
                <p className="text-sm mb-4">
                  <span className="font-semibold">Student:</span> {pdf.Studentname}
                </p>
                <p className="text-sm mb-4">
                  <span className="font-semibold">Student Email:</span> {pdf.email}
                </p>
              </div>
              <div className="mt-auto">
                <a
                   
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full block text-center"
                >
                  Download PDF ⬇️
                </a>
              </div>
            </div>
          ))
        ) : (
          !loading && <p className="text-center text-red-500">No PDFs found.</p>
        )}
      </div>
    </div>
  );
};

export default AllviewPdf;


