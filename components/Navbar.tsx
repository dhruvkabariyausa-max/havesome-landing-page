import React from 'react';
import { Menu } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed w-full z-40 top-0 left-0 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-black tracking-tighter text-brand-green">
          HAVESOME
        </div>
        <div className="hidden md:flex gap-8 font-medium text-gray-600">
          <a href="#" className="hover:text-brand-green transition-colors">Home</a>
          <a href="#products" className="hover:text-brand-green transition-colors">Products</a>
          <a href="#contact" className="hover:text-brand-green transition-colors">Partner</a>
        </div>
        <button className="md:hidden text-gray-800">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;