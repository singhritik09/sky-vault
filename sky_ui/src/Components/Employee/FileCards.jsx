import React, { useState, useEffect } from 'react';
import axios1 from "../../axiosInstance";

const FileCards = () => {
  const [files, setFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchFiles();
  }, []);

  const fetchFiles = async () => {
    try {
      const response = await axios1.get('/files');
      setFiles(response.data);
    } catch (error) {
      console.error('Error fetching files:', error);
      setError('Error fetching files. Please try again later.');
    }
  };

  const handleCardClick = (file) => {
    setSelectedFile(file);
  };

  const handleCloseModal = () => {
    setSelectedFile(null);
  };

  return (
    <div className="flex flex-wrap justify-center">
      {error && <p className="text-red-500">{error}</p>}
      {files.map((file, index) => (
        <div key={index} className="max-w-sm mx-2 my-4 rounded overflow-hidden shadow-lg">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{file.filename}</div>
            <p className="text-gray-700 text-base">
              {file.data.substr(0, 100)}{file.data.length > 100 ? "..." : ""}
            </p>
          </div>
          <div className="px-6 py-4">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={() => handleCardClick(file)}
            >
              Read More
            </button>
          </div>
        </div>
      ))}
      {selectedFile && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">{selectedFile.filename}</h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">{selectedFile.data}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  onClick={handleCloseModal}
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base leading-6 font-medium text-white hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue transition ease-in-out sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FileCards;
