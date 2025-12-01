import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { Download, CheckCircle } from 'lucide-react';
import { USAGE_IDEAS, NUTRITION_DATA, INGREDIENTS_LIST, getIcon, CERTIFICATIONS } from '../constants';

const ProductDetails: React.FC = () => {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Usage Versatility */}
        <div className="mb-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">More Than Just Chaas</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            Discover the limitless ways to add a burst of flavor to your daily diet.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {USAGE_IDEAS.map((usage) => (
              <div key={usage.id} className="group p-6 bg-brand-cream rounded-xl border border-transparent hover:border-brand-gold/30 transition-all hover:-translate-y-1">
                <div className="w-12 h-12 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm text-brand-gold mb-4 group-hover:scale-110 transition-transform">
                  {getIcon(usage.iconName)}
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{usage.title}</h3>
                <p className="text-sm text-gray-500">{usage.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* Left Column: Ingredients & Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Pure Ingredients</h3>
            <ul className="space-y-3 mb-8">
              {INGREDIENTS_LIST.map((ing, idx) => (
                <li key={idx} className="flex items-center gap-3 text-gray-700 p-3 bg-stone-50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0" />
                  {ing}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4 mb-8">
              {CERTIFICATIONS.map((cert, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-brand-lightGreen/50 px-4 py-2 rounded-full border border-brand-green/20">
                  {cert.icon}
                  <span className="text-sm font-semibold text-brand-green">{cert.name}</span>
                </div>
              ))}
            </div>

            <div className="p-6 border-2 border-dashed border-gray-300 rounded-xl bg-gray-50 flex flex-col md:flex-row items-center gap-6">
               <div className="w-full md:w-1/3">
                 <img src="https://picsum.photos/200/100?random=4" alt="Barcode GTIN" className="w-full mix-blend-multiply opacity-80" />
               </div>
               <div className="w-full md:w-2/3">
                 <p className="text-sm text-gray-500 font-mono">FSSAI Lic. No.</p>
                 <p className="text-lg font-bold text-gray-900">1001234567890</p>
                 <p className="text-xs text-gray-400 mt-1">Shree Sava Foods Pvt. Ltd.</p>
               </div>
            </div>
          </div>

          {/* Right Column: Nutrition & Download */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Nutritional Information</h3>
            <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-100">
               {/* Visual Chart */}
               <div className="h-64 w-full mb-6">
                 <ResponsiveContainer width="100%" height="100%">
                   <PieChart>
                     <Pie
                       data={NUTRITION_DATA}
                       cx="50%"
                       cy="50%"
                       innerRadius={60}
                       outerRadius={80}
                       paddingAngle={5}
                       dataKey="value"
                     >
                       {NUTRITION_DATA.map((entry, index) => (
                         <Cell key={`cell-${index}`} fill={entry.fill} />
                       ))}
                     </Pie>
                     <Tooltip />
                     <Legend verticalAlign="bottom" height={36}/>
                   </PieChart>
                 </ResponsiveContainer>
               </div>
               
               {/* Detailed Table */}
               <div className="overflow-hidden rounded-lg border border-gray-200">
                 <table className="min-w-full divide-y divide-gray-200">
                   <thead className="bg-gray-50">
                     <tr>
                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nutrient</th>
                       <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Per 100g</th>
                     </tr>
                   </thead>
                   <tbody className="bg-white divide-y divide-gray-200">
                     {NUTRITION_DATA.map((nut) => (
                       <tr key={nut.name}>
                         <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{nut.name}</td>
                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">{nut.value}{nut.unit}</td>
                       </tr>
                     ))}
                   </tbody>
                 </table>
               </div>
            </div>

            <button className="w-full mt-6 flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-semibold py-4 px-6 rounded-xl transition-colors">
              <Download className="w-5 h-5" />
              Download Product Spec Sheet (PDF)
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProductDetails;