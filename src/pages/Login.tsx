/**
 * Login Component
 * 
 * Displays the login page with:
 * - Office background with animation
 * - Login form with username and password fields
 * - Password visibility toggle
 * - Navbar with authentication options
 * - Google OAuth integration button
 */

import { useState } from 'react';
import { Eye, EyeOff, UserCircle } from 'lucide-react';
import './Login.css';

// Props interface for Login component
interface LoginProps {
  onLogin: (username: string, password: string) => void;
}

const Login = ({ onLogin }: LoginProps) => {
  // State management for form inputs and UI controls
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showCreateAccount, setShowCreateAccount] = useState(false);
  const [emailError, setEmailError] = useState('');

  /**
   * Validate email format
   * Returns true if email is valid, false otherwise
   */
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  /**
   * Handle email input change with validation
   */
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    setUsername(email);
    
    // Validate email format if not empty
    if (email && !validateEmail(email)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };

  /**
   * Handle form submission
   * Validates inputs and calls the onLogin callback
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate email before submitting
    if (!validateEmail(username)) {
      setEmailError('Please enter a valid email address');
      return;
    }
    
    if (username.trim() && password.trim()) {
      onLogin(username, password);
    }
  };

  /**
   * Handle Google OAuth login
   * Opens a demo popup to simulate Google Sign-In flow
   * For production: Replace with actual Google Client ID and OAuth flow
   */
  const handleGoogleLogin = () => {
    console.log('Google login initiated');
    
    // Show confirmation dialog instead of OAuth popup for demo
    const confirmed = window.confirm(
      '🔐 Google Sign-In Demo\n\n' +
      'In production, this will open Google\'s account selection screen.\n\n' +
      'For now, click OK to simulate signing in with Google.\n\n' +
      'To enable real Google OAuth:\n' +
      '1. Get a Client ID from Google Cloud Console\n' +
      '2. See GOOGLE_OAUTH_SETUP.md for instructions'
    );
    
    if (confirmed) {
      // Simulate successful Google login
      console.log('Google login successful (demo mode)');
      onLogin('google_user', 'google_auth');
    }
    
    /* FOR PRODUCTION: Uncomment this code and add your Google Client ID
    
    const googleAuthUrl = 'https://accounts.google.com/o/oauth2/v2/auth';
    const params = new URLSearchParams({
      client_id: 'YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com',
      redirect_uri: window.location.origin + '/auth/callback',
      response_type: 'token',
      scope: 'openid email profile',
      prompt: 'select_account',
    });
    
    const width = 500;
    const height = 600;
    const left = window.screen.width / 2 - width / 2;
    const top = window.screen.height / 2 - height / 2;
    
    const popup = window.open(
      `${googleAuthUrl}?${params.toString()}`,
      'Google Sign In',
      `width=${width},height=${height},left=${left},top=${top}`
    );
    
    const checkPopup = setInterval(() => {
      if (!popup || popup.closed) {
        clearInterval(checkPopup);
        setTimeout(() => {
          onLogin('google_user', 'google_auth');
        }, 500);
      }
    }, 500);
    */
  };

  /**
   * Toggle create account modal
   */
  const toggleCreateAccount = () => {
    setShowCreateAccount(!showCreateAccount);
  };

  return (
    <div className="login-page">
      {/* Main login overlay with blurred background */}
      <div className="login-overlay">
        <div className="login-content">
          {/* Welcome message on the left */}
          <div className="welcome-text">
            <h1>Welcome to the</h1>
            <h1>Crowd Management System</h1>
          </div>

          {/* Login card on the right */}
          <div className="login-card">
            {/* Card header with Kloudspot logo - matching Figma design */}
            <div className="login-header">
              <div className="kloudspot-logo">
                {/* Kloudspot WiFi wave logo */}
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="20" r="20" fill="white"/>
                  <path d="M20 8C12.268 8 6 14.268 6 22c0 2.122.471 4.134 1.314 5.937l2.829-2.829C9.475 23.5 9 21.795 9 20c0-6.075 4.925-11 11-11s11 4.925 11 11c0 1.795-.475 3.5-1.143 5.108l2.829 2.829C33.529 26.134 34 24.122 34 22c0-7.732-6.268-14-14-14z" fill="#2d5f5d"/>
                  <path d="M20 14c-4.411 0-8 3.589-8 8 0 1.237.281 2.408.783 3.455l2.829-2.829C15.214 21.809 15 20.929 15 20c0-2.757 2.243-5 5-5s5 2.243 5 5c0 .929-.214 1.809-.612 2.626l2.829 2.829C27.719 24.408 28 23.237 28 22c0-4.411-3.589-8-8-8z" fill="#2d5f5d"/>
                  <circle cx="20" cy="22" r="3" fill="#2d5f5d"/>
                </svg>
                <span>kloudspot</span>
              </div>
            </div>

            {/* Login form */}
            <form onSubmit={handleSubmit} className="login-form">
              {/* Email input field with validation */}
              <div className="form-group">
                <label htmlFor="email">
                  Email <span className="required">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  value={username}
                  onChange={handleEmailChange}
                  placeholder="example@email.com"
                  required
                  className={emailError ? 'input-error' : ''}
                />
                {emailError && <span className="error-message">{emailError}</span>}
              </div>

              {/* Password input field with visibility toggle */}
              <div className="form-group">
                <label htmlFor="password">
                  Password <span className="required">*</span>
                </label>
                <div className="password-input">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••"
                    required
                  />
                  {/* Toggle password visibility button */}
                  <button
                    type="button"
                    className="toggle-password"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label="Toggle password visibility"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {/* Submit button */}
              <button type="submit" className="login-button">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Create Account Modal */}
      {showCreateAccount && (
        <div className="modal-overlay" onClick={toggleCreateAccount}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Create Account</h2>
              <button className="close-modal" onClick={toggleCreateAccount}>
                ×
              </button>
            </div>
            <div className="modal-body">
              <p>Account creation feature is coming soon!</p>
              <p>For now, you can:</p>
              <ul>
                <li>Use the login form with any credentials</li>
                <li>Click "Continue with Google" for quick access</li>
              </ul>
            </div>
            <div className="modal-footer">
              <button className="modal-button" onClick={toggleCreateAccount}>
                Got it
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
