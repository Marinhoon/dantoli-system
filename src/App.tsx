import React from 'react';
import './global.css';
import Home from './pages/Home'

const App: React.FC = () => {
  return (
    <div style={{ backgroundColor: '#F5F5E5', minHeight: '100vh' }}>
      <Home />
    </div>
  );
};

export default App;