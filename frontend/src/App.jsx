// // src/App.jsx
// import React, { useState } from 'react';
// import './App.css';
// import FileUpload from './components/FileUpload';

// function App() {
//   const [dataSummary, setDataSummary] = useState(null);

//   return (
//     <div className="App" style={{ padding: '20px', fontFamily: 'Arial' }}>
//       <header>
//         <h1>Chemical Equipment Parameter Visualizer</h1>
//       </header>
      
//       <main>
//         {/* Pass a function to receive the data after successful upload */}
//         <FileUpload onUploadSuccess={(data) => setDataSummary(data)} />

//         {/* Temporary: Show the raw data to confirm it works */}
//         {dataSummary && (
//           <div style={{ marginTop: '20px', padding: '20px', backgroundColor: 'black' }}>
//             <h3>Data Received from Backend:</h3>
//             <pre style={{ textAlign: 'left' }}>{JSON.stringify(dataSummary, null, 2)}</pre>
//           </div>
//         )}
//       </main>
//     </div>
//   );
// }


// export default App;

// src/App.jsx
// import React, { useState } from 'react';
// import './App.css';
// import FileUpload from './components/FileUpload';
// import Dashboard from './components/Dashboard'; // <--- 1. Import this

// function App() {
//   const [dataSummary, setDataSummary] = useState(null);

//   return (
//     <div className="App" style={{ padding: '20px', fontFamily: 'Arial', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
//       <header style={{ marginBottom: '30px' }}>
//         <h1 style={{ color: '#333' }}>Chemical Equipment Parameter Visualizer</h1>
//       </header>
      
//       <main>
//         <FileUpload onUploadSuccess={(data) => setDataSummary(data)} />

//         {/* 2. Use the Dashboard Component instead of the raw JSON block */}
//         {dataSummary && (
//             <Dashboard data={dataSummary} />
//         )}
//       </main>
//     </div>
//   );
// }

// export default App;

// // src/App.jsx

// import React, { useState } from 'react';

// import './App.css';

// import FileUpload from './components/FileUpload';



// function App() {

//   const [dataSummary, setDataSummary] = useState(null);



//   return (

//     <div className="App" style={{ padding: '20px', fontFamily: 'Arial' }}>

//       <header>

//         <h1>Chemical Equipment Parameter Visualizer</h1>

//       </header>

     

//       <main>

//         {/* Pass a function to receive the data after successful upload */}

//         <FileUpload onUploadSuccess={(data) => setDataSummary(data)} />



//         {/* Temporary: Show the raw data to confirm it works */}

//         {dataSummary && (

//           <div style={{ marginTop: '20px', padding: '20px', backgroundColor: 'black' }}>

//             <h3>Data Received from Backend:</h3>

//             <pre style={{ textAlign: 'left' }}>{JSON.stringify(dataSummary, null, 2)}</pre>

//           </div>

//         )}

//       </main>

//     </div>

//   );

// }





// export default App;



// src/App.jsx

// import React, { useState } from 'react';

// import './App.css';

// import FileUpload from './components/FileUpload';

// import Dashboard from './components/Dashboard'; // <--- 1. Import this



// function App() {

//   const [dataSummary, setDataSummary] = useState(null);



//   return (

//     <div className="App" style={{ padding: '20px', fontFamily: 'Arial', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>

//       <header style={{ marginBottom: '30px' }}>

//         <h1 style={{ color: '#333' }}>Chemical Equipment Parameter Visualizer</h1>

//       </header>

     

//       <main>

//         <FileUpload onUploadSuccess={(data) => setDataSummary(data)} />



//         {/* 2. Use the Dashboard Component instead of the raw JSON block */}

//         {dataSummary && (

//             <Dashboard data={dataSummary} />

//         )}

//       </main>

//     </div>

//   );

// }



// export default App;



// src/App.jsx

// import React, { useState } from 'react';

// import './App.css';

// import FileUpload from './components/FileUpload';

// import Dashboard from './components/Dashboard';

// import HistoryList from './components/HistoryList';



// function App() {

//   // State for Authentication

//   const [username, setUsername] = useState('');

//   const [password, setPassword] = useState('');

 

//   // State for Data

//   const [dataSummary, setDataSummary] = useState(null);

//   const [refreshTrigger, setRefreshTrigger] = useState(0);



//   const handleUploadSuccess = (data) => {

//     setDataSummary(data);

//     // Increment this number to tell HistoryList to re-fetch

//     setRefreshTrigger(prev => prev + 1);

//   };



//   return (

//     <div className="App" style={{ padding: '20px', fontFamily: 'Arial', backgroundColor: '#f9f9f9', minHeight: '100vh', color: '#333' }}>

//       <header style={{ marginBottom: '30px' }}>

//         <h1>Equipment Parameter Insights</h1>

       

//         {/* Global Credentials Section */}

//         <div style={{ backgroundColor: '#333', padding: '15px', borderRadius: '8px', color: 'white', display: 'inline-block' }}>

//             <p style={{ margin: '0 0 10px 0', fontSize: '14px' }}>Backend Authentication</p>

//             <input

//               type="text"

//               placeholder="Username"

//               value={username}

//               onChange={(e) => setUsername(e.target.value)}

//               style={{ marginRight: '10px', padding: '5px' }}

//             />

//             <input

//               type="password"

//               placeholder="Password"

//               value={password}

//               onChange={(e) => setPassword(e.target.value)}

//               style={{ padding: '5px' }}

//             />

//         </div>

//       </header>

     

//       <main>

//         <FileUpload

//             username={username}

//             password={password}

//             onUploadSuccess={handleUploadSuccess}

//         />



//         {dataSummary && (

//             <Dashboard data={dataSummary} />

//         )}



//         {/* New History Section */}

//         <HistoryList

//             username={username}

//             password={password}

//             refreshTrigger={refreshTrigger}

//         />

//       </main>

//     </div>

//   );

// }



// export default App;

// src/App.jsx
// import React, { useState } from 'react';
// import './App.css';
// import FileUpload from './components/FileUpload';
// import Dashboard from './components/Dashboard';
// import HistoryList from './components/HistoryList';

// function App() {
//   // State for Authentication
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
  
//   // State for Data
//   const [dataSummary, setDataSummary] = useState(null);
//   const [refreshTrigger, setRefreshTrigger] = useState(0);

//   const handleUploadSuccess = (data) => {
//     setDataSummary(data);
//     // Increment this number to tell HistoryList to re-fetch
//     setRefreshTrigger(prev => prev + 1);
//   };

//   // --- NEW STYLES FOR CREDENTIALS SECTION ---
//   const credentialContainerStyle = {
//     // New Card appearance
//     backgroundColor: '#fff', 
//     padding: '20px',
//     borderRadius: '10px',
//     boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
//     maxWidth: '450px', // Restrict width
//     margin: '20px auto', // Center the block
//     borderTop: '5px solid #ffc107', // Distinct accent color (Amber/Warning)
//     textAlign: 'center',
//     color: '#333',
//   };

//   const credentialHeaderStyle = {
//     fontSize: '16px',
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: '15px',
//   };

//   const credentialInputGroupStyle = {
//     display: 'flex',
//     gap: '10px',
//     justifyContent: 'center',
//     flexWrap: 'wrap',
//   };

//   const credentialInputStyle = {
//     padding: '10px',
//     border: '1px solid #ccc',
//     borderRadius: '6px',
//     flexGrow: 1,
//     minWidth: '150px',
//     fontSize: '14px',
//   };
//   // ------------------------------------------

//   return (
//     <div className="App" style={{ padding: '20px', fontFamily: 'Arial', backgroundColor: '#f9f9f9', minHeight: '100vh', color: '#333' }}>
//       <header style={{ marginBottom: '30px', textAlign: 'center' }}>
//         <h1>Equipment Parameter Insights</h1>
        
//         {/* GLOBAL CREDENTIALS SECTION (UPDATED UI) */}
//         <div style={credentialContainerStyle}>
//             <p style={credentialHeaderStyle}>🔐 Backend Authentication</p>
            
