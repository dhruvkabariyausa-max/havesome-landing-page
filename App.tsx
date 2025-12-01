import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductDetails from './components/ProductDetails';
import BrandAmbassador from './components/BrandAmbassador';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ProductDetails />
        <BrandAmbassador />
        <ContactForm />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
};

export default App;