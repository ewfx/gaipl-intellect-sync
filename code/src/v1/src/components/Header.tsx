import React from 'react';
import { Search, Settings } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  return (
    <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-lg">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-xl font-bold hover:text-blue-100 transition-colors">
            Gen-AI IPE Platform
          </Link>
          <div className="hidden md:flex items-center space-x-4">
            <nav className="flex space-x-4">
              <Link 
                to="/dashboard" 
                className={`px-3 py-2 rounded-md transition-colors ${
                  location.pathname === '/dashboard' 
                    ? 'bg-white/20 text-white' 
                    : 'text-blue-100 hover:bg-white/10 hover:text-white'
                }`}
              >
                Dashboard
              </Link>
              <Link 
                to="/knowledge-base" 
                className={`px-3 py-2 rounded-md transition-colors ${
                  location.pathname === '/knowledge-base' 
                    ? 'bg-white/20 text-white' 
                    : 'text-blue-100 hover:bg-white/10 hover:text-white'
                }`}
              >
                Knowledge Base
              </Link>
              <Link 
                to="/analytics" 
                className={`px-3 py-2 rounded-md transition-colors ${
                  location.pathname === '/analytics' 
                    ? 'bg-white/20 text-white' 
                    : 'text-blue-100 hover:bg-white/10 hover:text-white'
                }`}
              >
                Analytics
              </Link>
            </nav>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-64 px-4 py-2 pl-10 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30 text-white placeholder-blue-100"
            />
            <Search className="w-5 h-5 text-blue-100 absolute left-3 top-1/2 transform -translate-y-1/2" />
          </div>
          <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <Settings className="w-5 h-5 text-blue-100" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;