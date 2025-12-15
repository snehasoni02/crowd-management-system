/**
 * Main App Component
 * 
 * Handles:
 * - Authentication state management
 * - Route configuration
 * - Layout structure (Navbar + Sidebar + Content)
 * - Login/Logout functionality
 */

import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Overview from './pages/Overview';
import CrowdEntries from './pages/CrowdEntries';
import Login from './pages/Login';
import './App.css';

function App() {
  // Authentication state - in production, use context or state management library
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  /**
   * Handle user login
   * @param username - User's username
   * @param password - User's password
   * 
   * In production, this should:
   * 1. Call authentication API
   * 2. Validate credentials
   * 3. Store auth token
   * 4. Handle errors
   */
  const handleLogin = (username: string, password: string) => {
    // Simple authentication - in production, this should call an API
    if (username && password) {
      setIsAuthenticated(true);
      console.log('User logged in:', username);
    }
  };

  /**
   * Handle user logout
   * Clears authentication state and returns to login page
   * 
   * In production, should also:
   * - Clear auth tokens
   * - Call logout API
   * - Clear user data from storage
   */
  const handleLogout = () => {
    setIsAuthenticated(false);
    console.log('User logged out');
  };

  // Show login page if not authenticated
  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  // Render main application with routing
  return (
    <Router>
      <div className="app">
        <Sidebar onLogout={handleLogout} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/crowd-entries" element={<CrowdEntries />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
