// src/components/Dashboard.jsx
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

// 1. Register the Chart.js components we need
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = ({ data }) => {
  // If no data is provided yet, don't render anything
  if (!data || !data.summary_data) return null;

  const { total_count, averages, type_distribution } = data.summary_data;

  // 2. Prepare Data for the Bar Chart
  const chartData = {
    labels: Object.keys(type_distribution), // e.g., ['Pump', 'Valve', ...]
    datasets: [
      {
        label: 'Equipment Count',
        // Use a more vibrant color for the bars
        data: Object.values(type_distribution), // e.g., [4, 3, ...]
        backgroundColor: 'rgba(75, 192, 192, 0.8)', // Teal/Cyan
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { position: 'top', labels: { color: '#333' } },
      title: { display: true, text: 'Equipment Type Distribution', color: '#333', font: { size: 18 } },
    },
    scales: {
      x: { ticks: { color: '#666' } },
      y: { ticks: { color: '#666' } },
    }
  };

  return (
    // Updated main container style with a light gray/off-white background
    <div style={dashboardContainerStyle}>
      <h2 style={{ color: '#004a99', marginBottom: '30px', borderBottom: '2px solid #004a9930', paddingBottom: '10px' }}>
        ⚙️ Equipment Analysis Dashboard
      </h2>

      {/* Section A: Summary Cards */}
      <div style={{ display: 'flex', gap: '25px', marginBottom: '40px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Card title="Total Equipment" value={total_count} color="#007bff" />
        <Card title="Avg Flowrate" value={`${averages.Flowrate.toFixed(2)} units`} color="#28a745" />
        <Card title="Avg Pressure" value={`${averages.Pressure.toFixed(2)} units`} color="#ffc107" />
        <Card title="Avg Temp" value={`${averages.Temperature.toFixed(2)} units`} color="#dc3545" />
      </div>

      {/* Section B: Chart & Table Container */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', justifyContent: 'center' }}>
        
        {/* Bar Chart Container */}
        <div style={chartContainerStyle}>
          <h3>📈 Equipment Type Breakdown</h3>
          <Bar data={chartData} options={chartOptions} />
        </div>

        {/* Detailed Table Container */}
        <div style={tableContainerStyle}>
          <h3>Type Distribution Table</h3>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Type</th>
                <th style={thStyle}>Count</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(type_distribution).map(([type, count]) => (
                <tr key={type} style={{ borderBottom: '1px solid #eee' }}>
                  <td style={tdStyle}>{type}</td>
                  <td style={tdStyle}>{count}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// --- New Reusable Card Component (Functional improvement) ---
const Card = ({ title, value, color }) => (
    <div style={{ ...cardStyle, borderLeft: `5px solid ${color}` }}>
        <h4 style={{ color: color, margin: '0 0 5px 0', fontSize: '14px' }}>{title}</h4>
        <p style={{ fontSize: '28px', fontWeight: '900', color: '#333', margin: '0' }}>{value}</p>
    </div>
);

// --- Enhanced CSS Styles ---

const dashboardContainerStyle = {
  padding: '30px',
  // Use a light, contrasting background
  backgroundColor: '#f7f9fc', 
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
};

const cardStyle = {
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  textAlign: 'left',
  minWidth: '150px',
  flex: '1',
  maxWidth: '250px',
  transition: 'transform 0.2s',
  cursor: 'pointer',
};

// Style for chart and table containers
const sectionContainerBase = {
    backgroundColor: '#fff',
    padding: '25px',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
    minWidth: '300px',
    color: '#333'
};

const chartContainerStyle = { 
    ...sectionContainerBase,
    flex: '2', 
    maxWidth: '700px',
};

const tableContainerStyle = { 
    ...sectionContainerBase,
    flex: '1', 
    maxWidth: '450px',
};

const tableStyle = {
    width: '100%', 
    borderCollapse: 'collapse', 
    marginTop: '15px'
};

const thStyle = { 
    padding: '12px', 
    borderBottom: '3px solid #007bff', 
    textAlign: 'left', 
    backgroundColor: '#e6f0ff', // Light blue header
    color: '#004a99',
    fontWeight: 'bold'
};

const tdStyle = { 
    padding: '12px', 
    borderBottom: '1px solid #f0f0f0', 
    color: '#333' 
};


export default Dashboard;