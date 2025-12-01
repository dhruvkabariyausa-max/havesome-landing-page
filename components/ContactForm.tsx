import React, { useState } from 'react';
import { Send, Loader2, ShieldCheck } from 'lucide-react';
import { FormStatus, InquiryFormState } from '../types';

const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<FormStatus>(FormStatus.IDLE);
  const [formData, setFormData] = useState<InquiryFormState>({
    name: '',
    businessName: '',
    city: '',
    phone: '',
    whatsapp: '',
    gst: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(FormStatus.SUBMITTING);

    // Simulate API call to Zoho CRM / Email
    setTimeout(() => {
      setStatus(FormStatus.SUCCESS);
      setFormData({
        name: '', businessName: '', city: '', phone: '', whatsapp: '', gst: '', message: ''
      });
      // Reset status after 3 seconds
      setTimeout(() => setStatus(FormStatus.IDLE), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        
        <div className="text-center mb-12">
          <span className="text-brand-gold font-bold tracking-wider uppercase text-sm">Partner With Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">Dealer & Distributor Inquiry</h2>
          <p className="text-gray-600">Join the HAVESOME family. Fill out the details below for bulk orders.</p>
        </div>

        <div className="bg-white shadow-2xl rounded-3xl p-8 md:p-12 border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                <input
                  required
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-1">Business Name *</label>
                <input
                  required
                  type="text"
                  name="businessName"
                  id="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition-all"
                  placeholder="JD Enterprises"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                <input
                  required
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition-all"
                  placeholder="+91 98765 43210"
                />
              </div>
              <div>
                <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700 mb-1">WhatsApp Number *</label>
                <input
                  required
                  type="tel"
                  name="whatsapp"
                  id="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition-all"
                  placeholder="+91 98765 43210"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">City *</label>
                <input
                  required
                  type="text"
                  name="city"
                  id="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition-all"
                  placeholder="Mumbai"
                />
              </div>
              <div>
                <label htmlFor="gst" className="block text-sm font-medium text-gray-700 mb-1">GST Number (Optional)</label>
                <input
                  type="text"
                  name="gst"
                  id="gst"
                  value={formData.gst}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition-all"
                  placeholder="22AAAAA0000A1Z5"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
              <textarea
                required
                name="message"
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition-all"
                placeholder="I am interested in distribution for the Pune region..."
              ></textarea>
            </div>

            {/* ReCAPTCHA Visual Placeholder */}
            <div className="bg-gray-50 border border-gray-200 p-3 rounded-lg flex items-center justify-between max-w-[250px]">
              <div className="flex items-center gap-3">
                 <div className="w-6 h-6 border-2 border-gray-300 rounded-sm"></div>
                 <span className="text-sm text-gray-600">I'm not a robot</span>
              </div>
              <div className="flex flex-col items-center">
                 <ShieldCheck className="w-6 h-6 text-blue-500" />
                 <span className="text-[8px] text-gray-400">reCAPTCHA</span>
              </div>
            </div>

            <button
              type="submit"
              disabled={status === FormStatus.SUBMITTING || status === FormStatus.SUCCESS}
              className={`w-full py-4 px-6 rounded-xl font-bold text-white transition-all flex items-center justify-center gap-2
                ${status === FormStatus.SUCCESS 
                  ? 'bg-green-600 hover:bg-green-700' 
                  : 'bg-brand-green hover:bg-green-800 shadow-lg hover:shadow-xl'
                }
              `}
            >
              {status === FormStatus.SUBMITTING ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Sending...
                </>
              ) : status === FormStatus.SUCCESS ? (
                <>
                  <ShieldCheck className="w-5 h-5" />
                  Inquiry Sent Successfully!
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Submit Inquiry
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;