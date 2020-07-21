import React from 'react';
import { BrowserRouter as Router  }from 'react-router-dom';

import Routes from './routes/';

import { AuthProvider } from './contexts/authContext';

import './globalStyles.css'

function App() {
  return (
    
    <Router>
      <AuthProvider>
          <Routes />
      </AuthProvider>
    </Router>
  );
}

export default App;
