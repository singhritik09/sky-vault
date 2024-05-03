// FileUploadForm.js
import React, { useState } from 'react';
import axios from 'axios';

const FileUploadForm = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response=await axios.post('http://localhost:8000/upload-form', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      window.alert("File Uploaded");
      console.log('File uploaded successfully');
      document.getElementById('file').value = '';
      setFile(null); // Clear file state
      if (response.status=== 400) {
        window.alert("File format not allowed")
    }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <div>
          <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">Upload Monthly Report</h2>
        </div>
        <form className="mt-8" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm">
            <div>
              <input
                aria-label="Upload File"
                type="file"
                id="file"
                onChange={handleFileChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
              />
            </div>
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
            >
              Upload
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FileUploadForm;
