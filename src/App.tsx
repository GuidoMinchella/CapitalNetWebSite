import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { CallButton } from './components/CallButton';
import { Home } from './pages/Home';
import { Pricing } from './pages/Pricing';
import { Contact } from './pages/Contact';
import PercorsoCapitalNet from './pages/PercorsoCapitalNet';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/percorso-capitalnet" element={<PercorsoCapitalNet />} />
          <Route path="/listino-prezzi" element={<Pricing />} />
          <Route path="/contatti" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
        <CallButton phoneNumber="+39 3921658427" />
        <WhatsAppButton phoneNumber="393921658427" />
      </div>
    </Router>
  );
}

export default App;