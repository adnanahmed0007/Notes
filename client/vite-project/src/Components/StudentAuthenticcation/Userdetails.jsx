 import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Userdetails = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [pdfs, setPdfs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const res = await axios.get("http://localhost:9901/api/pdf/get/student/details", {
          withCredentials: true,
        });

        if (res.data) {
          setUserDetails(res.data.Userdetailks || res.data.Userdetails);
          setPdfs(res.data.pdfUploaded || []);
          setMessage(res.data.message);
        }
      } catch (err) {
        console.error(err);
        setMessage(err.response?.data?.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, []);

  return (
    <div className="min-h-screen bg-white text-black p-6 ml-[300px]">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">👤 Student Profile</h1>

      {loading ? (
        <p className="text-center text-gray-600">Loading user info...</p>
      ) : userDetails ? (
        <div className="bg-gray-100 p-6 rounded-xl shadow-md max-w-3xl mx-auto mb-10">
          <h2 className="text-2xl font-semibold mb-4">🎓 {userDetails.name || userDetails.Studentname}</h2>
          <div className="grid sm:grid-cols-2 gap-4 text-sm">
            <p><span className="font-bold">Email:</span> {userDetails.email}</p>
            <p><span className="font-bold">User ID:</span> {userDetails._id}</p>
            <p><span className="font-bold">Admission Number:</span> {userDetails.admissionNumber}</p>
            <p><span className="font-bold">Department:</span> {userDetails.department}</p>
            <p><span className="font-bold">Verified:</span> {userDetails.isVerified ? '✅ Yes' : '❌ No'}</p>
            <p><span className="font-bold">Joined On:</span> {new Date(userDetails.createdAt).toLocaleDateString()}</p>
          </div>
        </div>
      ) : (
        <p className="text-center text-red-500">{message || "User not found"}</p>
      )}

      <h2 className="text-2xl font-semibold text-center mb-6">📚 Uploaded PDFs</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {pdfs.length > 0 ? (
          pdfs.map((pdf) => (
            <div
              key={pdf._id}
              className="bg-white text-black rounded-xl shadow-md p-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-bold mb-2 capitalize">📘 {pdf.pdfName}</h3>
                <p className="text-sm mb-1">
                  <span className="font-semibold">Department:</span> {pdf.department}
                </p>
                <p className="text-sm mb-1">
                  <span className="font-semibold">Uploaded By:</span> {pdf.Studentname}
                </p>
                <p className="text-sm mb-1">
                  <span className="font-semibold">Email:</span> {pdf.email}
                </p>
                <p className="text-sm">
                  <span className="font-semibold">Uploaded On:</span>{" "}
                  {new Date(pdf.createdAt).toLocaleDateString()}
                </p>
              </div>
              <div className="mt-4">
                <a
                  
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full block text-center"
                >
                  View / Download PDF ⬇️
                </a>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-red-500 col-span-full">No PDFs uploaded yet.</p>
        )}
      </div>
    </div>
  );
};

export default Userdetails;

