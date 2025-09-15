import React, { useEffect, useRef, useState } from 'react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    text: "CapitalNet ha raddoppiato le prenotazioni online del nostro ristorante in 3 mesi.",
    author: "Giulia R.",
    role: "Ristoratrice",
    rating: 5
  },
  {
    text: "Sito dinamico e veloce: più richieste per il nostro autonoleggio.",
    author: "Marco T.",
    role: "Autonoleggi",
    rating: 5
  },
  {
    text: "Supporto impeccabile, ci hanno guidati nella strategia digitale.",
    author: "Elena S.",
    role: "Agenzia Marketing",
    rating: 5
  }
];

export const Testimonials: React.FC = () => {
  const [visibleItems, setVisibleItems] = useState<boolean[]>(Array(testimonials.length + 1).fill(false));
  const testimonialsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
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
          }
        });
      },
      { threshold: 0.2 } // L'animazione inizia quando almeno il 20% dell'elemento è visibile
    );

    testimonialsRef.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      testimonialsRef.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" ref={(el) => (testimonialsRef.current[testimonials.length] = el)} data-index={testimonials.length}>
          <h2 
            className={`text-3xl md:text-4xl font-bold text-white mb-6 transition-all duration-700 transform ${visibleItems[testimonials.length] ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}
          >
            Cosa dicono i nostri{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              clienti
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              ref={(el) => (testimonialsRef.current[index] = el)}
              data-index={index}
              className={`relative bg-gray-900 p-8 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-700 hover:shadow-xl hover:shadow-cyan-500/10 transform ${visibleItems[index] ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                  <Quote className="h-4 w-4 text-white" />
                </div>
              </div>

              {/* Stars */}
              <div className="flex mb-4 mt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-gray-300 text-lg mb-6 leading-relaxed">
                "{testimonial.text}"
              </blockquote>

              {/* Author */}
              <div className="border-t border-gray-700 pt-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div className="ml-4">
                    <p className="text-white font-semibold">{testimonial.author}</p>
                    <p className="text-cyan-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};