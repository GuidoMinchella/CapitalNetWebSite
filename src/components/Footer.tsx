import React from 'react';
import { Link } from 'react-router-dom';
import { Monitor, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg">
                <Monitor className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                CapitalNet
              </span>
            </div>
            <p className="text-gray-400 max-w-sm">
              Da oltre 9 anni progettiamo soluzioni digitali su misura per far crescere il tuo business online.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Link rapidi</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                Home
              </Link>
              <Link to="/listino-prezzi" className="block text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                Listino prezzi
              </Link>
              <Link to="/contatti" className="block text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                Contatti
              </Link>
              <a href="#privacy" className="block text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                Privacy Policy
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contatti</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                <a href="mailto:capitalnetsrl@gmail.com" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                  capitalnetsrl@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                <a href="tel:+393341234567" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                  334 123 4567
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                <span className="text-gray-400">Via Roma 1, Roma, Italia</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">
            © 2025 CapitalNet. Tutti i diritti riservati.
          </p>
          <p className="text-gray-500 text-sm">
            Conforme GDPR - <a href="#cookie" className="hover:text-cyan-400 transition-colors">Cookie Policy</a>
          </p>
        </div>
      </div>
    </footer>
  );
};