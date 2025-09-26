import React from 'react';
import { Hero } from '../components/Hero';
import { DigitalIdentitySection } from '../components/DigitalIdentitySection';
import { WebsiteTemplates } from '../components/WebsiteTemplates';
import { Portfolio } from '../components/Portfolio';
import { Testimonials } from '../components/Testimonials';
import { ContactForm } from '../components/ContactForm';
import { Button } from '../components/Button';
import { Link, useNavigate } from 'react-router-dom';
import { DollarSign, TrendingUp, Users, Target, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const Home: React.FC = () => {
  const navigate = useNavigate();

  const handlePricingNavigation = () => {
    navigate('/listino-prezzi');
    // Scroll to top after navigation
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };
  return (
    <main className="pt-16">
      <Hero />
      
      <DigitalIdentitySection />
      
      <WebsiteTemplates />
      
      {/* Pricing Reassurance Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2306b6d4' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mb-6">
              <DollarSign className="h-8 w-8 text-white" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Prezzi{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                trasparenti
              </span>{' '}
              e accessibili
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Non crediamo nelle sorprese dell'ultimo minuto. I nostri prezzi sono chiari, competitivi e pensati per ogni tipo di business. 
              <strong className="text-cyan-400"> Nessun costo nascosto, solo soluzioni su misura.</strong>
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <motion.div 
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="text-cyan-400 text-2xl font-bold mb-2">Da €250</div>
              <div className="text-gray-300 text-sm">Siti web professionali</div>
            </motion.div>
            <motion.div 
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="text-cyan-400 text-2xl font-bold mb-2">Da €350</div>
              <div className="text-gray-300 text-sm">App mobile native</div>
            </motion.div>
            <motion.div 
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="flex items-center justify-center text-cyan-400 text-2xl font-bold mb-2">
                <TrendingUp className="h-6 w-6 mr-2" />
                0%
              </div>
              <div className="text-gray-300 text-sm">Commissioni mensili</div>
            </motion.div>
          </div>
          
          <div className="flex justify-center">
            <Button size="lg" className="w-full sm:w-auto" onClick={handlePricingNavigation}>
              Scopri tutti i prezzi
            </Button>
          </div>
        </div>
      </section>
      
      {/* Custom Paths Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2306b6d4' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mb-6">
              <Target className="h-8 w-8 text-white" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Percorsi{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                su misura
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              I nostri programmi sono pensati per tutti i tipi di aziende e aperti a tutte le richieste. 
              <strong className="text-cyan-400"> Ogni progetto è unico, proprio come la tua visione.</strong>
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <motion.div 
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-cyan-500/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Startup & PMI</h3>
              <p className="text-gray-300 leading-relaxed">
                Soluzioni scalabili e innovative per far crescere la tua startup o piccola-media impresa nel mercato digitale.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-cyan-500/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-6">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Grandi Aziende</h3>
              <p className="text-gray-300 leading-relaxed">
                Progetti enterprise complessi con architetture robuste e integrazione con sistemi esistenti.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-cyan-500/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 md:col-span-2 lg:col-span-1"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-6">
                <ArrowRight className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Progetti Speciali</h3>
              <p className="text-gray-300 leading-relaxed">
                Idee innovative e richieste personalizzate? Siamo aperti a qualsiasi sfida tecnologica.
              </p>
            </motion.div>
          </div>
          
          <div className="text-center">
            <Link 
              to="/percorso-capitalnet" 
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <span>Come funziona?</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
      
      <Portfolio />
      <Testimonials />
      <ContactForm />
    </main>
  );
};