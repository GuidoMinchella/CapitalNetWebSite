import React, { useEffect, useRef, useState } from 'react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    text: "CapitalNet ha raddoppiato le prenotazioni online del nostro ristorante in 3 mesi.",
    author: "Giulia R.",
    role: "Ristoratrice",
    rating: 5,
    package: "Pacchetto Business"
  },
  {
    text: "Sito dinamico e veloce: più richieste per il nostro autonoleggio.",
    author: "Marco T.",
    role: "Autonoleggi",
    rating: 5,
    package: "Pacchetto Premium"
  },
  {
    text: "Supporto impeccabile, ci hanno guidati nella strategia digitale.",
    author: "Elena S.",
    role: "Agenzia Marketing",
    rating: 5,
    package: "Pacchetto Enterprise"
  },
  {
    text: "Il nostro e-commerce ha triplicato le vendite grazie al loro lavoro eccellente.",
    author: "Alessandro M.",
    role: "E-commerce Manager",
    rating: 5,
    package: "Pacchetto Premium"
  },
  {
    text: "Professionalità e competenza al top. Il sito del nostro hotel è perfetto.",
    author: "Francesca L.",
    role: "Direttrice Hotel",
    rating: 5,
    package: "Pacchetto Business"
  },
  {
    text: "Ottimo servizio clienti e risultati concreti per la nostra startup.",
    author: "Davide P.",
    role: "CEO Startup",
    rating: 4,
    package: "Pacchetto Starter"
  },
  {
    text: "La nostra presenza online è completamente cambiata in meglio.",
    author: "Martina C.",
    role: "Consulente",
    rating: 5,
    package: "Pacchetto Business"
  },
  {
    text: "Tempi di consegna rispettati e qualità superiore alle aspettative.",
    author: "Roberto F.",
    role: "Imprenditore",
    rating: 4,
    package: "Pacchetto Premium"
  },
  {
    text: "Il team CapitalNet ha capito perfettamente le nostre esigenze.",
    author: "Chiara B.",
    role: "Marketing Manager",
    rating: 5,
    package: "Pacchetto Enterprise"
  },
  {
    text: "Investimento che ha dato frutti immediati per la nostra azienda.",
    author: "Luca G.",
    role: "Direttore Commerciale",
    rating: 4,
    package: "Pacchetto Business"
  },
  {
    text: "Design moderno e funzionalità avanzate per il nostro centro benessere.",
    author: "Valentina R.",
    role: "Proprietaria SPA",
    rating: 5,
    package: "Pacchetto Premium"
  },
  {
    text: "Supporto tecnico sempre disponibile e soluzioni innovative.",
    author: "Andrea S.",
    role: "IT Manager",
    rating: 4,
    package: "Pacchetto Enterprise"
  },
  {
    text: "Il nostro studio legale ora ha una presenza digitale di alto livello.",
    author: "Avv. Maria T.",
    role: "Avvocato",
    rating: 5,
    package: "Pacchetto Business"
  },
  {
    text: "Aumento del 200% dei contatti grazie al nuovo sito web.",
    author: "Giuseppe N.",
    role: "Agente Immobiliare",
    rating: 5,
    package: "Pacchetto Premium"
  },
  {
    text: "Piattaforma e-learning perfetta per i nostri corsi online.",
    author: "Prof. Laura V.",
    role: "Formatrice",
    rating: 4,
    package: "Pacchetto Business"
  },
  {
    text: "La nostra clinica veterinaria ora gestisce tutto online facilmente.",
    author: "Dr. Paolo M.",
    role: "Veterinario",
    rating: 5,
    package: "Pacchetto Starter"
  },
  {
    text: "Portfolio online che ha attirato clienti internazionali.",
    author: "Sofia A.",
    role: "Fotografa",
    rating: 4,
    package: "Pacchetto Starter"
  },
  {
    text: "Sistema di prenotazioni che ha rivoluzionato il nostro salone.",
    author: "Mirko D.",
    role: "Parrucchiere",
    rating: 5,
    package: "Pacchetto Business"
  },
  {
    text: "App mobile che ha migliorato l'esperienza dei nostri clienti.",
    author: "Federica O.",
    role: "Retail Manager",
    rating: 4,
    package: "Pacchetto Premium"
  },
  {
    text: "Consulenza strategica che ci ha portato al successo digitale.",
    author: "Matteo K.",
    role: "Founder",
    rating: 5,
    package: "Pacchetto Enterprise"
  },
  {
    text: "Sito responsive perfetto per il nostro negozio di abbigliamento.",
    author: "Giuliana H.",
    role: "Stilista",
    rating: 4,
    package: "Pacchetto Business"
  },
  {
    text: "Integrazione perfetta con i nostri sistemi gestionali esistenti.",
    author: "Simone J.",
    role: "Operations Manager",
    rating: 5,
    package: "Pacchetto Enterprise"
  },
  {
    text: "La nostra pizzeria ora riceve ordini online 24/7 senza problemi.",
    author: "Antonio Q.",
    role: "Pizzaiolo",
    rating: 4,
    package: "Pacchetto Starter"
  }
];

export const Testimonials: React.FC = () => {
  const [translateX, setTranslateX] = useState(0);

  // Continuous smooth movement with seamless loop
  useEffect(() => {
    const interval = setInterval(() => {
      setTranslateX(prev => {
        const newValue = prev - 0.5;
        // Reset when reaching the end of first set to create seamless loop
        if (Math.abs(newValue) >= testimonials.length * 280) {
          return 0;
        }
        return newValue;
      });
    }, 16); // ~60fps for smooth animation

    return () => clearInterval(interval);
  }, []);

  const TestimonialCard: React.FC<{ testimonial: any; index: number }> = ({ testimonial, index }) => (
    <div className="flex-shrink-0 w-64 mx-2">
      <div className="relative bg-gray-900 p-4 rounded-xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 h-full">
        {/* Quote Icon */}
        <div className="absolute -top-2 left-4">
          <div className="w-5 h-5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
            <Quote className="h-2.5 w-2.5 text-white" />
          </div>
        </div>

        {/* Package Badge */}
        <div className="mb-2 mt-1">
          <span className="inline-block px-2 py-0.5 text-xs font-semibold bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 rounded-full border border-cyan-500/30">
            {testimonial.package}
          </span>
        </div>

        {/* Stars */}
        <div className="flex mb-2">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
          ))}
        </div>

        {/* Testimonial Text */}
        <blockquote className="text-gray-300 text-xs mb-3 leading-relaxed line-clamp-3">
          "{testimonial.text}"
        </blockquote>

        {/* Author */}
        <div className="border-t border-gray-700 pt-3">
          <div className="flex items-center">
            <div className="w-7 h-7 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xs">
                {testimonial.author.charAt(0)}
              </span>
            </div>
            <div className="ml-2">
              <p className="text-white font-semibold text-xs">{testimonial.author}</p>
              <p className="text-cyan-400 text-xs">{testimonial.role}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Cosa dicono i nostri{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              clienti
            </span>
          </h2>
        </div>

        <div>
          {/* Single Row - Moving Left */}
          <div className="relative overflow-hidden">
            <div 
              className="flex"
              style={{
                transform: `translateX(${translateX}px)`,
                width: `${testimonials.length * 2 * 280}px`
              }}
            >
              {/* First set of testimonials */}
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={`first-set-${index}`} testimonial={testimonial} index={index} />
              ))}
              {/* Second set (duplicate) for seamless loop */}
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={`second-set-${index}`} testimonial={testimonial} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};