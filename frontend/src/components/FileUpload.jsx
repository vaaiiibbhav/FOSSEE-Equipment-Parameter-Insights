// src/components/FileUpload.jsx
import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = ({ onUploadSuccess, username, password }) => {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState('');
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (e) => {
    // Handle both input change and drop events
    const uploadedFile = e.target.files ? e.target.files[0] : e.dataTransfer.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      setStatus(`Selected file: ${uploadedFile.name}`);
    }
  };

  // Drag and Drop Handlers
  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    handleFileChange(e);
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setStatus('⚠️ Please enter your credentials first to authorize the upload.');
      return;
    }
    if (!file) {
      setStatus('⚠️ Please select a CSV file to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      setStatus('⏳ Uploading and processing data...');
      const response = await axios.post('http://127.0.0.1:8000/api/upload/', formData, {
        auth: { username, password },
        headers: { 'Content-Type': 'multipart/form-data' }
      });

      setStatus('✅ Upload Successful! Data is ready for analysis.');
      onUploadSuccess(response.data);

    } catch (error) {
      console.error(error);
      setStatus('❌ Upload Failed: ' + (error.response?.data?.error || error.message));
    }
  };

  // --- Dynamic Styles ---

  const baseContainerStyle = {
    padding: '30px',
    margin: '30px auto',
    borderRadius: '12px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
    maxWidth: '500px',
    textAlign: 'center',
  };

  const dropZoneStyle = {
    border: isDragging ? '3px dashed #007bff' : '3px dashed #ccc',
    padding: '40px 20px',
    borderRadius: '8px',
    cursor: 'pointer',
    backgroundColor: isDragging ? '#e6f7ff' : '#f8f8f8',
    transition: 'all 0.3s ease',
    marginBottom: '20px',
    position: 'relative',
  };

  const fileInputStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    opacity: 0,
    cursor: 'pointer',
  };

  const buttonStyle = {
    padding: '12px 25px',
    cursor: 'pointer',
    backgroundColor: '#007bff', // Primary blue
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    fontSize: '18px',
    fontWeight: '600',
    transition: 'background-color 0.3s',
  };

  const statusStyle = {
    marginTop: '20px',
    fontWeight: 'bold',
    color: status.includes('Successful') ? '#28a745' : status.includes('Failed') ? '#dc3545' : '#007bff',
    backgroundColor: status ? '#f0f0f0' : 'transparent',
    padding: status ? '10px' : '0',
    borderRadius: '6px',
  };


  // --- Render ---

  return (
    <div style={baseContainerStyle}>
      <h2>🚀 1. Upload Equipment CSV</h2>

      <form onSubmit={handleUpload} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>

        <div 
          style={dropZoneStyle}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <input 
            type="file" 
            accept=".csv" 
            onChange={handleFileChange} 
            style={fileInputStyle}
          />
          <p style={{ margin: '0', color: '#555', fontSize: '16px' }}>
            {file ? 
              `File Ready: ${file.name} (Click or Drag to change)` : 
              `Drag & drop your CSV here, or click to browse (Accepts .csv only)`
            }
          </p>
          {!file && (
            <div style={{ marginTop: '10px', display: 'inline-block', padding: '5px 15px', backgroundColor: '#007bff', color: 'white', borderRadius: '4px', cursor: 'pointer' }}>
              Browse File
            </div>
          )}
        </div>

        <button 
          type="submit" 
          style={buttonStyle}
          disabled={!file}
        >
          {file ? 'Upload & Analyze Data' : 'Select File First'}
        </button>
      </form>

      {status && <p style={statusStyle}>{status}</p>}
    </div>
  );
};

export default FileUpload;