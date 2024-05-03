import React from "react";
import FileCards from './FileCards';
const UploadedFiles = () => {
    return (
        <>
            <h1 className="text-3xl font-bold text-center my-8">Uploaded Files</h1>
            <FileCards />
        </>
    );
};
export default UploadedFiles;