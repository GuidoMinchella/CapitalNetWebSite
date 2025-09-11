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
                      href="mailto:capitalnetsrl@gmail.com" 
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

                <div className="flex items-start space-x-4 p-4 bg-gray-900 rounded-lg border border-gray-700/50">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Sede Legale</h3>
                    <p className="text-gray-300">
                      Via Cassia 1280<br />
                      00189 Roma (RM)<br />
                      Italia
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="bg-gray-900 rounded-2xl p-6 border border-gray-700/50">
              <h3 className="text-white font-semibold mb-4">Dove siamo</h3>
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2967.123456789!2d12.413319!3d41.986801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f5f123456789a%3A0x123456789abcdef0!2sVia%20Cassia%2C%201280%2C%2000189%20Roma%20RM%2C%20Italy!5e0!3m2!1sit!2sit!4v1234567890123!5m2!1sit!2sit"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mappa sede CapitalNet - Via Cassia 1280, Roma"
                ></iframe>
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