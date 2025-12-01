import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-b border-gray-800 pb-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">HAVESOME</h3>
            <p className="text-sm text-gray-400">Shree Sava Foods Pvt. Ltd.</p>
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="hover:text-brand-gold transition-colors"><Facebook className="w-6 h-6" /></a>
            <a href="#" className="hover:text-brand-gold transition-colors"><Instagram className="w-6 h-6" /></a>
            <a href="#" className="hover:text-brand-gold transition-colors"><Twitter className="w-6 h-6" /></a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} HAVESOME. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;