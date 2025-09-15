import React, { useState, useEffect, useRef } from 'react';
import { Monitor, Smartphone, ShoppingCart, Coffee, Car, Hotel, Briefcase, Heart } from 'lucide-react';

const templateCategories = [
  {
    icon: Coffee,
    title: 'Ristoranti & Bar',
    description: 'Template moderni per ristoranti, pizzerie, bar e locali',
    image: '/images/1.png',
    features: ['Menu digitale', 'Prenotazioni online', 'Ordini takeaway', 'Galleria foto']
  },
  {
    icon: Car,
    title: 'Autonoleggi',
    description: 'Soluzioni complete per servizi di noleggio auto',
    image: '/images/2.png',
    features: ['Catalogo veicoli', 'Preventivi online', 'Calendario disponibilità', 'Pagamenti sicuri']
  },
  {
    icon: Hotel,
    title: 'Hotel & B&B',
    description: 'Template eleganti per strutture ricettive',
    image: '/images/3.webp',
    features: ['Sistema prenotazioni', 'Galleria camere', 'Servizi hotel', 'Recensioni clienti']
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce',
    description: 'Negozi online professionali e performanti',
    image: '/images/4.webp',
    features: ['Catalogo prodotti', 'Carrello avanzato', 'Pagamenti multipli', 'Gestione ordini']
  },
  {
    icon: Briefcase,
    title: 'Aziende & Servizi',
    description: 'Siti corporate e professionali per ogni business',
    image: '/images/5.png',
    features: ['Presentazione servizi', 'Portfolio lavori', 'Moduli contatto', 'Blog aziendale']
  },
  {
    icon: Heart,
    title: 'Salute & Benessere',
    description: 'Template per centri estetici, palestre e wellness',
    image: '/images/6.png',
    features: ['Prenotazione servizi', 'Listino trattamenti', 'Staff qualificato', 'Galleria risultati']
  }
];

export const WebsiteTemplates: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Handle scroll to update current index for scaling effect
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const itemWidth = container.children[0]?.clientWidth || 0;
      const scrollLeft = container.scrollLeft;
      const newIndex = Math.round(scrollLeft / (itemWidth + 32)); // 32 is gap
      setCurrentIndex(newIndex);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2306b6d4' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mb-6">
            <Monitor className="h-8 w-8 text-white" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Template{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              personalizzabili
            </span>{' '}
            per ogni settore
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            Scegli tra i nostri template professionali, completamente personalizzabili per il tuo business. 
            <strong className="text-cyan-400"> Design moderni, funzionalità avanzate e ottimizzazione SEO inclusa.</strong>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Mobile Carousel */}
          <div className="md:hidden col-span-full">
            <div 
              ref={scrollContainerRef}
              className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 px-8 scrollbar-hide" 
              style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}
            >
              {templateCategories.map((category, index) => {
                const IconComponent = category.icon;
                const isCenter = index === currentIndex;
                return (
                  <div 
                    key={index}
                    className={`flex-none w-64 snap-center transition-all duration-300 ${
                      isCenter ? 'transform scale-105' : 'transform scale-95 opacity-75'
                    }`}
                  >
                    <div className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 h-full">
                      {/* Image */}
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={category.image}
                          alt={category.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
                        
                        {/* Icon */}
                        <div className="absolute top-4 right-4">
                          <div className="p-2 bg-cyan-500/20 backdrop-blur-sm rounded-lg border border-cyan-500/30">
                            <IconComponent className="h-5 w-5 text-cyan-400" />
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                          {category.title}
                        </h3>
                        
                        <p className="text-gray-400 mb-4 leading-relaxed">
                          {category.description}
                        </p>

                        {/* Features */}
                        <div className="space-y-2">
                          <h4 className="text-sm font-semibold text-cyan-400 mb-2">Funzionalità incluse:</h4>
                          <div className="grid grid-cols-2 gap-1">
                            {category.features.map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2 flex-shrink-0"></div>
                                {feature}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
             </div>
             
             {/* Pagination Dots */}
             <div className="flex justify-center mt-6 space-x-2">
               {templateCategories.map((_, index) => (
                 <button
                   key={index}
                   className={`w-2 h-2 rounded-full transition-all duration-300 ${
                     index === currentIndex 
                       ? 'bg-cyan-400 w-6' 
                       : 'bg-gray-600 hover:bg-gray-500'
                   }`}
                   onClick={() => {
                     const container = scrollContainerRef.current;
                     if (container) {
                       const cardWidth = 256 + 16; // w-64 + gap-4
                       container.scrollTo({
                         left: index * cardWidth,
                         behavior: 'smooth'
                       });
                     }
                   }}
                 />
               ))}
             </div>
           </div>

          {/* Desktop Grid */}
          <div className="hidden md:contents">
            {templateCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div 
                  key={index}
                  className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
                    
                    {/* Icon */}
                    <div className="absolute top-4 right-4">
                      <div className="p-2 bg-cyan-500/20 backdrop-blur-sm rounded-lg border border-cyan-500/30">
                        <IconComponent className="h-5 w-5 text-cyan-400" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                      {category.title}
                    </h3>
                    
                    <p className="text-gray-400 mb-4 leading-relaxed">
                      {category.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">Funzionalità incluse:</h4>
                      <div className="grid grid-cols-2 gap-1">
                        {category.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2 flex-shrink-0"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 text-cyan-400 mb-4">
            <Smartphone className="h-5 w-5" />
            <span className="text-sm font-medium">Tutti i template sono responsive e mobile-friendly</span>
          </div>
          
          <p className="text-gray-400 text-sm max-w-2xl mx-auto">
            Ogni template può essere completamente personalizzato con i tuoi colori, contenuti e funzionalità specifiche. 
            Contattaci per vedere una demo personalizzata per il tuo business.
          </p>
        </div>
      </div>
    </section>
  );
};