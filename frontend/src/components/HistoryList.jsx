// src/components/HistoryList.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HistoryList = ({ username, password, refreshTrigger }) => {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [downloadingId, setDownloadingId] = useState(null);

  // Fetch history whenever credentials change or a new upload happens (refreshTrigger)
  useEffect(() => {
    if (username && password) {
      fetchHistory();
    }
  }, [username, password, refreshTrigger]);

  const fetchHistory = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://127.0.0.1:8000/api/history/', {
        auth: { username, password }
      });
      // Limit to the last 5 items
      setHistory(response.data.slice(0, 5)); 
    } catch (error) {
      console.error("Error fetching history", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadPDF = async (id, fileName) => {
    setDownloadingId(id);
    try {
      // We must use axios to download because of the Basic Auth requirement
      const response = await axios.get(`http://127.0.0.1:8000/api/report/${id}/`, {
        auth: { username, password },
        responseType: 'blob', // Important: This tells axios to treat the response as a file
      });

      // Create a hidden link to trigger the browser download
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `Report_${fileName.replace('.csv', '')}_${id}.pdf`);
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      alert("Failed to download PDF. Please check your credentials and ensure the report exists.");
      console.error(error);
    } finally {
      setDownloadingId(null);
    }
  };

  return (
    <div style={containerStyle}>
      <h2 style={headerStyle}>📄 Analysis History</h2>

      {/* Loading & Empty State */}
      {loading && <p style={{ textAlign: 'center', color: '#007bff' }}>Loading history...</p>}
      {!loading && history.length === 0 && (
        <p style={{ textAlign: 'center', color: '#666' }}>No analysis history found. Upload a file to begin!</p>
      )}

      {/* History List */}
      <div style={listContainerStyle}>
        {history.map((item) => (
          <div key={item.id} style={itemStyle}>
            {/* Left side: File Details (Improved Layout) */}
            <div style={{ flexGrow: 1, marginRight: '15px' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                <span style={{ marginRight: '8px', color: '#007bff' }}>📁</span>
                <strong style={{ fontSize: '16px', color: '#333' }}>{item.file_name}</strong>
              </div>
              <small style={{ color: '#666', marginLeft: '20px' }}>
                <span style={{ marginRight: '5px' }}>🕒</span> 
                {new Date(item.uploaded_at).toLocaleString()}
              </small>
            </div>
            
            {/* Right side: Download Button */}
            <button 
              onClick={() => handleDownloadPDF(item.id, item.file_name)}
              style={downloadButtonStyle}
              disabled={downloadingId === item.id}
            >
              {downloadingId === item.id ? 'Downloading...' : '⬇️ Download Report'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};



const containerStyle = {
  marginTop: '40px',
  padding: '30px',
  backgroundColor: '#f7f9fc', 
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
  maxWidth: '800px', 
  margin: '40px auto',
};

const headerStyle = {
  color: '#004a99',
  marginBottom: '20px',
  paddingBottom: '10px',
  borderBottom: '2px solid #004a9930',
};

const listContainerStyle = { 
  display: 'flex', 
  flexDirection: 'column', 
  gap: '15px' 
};

const itemStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '15px 20px',
  backgroundColor: 'white',
  borderLeft: '4px solid #007bff', 
  borderRadius: '8px',
  boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
  transition: 'transform 0.2s',
};

const downloadButtonStyle = {
  backgroundColor: '#007bff', 
  color: 'white',
  border: 'none',
  padding: '10px 15px',
  borderRadius: '6px',
  cursor: 'pointer',
  fontWeight: 'bold',
  fontSize: '14px',
  minWidth: '150px', 
  transition: 'background-color 0.2s',
};

export default HistoryList;