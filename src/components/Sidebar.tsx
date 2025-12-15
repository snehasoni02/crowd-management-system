/**
 * Sidebar Component
 * 
 * Left navigation sidebar with:
 * - Navigation menu (Overview, Crowd Entries)
 * - Active route highlighting
 * - Logout functionality
 * 
 * Props:
 * @param onLogout - Callback function to handle user logout
 */

import { Link, useLocation } from 'react-router-dom';
import { Home, Users, LogOut } from 'lucide-react';
import './Sidebar.css';

interface SidebarProps {
  onLogout?: () => void;
}

const Sidebar = ({ onLogout }: SidebarProps) => {
  // Get current route for active link highlighting
  const location = useLocation();

  return (
    <aside className="sidebar">
      <div className="sidebar-content">
        {/* Navigation menu */}
        <nav className="sidebar-nav">
          {/* Overview link */}
          <Link
            to="/"
            className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}
            title="View dashboard overview"
          >
            <Home size={20} />
            <span>Overview</span>
          </Link>
          
          {/* Crowd Entries link */}
          <Link
            to="/crowd-entries"
            className={`nav-item ${location.pathname === '/crowd-entries' ? 'active' : ''}`}
            title="View crowd entries"
          >
            <Users size={20} />
            <span>Crowd Entries</span>
          </Link>
        </nav>
      </div>
      
      {/* Logout button at bottom */}
      <button className="logout-btn" onClick={onLogout} title="Logout from application">
        <LogOut size={20} />
        <span>Logout</span>
      </button>
    </aside>
  );
};

export default Sidebar;