//             <div style={credentialInputGroupStyle}>
//                 <input
//                   type="text"
//                   placeholder="Username"
//                   value={username}
//                   onChange={(e) => setUsername(e.target.value)}
//                   style={credentialInputStyle}
//                 />
//                 <input
//                   type="password"
//                   placeholder="Password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   style={credentialInputStyle}
//                 />
//             </div>
//             <p style={{ margin: '15px 0 0 0', fontSize: '12px', color: '#666' }}>
//               Enter credentials to enable file upload and history fetching.
//             </p>
//         </div>
//       </header>
      
//       <main>
//         <FileUpload
//             username={username}
//             password={password}
//             onUploadSuccess={handleUploadSuccess}
//         />

//         {dataSummary && (
//             <Dashboard data={dataSummary} />
//         )}

//         {/* New History Section */}
//         <HistoryList
//             username={username}
//             password={password}
//             refreshTrigger={refreshTrigger}
//         />
//       </main>
//     </div>
//   );
// }

// export default App;

// src/App.jsx
import React, { useState } from 'react';
import './App.css';
import FileUpload from './components/FileUpload';
import Dashboard from './components/Dashboard';
import HistoryList from './components/HistoryList';

function App() {
  // State for Authentication
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  // State for Data
  const [dataSummary, setDataSummary] = useState(null);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const handleUploadSuccess = (data) => {
    setDataSummary(data);
    // Increment this number to tell HistoryList to re-fetch
    setRefreshTrigger(prev => prev + 1);
  };

  // --- STYLES ---

  // Styles for the Credentials Section (retained from last update)
  const credentialContainerStyle = {
    backgroundColor: '#fff', 
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
    maxWidth: '450px', 
    margin: '20px auto', 
    borderTop: '5px solid #ffc107', 
    textAlign: 'center',
    color: '#333',
  };

  const credentialHeaderStyle = {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '15px',
  };

  const credentialInputGroupStyle = {
    display: 'flex',
    gap: '10px',
    justifyContent: 'center',
    flexWrap: 'wrap',
  };

  const credentialInputStyle = {
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '6px',
    flexGrow: 1,
    minWidth: '150px',
    fontSize: '14px',
  };
  
  // New Step/Navigation Bar Style
  const stepsBarStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    margin: '40px 0 20px 0',
    padding: '10px 0',
    borderBottom: '1px solid #ddd'
  };

  // Function to determine the style of each step
  const getStepStyle = (isActive) => ({
    fontWeight: isActive ? 'bold' : 'normal',
    color: isActive ? '#007bff' : '#666',
    borderBottom: isActive ? '2px solid #007bff' : '2px solid transparent',
    paddingBottom: '5px',
    cursor: 'default',
  });

  // --- RENDER ---

  return (
    <div className="App" style={{ 
      padding: '0 20px', // Removed vertical padding from main div
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", // Changed font
      backgroundColor: '#f9f9f9', 
      minHeight: '100vh', 
      color: '#333' 
    }}>
      <header style={{ padding: '20px 0', borderBottom: '1px solid #eee' }}>
        <h1 style={{ textAlign: 'center', color: '#004a99', fontWeight: '900', margin: 0 }}>
          Equipment Parameter Insights
        </h1>
        
        {/* GLOBAL CREDENTIALS SECTION */}
        <div style={credentialContainerStyle}>
            <p style={credentialHeaderStyle}>🔐 1. API Authentication</p>
            
            <div style={credentialInputGroupStyle}>
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  style={credentialInputStyle}
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={credentialInputStyle}
                />
            </div>
            <p style={{ margin: '15px 0 0 0', fontSize: '12px', color: '#666' }}>
              Enter credentials to enable file upload and history fetching.
            </p>
        </div>

        {/* NEW: Step Tracker/Navigation Bar */}
        <div style={stepsBarStyle}>
          <span style={getStepStyle(true)}>1. Authenticate & Upload</span>
          <span style={getStepStyle(!!dataSummary)}>2. View Dashboard</span>
          <span style={getStepStyle(true)}>3. View History</span>
        </div>
      </header>
      
      <main style={{ padding: '0 20px 40px 20px' }}>
        <FileUpload
            username={username}
            password={password}
            onUploadSuccess={handleUploadSuccess}
        />

        {dataSummary && (
            <Dashboard data={dataSummary} />
        )}

        <HistoryList
            username={username}
            password={password}
            refreshTrigger={refreshTrigger}
        />
      </main>
    </div>
  );
}

export default App;