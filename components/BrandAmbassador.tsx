import React from 'react';
import { Quote } from 'lucide-react';

const BrandAmbassador: React.FC = () => {
  return (
    <section className="py-20 bg-brand-cream relative overflow-hidden">
      {/* Decorative Background Pattern */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          <div className="w-full md:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-brand-gold rounded-3xl transform rotate-6 translate-x-2 translate-y-2 opacity-20"></div>
              <img 
                src="https://picsum.photos/600/700?random=5" 
                alt="Hemaben Thakkar - Brand Ambassador" 
                className="relative rounded-3xl shadow-2xl w-full object-cover aspect-[4/5]"
              />
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border-l-4 border-brand-gold">
                <p className="font-bold text-gray-900 text-lg">Hemaben Thakkar</p>
                <p className="text-sm text-gray-600">The Inspiration</p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <Quote className="w-12 h-12 text-brand-gold mb-6 opacity-50" />
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              "Taste the tradition in every pinch."
            </h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                Behind every packet of HAVESOME Chaas Masala is a mother's touch. 
                Hemaben Thakkar believed that a simple spice blend could transform an ordinary meal into a memory.
              </p>
              <p>
                Her unwavering dedication to purity and authentic flavor profiles serves as our guiding star. 
                We don't just sell masala; we share a piece of her culinary heritage with the world.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BrandAmbassador;