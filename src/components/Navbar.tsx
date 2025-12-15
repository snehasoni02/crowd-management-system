/**
 * Navbar Component
 * 
 * Top navigation bar for authenticated users displaying:
 * - Application title
 * - User avatars with notification badge
 * - Authentication options
 * - Google login button
 * 
 * Note: This navbar is shown in the dashboard (after login)
 */

import { UserCircle } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Application title */}
      <div className="navbar-title">Kloudspot - Test Task ...</div>
      
      <div className="navbar-actions">
        {/* User avatars section with notification indicator */}
        <div className="user-avatars">
          <div className="avatar" title="User 1">
            <UserCircle size={32} />
          </div>
          <div className="avatar" title="User 2">
            <UserCircle size={32} />
          </div>
          <div className="notification-badge" title="2 notifications">2</div>
        </div>
        
        {/* Authentication button */}
        <button className="auth-button">
          Log in or create account
        </button>
        
        {/* Google OAuth button */}
        <button className="google-button">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z" fill="#4285F4"/>
            <path d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.258c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332C2.438 15.983 5.482 18 9 18z" fill="#34A853"/>
            <path d="M3.964 10.707c-.18-.54-.282-1.117-.282-1.707 0-.593.102-1.17.282-1.709V4.958H.957C.347 6.173 0 7.548 0 9c0 1.452.348 2.827.957 4.042l3.007-2.335z" fill="#FBBC05"/>
            <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0 5.482 0 2.438 2.017.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335"/>
          </svg>
          Continue with Google
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
