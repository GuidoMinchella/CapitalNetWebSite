import React, { useEffect, useRef, useState } from 'react';
import { Check } from 'lucide-react';

const services = [
  'Design personalizzato',
  'Form di contatto',
  'Menu e sezioni differenziate (es. menu ristorante, servizi autonoleggio, listino bar)',
  'Layout responsive mobile-first',
  'SEO on-page base (title, meta, Hx, alt, schema base)',
  'Integrazione mappe e social',
  'CMS semplice per aggiornare contenuti',
  'Sicurezza base (HTTPS, best practice)',
  'Assistenza al lancio'
];

export const ServiceTable: React.FC = () => {
  const [visibleItems, setVisibleItems] = useState<boolean[]>(Array(services.length + 1).fill(false));
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Controlla se è la prima visualizzazione dell'utente
    const hasSeenAnimations = localStorage.getItem('hasSeenServiceTableAnimations');
    
    // Se l'utente ha già visto le animazioni, mostra tutti gli elementi senza animazioni
    if (hasSeenAnimations) {
      setVisibleItems(Array(services.length + 1).fill(true));
      return;
    }
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setVisibleItems((prev) => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
            // Una volta che l'elemento è stato animato, non c'è più bisogno di osservarlo
            observer.unobserve(entry.target);
            
            // Salva che l'utente ha visto le animazioni
            localStorage.setItem('hasSeenServiceTableAnimations', 'true');
          }
        });
      },
      { threshold: 0.2 } // L'animazione inizia quando almeno il 20% dell'elemento è visibile
    );

    serviceRefs.current.forEach((ref, index) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      serviceRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Background tecnologico"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/70"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" ref={(el) => (serviceRefs.current[services.length] = el)} data-index={services.length}>
          <h2 
            className={`text-3xl md:text-4xl font-bold text-white mb-6 transition-all duration-700 transform ${visibleItems[services.length] ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}
          >
            Cosa include il nostro{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              pacchetto
            </span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  ref={(el) => (serviceRefs.current[index] = el)}
                  data-index={index}
                  className={`flex items-start space-x-3 p-4 bg-black/30 rounded-lg border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-700 hover:bg-black/50 transform ${visibleItems[index] ? 'translate-x-0 opacity-100' : `${index % 3 === 0 ? 'translate-x-16' : index % 3 === 2 ? '-translate-x-16' : 'translate-y-16'} opacity-0`}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm font-medium leading-relaxed">
                    {service}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};