import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

const portfolioItems = [
  {
    image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    title: 'Ristorante Da Mario',
    category: 'Ristorazione',
    result: '+120% prenotazioni online'
  },
  {
    image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    title: 'AutoRent Plus',
    category: 'Autonoleggi',
    result: '+85% richieste preventivi'
  },
  {
    image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    title: 'Caffè Centrale',
    category: 'Bar & Locali',
    result: '+200% ordini takeaway'
  },
  {
    image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    title: 'Marketing Pro',
    category: 'Agenzia Marketing',
    result: '+150% lead qualificati'
  },
  {
    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    title: 'Trasporti Sicuri',
    category: 'Trasporti & Logistica',
    result: '+90% conversioni'
  },
  {
    image: 'https://images.pexels.com/photos/3184432/pexels-photo-3184432.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    title: 'Hotel Vista Mare',
    category: 'Hospitality',
    result: '+170% prenotazioni dirette'
  }
];

export const Portfolio: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPlaying || isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % portfolioItems.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [isPlaying, isPaused]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % portfolioItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const toggleAutoplay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            I nostri{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              progetti
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Scopri come abbiamo aiutato le aziende a crescere online
          </p>
        </div>

        <div className="relative">
          {/* Main Carousel */}
          <div 
            className="overflow-hidden rounded-2xl"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {portfolioItems.map((item, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="relative h-96 md:h-[500px]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      loading={index === currentIndex ? 'eager' : 'lazy'}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <div className="max-w-2xl">
                        <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm font-medium rounded-full mb-3">
                          {item.category}
                        </span>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                          {item.title}
                        </h3>
                        <p className="text-lg text-gray-300">
                          {item.result}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="absolute top-1/2 -translate-y-1/2 left-4">
            <button
              onClick={prevSlide}
              className="p-3 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              aria-label="Progetto precedente"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 right-4">
            <button
              onClick={nextSlide}
              className="p-3 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              aria-label="Progetto successivo"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Autoplay Control */}
          <div className="absolute top-4 right-4">
            <button
              onClick={toggleAutoplay}
              className="p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              aria-label={isPlaying ? 'Metti in pausa' : 'Riproduci'}
            >
              {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            {portfolioItems.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-cyan-400 w-8'
                    : 'bg-gray-600 hover:bg-gray-400'
                }`}
                aria-label={`Vai al progetto ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};