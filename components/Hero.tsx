import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-brand-lightGreen to-white pt-24 pb-16 px-4 md:pt-32 md:pb-24 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left z-10">
          <span className="inline-block py-1 px-3 rounded-full bg-brand-gold/10 text-brand-gold font-bold text-sm tracking-wide mb-4">
            NEW & IMPROVED RECIPE
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            The Soul of Every <br />
            <span className="text-brand-green">Sip & Snack.</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
            One masala, endless refreshment. Elevate your Chaas, Salads, Fruits, and Sodas instantly with HAVESOME.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105"
            >
              <MessageCircle className="w-6 h-6" />
              Order on WhatsApp
            </a>
            <a 
              href="#products"
              className="inline-flex items-center justify-center gap-2 bg-white border-2 border-gray-200 hover:border-brand-green text-gray-700 font-bold py-4 px-8 rounded-full transition-colors"
            >
              View Products
            </a>
          </div>
        </div>

        {/* Product Showcase */}
        <div className="w-full md:w-1/2 relative">
          {/* Decorative Blob */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-green/5 rounded-full blur-3xl -z-10"></div>
          
          <div className="relative grid grid-cols-2 gap-4">
            {/* 2 Sachet */}
            <div className="col-span-1 transform translate-y-8">
              <div className="bg-white p-4 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
                <img 
                  src="https://picsum.photos/400/500?random=1" 
                  alt="HAVESOME Chaas Masala 2 Rupee Sachet" 
                  className="w-full h-auto rounded-lg object-cover"
                />
                <p className="mt-2 text-center font-bold text-gray-700">₹2 Sachet</p>
              </div>
            </div>
            
            {/* 5 Sachet */}
            <div className="col-span-1">
              <div className="bg-white p-4 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
                <img 
                  src="https://picsum.photos/400/500?random=2" 
                  alt="HAVESOME Chaas Masala 5 Rupee Sachet" 
                  className="w-full h-auto rounded-lg object-cover"
                />
                <p className="mt-2 text-center font-bold text-gray-700">₹5 Sachet</p>
              </div>
            </div>

            {/* Display Box */}
            <div className="col-span-2 mt-4">
               <div className="bg-white p-4 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
                <img 
                  src="https://picsum.photos/800/400?random=3" 
                  alt="HAVESOME Chaas Masala Retail Display Box" 
                  className="w-full h-48 md:h-64 object-cover rounded-lg"
                />
                <p className="mt-2 text-center font-bold text-gray-700">Retail Display Box</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;