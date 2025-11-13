
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 text-slate-300 mt-auto">
      <div className="container mx-auto px-4 py-6 text-center">
        <p>&copy; {new Date().getFullYear()} College Department Portal. All Rights Reserved.</p>
        <p className="text-sm text-slate-400 mt-1">Designed for Educational Excellence</p>
      </div>
    </footer>
  );
};

export default Footer;
