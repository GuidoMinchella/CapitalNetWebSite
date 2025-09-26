import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { ContactForm } from '../components/ContactForm';

export const Contact: React.FC = () => {
  return (
    <main className="pt-24 pb-20 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Contatti
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Siamo qui per aiutarti a far crescere il tuo business online. Contattaci per una consulenza gratuita.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-white mb-8">
                Informazioni di{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  contatto
                </span>
              </h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-4 bg-gray-900 rounded-lg border border-gray-700/50">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Email</h3>
                    <a 
                      href="mailto:capitalnet.web@gmail.com" 
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                    >
                      capitalnet.web@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-gray-900 rounded-lg border border-gray-700/50">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Telefono</h3>
                    <a 
                      href="tel:+393921658427" 
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                    >
                      392 165 8427
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-900 rounded-2xl p-8 border border-gray-700/50">
            <h2 className="text-2xl font-bold text-white mb-8">
              Contattaci{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                ora
              </span>
            </h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );
};