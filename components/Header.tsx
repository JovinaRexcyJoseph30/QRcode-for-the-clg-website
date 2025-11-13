
import React from 'react';

interface HeaderProps {
  onHomeClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onHomeClick }) => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div 
          className="flex items-center space-x-3 cursor-pointer"
          onClick={onHomeClick}
        >
          <div className="bg-indigo-600 text-white rounded-full p-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v11.494m-5.247-8.991l10.494 0M4.753 12h14.494" />
            </svg>
          </div>
          <h1 className="text-xl md:text-2xl font-bold text-indigo-600">
            Department Portal
          </h1>
        </div>
        <nav>
          <button 
            onClick={onHomeClick} 
            className="text-slate-600 hover:text-indigo-600 font-medium transition-colors"
          >
            Home
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
