import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '../components/Button';
import { ContactForm } from '../components/ContactForm';

interface Package {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}

const websitePackages: Package[] = [
  {
    name: 'Start',
    price: '$250',
    description: 'Sito web monopagina',
    features: [
      'Design base personalizzato',
      '1 pagina',
      'Form contatto',
      'SEO on-page base',
      'Responsive design'
    ]
  },
  {
    name: 'Business',
    price: '$650',
    description: 'Sito dinamico personalizzato, 2-5 pagine',
    features: [
      'Pagine servizi/chi siamo/contatti',
      'Blog base',
      'Componenti dinamici',
      'Integrazioni base',
      'CMS per contenuti',
      'Analisi e reporting'
    ],
    popular: true
  },
  {
    name: 'Premium',
    price: '$850+',
    description: 'Sito complesso personalizzato, 5+ pagine',
    features: [
      'Architettura su misura',
      'Funzionalità avanzate',
      'Sistema prenotazioni',
      'Aree riservate',
      'Performance ottimizzate',
      'Supporto prioritario'
    ]
  }
];

const appPackages: Package[] = [
  {
    name: 'Start App',
    price: '$350',
    description: 'App base/vetrina, monopagina',
    features: [
      'Design nativo iOS/Android',
      'Funzionalità base',
      'Push notifications',
      'Integrazione social',
      'Pubblicazione store'
    ]
  },
  {
    name: 'Business App',
    price: '$950+',
    description: 'App interattiva personalizzata',
    features: [
      'Interfaccia avanzata',
      'Database integrato',
      'Autenticazione utenti',
      'API personalizzate',
      'Analytics integrati',
      'Supporto multi-piattaforma'
    ],
    popular: true
  },
  {
    name: 'Premium App',
    price: '$1500+',
    description: 'App complessa avanzata',
    features: [
      'Architettura scalabile',
      'Integrazioni complesse',
      'AI e machine learning',
      'Sistema pagamenti',
      'Backend personalizzato',
      'Supporto enterprise'
    ]
  }
];

const faqs = [
  {
    question: 'Quali sono i tempi medi di realizzazione?',
    answer: 'I tempi variano in base al pacchetto: Start 1-2 settimane, Business 2-4 settimane, Premium 4-6 settimane.'
  },
  {
    question: 'Cosa devo fornire per iniziare?',
    answer: 'Contenuti (testi e immagini), logo aziendale, esempi di siti che ti piacciono e accesso ai tuoi account social/business.'
  },
  {
    question: 'Come funzionano i pagamenti?',
    answer: '50% all\'accettazione del preventivo, 50% alla consegna. Accettiamo bonifico, PayPal e principali carte di credito.'
  },
  {
    question: 'È inclusa la manutenzione?',
    answer: 'I primi 3 mesi di supporto sono inclusi. Successivamente offriamo piani di manutenzione personalizzati.'
  }
];

const PackageCard: React.FC<{ pkg: Package; type: 'website' | 'app' }> = ({ pkg, type }) => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-form');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`relative bg-gray-900 rounded-2xl p-8 border transition-all duration-300 hover:shadow-xl ${
      pkg.popular
        ? 'border-cyan-500 shadow-lg shadow-cyan-500/20 scale-105'
        : 'border-gray-700/50 hover:border-cyan-500/50 hover:shadow-cyan-500/10'
    }`}>
      {pkg.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
            Più popolare
          </span>
        </div>
      )}

      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
        <div className="text-4xl font-bold text-cyan-400 mb-4">{pkg.price}</div>
        <p className="text-gray-400">{pkg.description}</p>
      </div>

      <ul className="space-y-4 mb-8">
        {pkg.features.map((feature, index) => (
          <li key={index} className="flex items-start space-x-3">
            <div className="flex-shrink-0 mt-1">
              <Check className="h-5 w-5 text-cyan-400" />
            </div>
            <span className="text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        variant={pkg.popular ? 'primary' : 'outline'}
        size="lg"
        onClick={scrollToContact}
        className="w-full"
        icon={ArrowRight}
      >
        Avvia progetto
      </Button>
    </div>
  );
};

export const Pricing: React.FC = () => {

  return (
    <main className="pt-24 pb-20 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Listino{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              prezzi
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Scegli il pacchetto perfetto per la tua azienda. Tutti i prezzi includono consulenza personalizzata e supporto completo.
          </p>
        </div>

        {/* Website Packages */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Siti Web
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {websitePackages.map((pkg, index) => (
              <PackageCard key={index} pkg={pkg} type="website" />
            ))}
          </div>
        </section>

        {/* App Packages */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Applicazioni Mobile
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {appPackages.map((pkg, index) => (
              <PackageCard key={index} pkg={pkg} type="app" />
            ))}
          </div>
        </section>

        {/* Comparison Table */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Confronto Funzionalità
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-gray-900 rounded-2xl border border-gray-700/50 overflow-hidden">
              <thead>
                <tr className="bg-gray-800">
                  <th className="px-6 py-4 text-left text-white font-semibold">Funzionalità</th>
                  <th className="px-6 py-4 text-center text-white font-semibold">Start</th>
                  <th className="px-6 py-4 text-center text-white font-semibold relative">
                    Business
                    <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-cyan-500 text-white px-2 py-1 rounded text-xs">
                      Popolare
                    </span>
                  </th>
                  <th className="px-6 py-4 text-center text-white font-semibold">Premium</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                <tr>
                  <td className="px-6 py-4 text-gray-300">Design personalizzato</td>
                  <td className="px-6 py-4 text-center"><Check className="h-5 w-5 text-cyan-400 mx-auto" /></td>
                  <td className="px-6 py-4 text-center"><Check className="h-5 w-5 text-cyan-400 mx-auto" /></td>
                  <td className="px-6 py-4 text-center"><Check className="h-5 w-5 text-cyan-400 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-300">Numero pagine</td>
                  <td className="px-6 py-4 text-center text-gray-400">1</td>
                  <td className="px-6 py-4 text-center text-gray-300">3-7</td>
                  <td className="px-6 py-4 text-center text-cyan-400">7+</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-300">CMS per contenuti</td>
                  <td className="px-6 py-4 text-center text-gray-400">-</td>
                  <td className="px-6 py-4 text-center"><Check className="h-5 w-5 text-cyan-400 mx-auto" /></td>
                  <td className="px-6 py-4 text-center"><Check className="h-5 w-5 text-cyan-400 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-300">E-commerce</td>
                  <td className="px-6 py-4 text-center text-gray-400">-</td>
                  <td className="px-6 py-4 text-center text-gray-400">Basic</td>
                  <td className="px-6 py-4 text-center text-cyan-400">Avanzato</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-300">Supporto prioritario</td>
                  <td className="px-6 py-4 text-center text-gray-400">-</td>
                  <td className="px-6 py-4 text-center text-gray-400">-</td>
                  <td className="px-6 py-4 text-center"><Check className="h-5 w-5 text-cyan-400 mx-auto" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Domande Frequenti
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-900 rounded-lg p-6 border border-gray-700/50">
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact-form" className="mb-20">
          <ContactForm />
        </section>
      </div>
    </main>
  );
};