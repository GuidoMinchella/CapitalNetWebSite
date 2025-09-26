import React from 'react';
import { MessageCircle, Lightbulb, Code, Shield, Rocket, ArrowRight, CheckCircle, Clock, Users, Target } from 'lucide-react';
import { Button } from '../components/Button';

const PercorsoCapitalNet = () => {
  const phases = [
    {
      id: 1,
      title: "Consulenza iniziale",
      description: "Incontriamo il cliente per analizzare insieme esigenze, obiettivi e visione. Cerchiamo di capire esattamente cosa serve al suo business, ponendo domande mirate e ascoltando con attenzione. Questo ci permette di proporre la soluzione migliore e più adatta al suo budget.",
      icon: MessageCircle,
      highlights: ["Analisi esigenze", "Definizione obiettivi", "Studio budget", "Proposta personalizzata"]
    },
    {
      id: 2,
      title: "Strategia e design",
      description: "Creiamo una strategia digitale personalizzata, preparando mockup e bozze grafiche. Ogni dettaglio del progetto viene pianificato prima di iniziare lo sviluppo, così il cliente ha la massima trasparenza e può richiedere modifiche già in questa fase.",
      icon: Lightbulb,
      highlights: ["Strategia digitale", "Mockup e bozze", "Pianificazione dettagliata", "Massima trasparenza"]
    },
    {
      id: 3,
      title: "Sviluppo",
      description: "Il nostro team di sviluppatori trasforma il design in un prodotto funzionante e performante. Utilizziamo tecnologie moderne e scalabili per garantire affidabilità nel tempo.",
      icon: Code,
      highlights: ["Tecnologie moderne", "Codice scalabile", "Performance ottimizzate", "Affidabilità garantita"],
      special: "👉 Offriamo consulenza e assistenza 24/7: il cliente non sarà mai lasciato solo durante lo sviluppo."
    },
    {
      id: 4,
      title: "Testing & QA",
      description: "Ogni progetto viene testato a fondo: funzionalità, sicurezza, performance ed esperienza utente. Verifichiamo che tutto sia all'altezza delle aspettative e che il risultato finale sia stabile e pronto al lancio.",
      icon: Shield,
      highlights: ["Test funzionalità", "Controlli sicurezza", "Analisi performance", "UX testing"]
    },
    {
      id: 5,
      title: "Launch",
      description: "Il progetto viene lanciato con una strategia di deployment sicura e monitoriamo le prime performance per correggere eventuali problemi iniziali. Accompagniamo il cliente anche dopo la consegna, così da garantire continuità.",
      icon: Rocket,
      highlights: ["Deploy sicuro", "Monitoraggio performance", "Supporto post-lancio", "Continuità garantita"]
    }
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-form');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="pt-24 pb-20 bg-black min-h-screen">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2306b6d4' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mb-6">
            <Target className="h-8 w-8 text-white" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Il Percorso{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              CapitalNet
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Dalla prima consulenza al successo del tuo business digitale: ecco come trasformiamo le tue idee in realtà attraverso un processo strutturato e trasparente.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Line - Spostata più a sinistra su mobile */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500 transform md:-translate-x-0.5"></div>

          {/* Phases */}
          <div className="space-y-16">
            {phases.map((phase, index) => {
              const IconComponent = phase.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={phase.id} className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Phase Number - Mobile Only - Centrato sulla timeline spostata */}
                  <div className="absolute left-4 md:hidden w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm transform -translate-x-1/2 z-30 border-2 border-black">
                    {phase.id}
                  </div>

                  {/* Linea di collegamento - Solo mobile - Posizionata sotto la card */}
                  <div className="absolute left-8 md:hidden w-12 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 top-1/2 transform -translate-y-1/2 z-0"></div>

                  {/* Content - Con margini per mobile */}
                  <div className={`flex-1 ml-12 mr-20 md:ml-0 md:mr-0 ${isEven ? 'md:pr-16' : 'md:pl-16'}`}>
                    <div className={`relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-[1.02] ${isEven ? 'md:mr-8' : 'md:ml-8'} z-20`}>
                      
                      {/* Phase Label - Centered */}
                      <div className="text-center mb-6">
                        <h2 className="text-2xl font-bold text-cyan-400">Fase {phase.id}</h2>
                      </div>

                      {/* Icon and Title - Centered */}
                      <div className="flex items-center justify-center mb-6">
                        <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mr-3">
                          <IconComponent className="h-5 w-5 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-white">{phase.title}</h3>
                      </div>

                      {/* Desktop Layout: Content Left + Image Right */}
                      <div className="md:flex md:gap-8 md:items-start">
                        {/* Left Side - Content (Desktop) */}
                        <div className="md:flex-1 md:space-y-4">
                          {/* Phase Image - Mobile Only */}
                          <div className="flex justify-center mb-6 md:hidden">
                            <div className="w-48 h-48 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center border border-cyan-500/30 overflow-hidden">
                              {phase.id === 1 && (
                                <img 
                                  src="/images/fase1.jpg" 
                                  alt="Fase 1 - Consulenza iniziale" 
                                  className="w-full h-full object-cover rounded-2xl"
                                />
                              )}
                              {phase.id === 2 && (
                                <img 
                                  src="/images/fase2.jpg" 
                                  alt="Fase 2 - Strategia e design" 
                                  className="w-full h-full object-cover rounded-2xl"
                                />
                              )}
                              {phase.id === 3 && (
                                <img 
                                  src="/images/fase3.png" 
                                  alt="Fase 3 - Sviluppo" 
                                  className="w-full h-full object-cover rounded-2xl"
                                />
                              )}
                              {phase.id === 4 && (
                                <img 
                                  src="/images/fase4.webp" 
                                  alt="Fase 4 - Testing & QA" 
                                  className="w-full h-full object-cover rounded-2xl"
                                />
                              )}
                              {phase.id === 5 && (
                                <img 
                                  src="/images/fase5.jpg" 
                                  alt="Fase 5 - Launch" 
                                  className="w-full h-full object-cover rounded-2xl"
                                />
                              )}
                            </div>
                          </div>

                          {/* Content - Description and Highlights */}
                          <div className="space-y-4">
                            {/* Description */}
                            <p className="text-gray-300 leading-relaxed text-base text-center md:text-left">
                              {phase.description}
                            </p>

                            {/* Special Note */}
                            {phase.special && (
                              <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-3">
                                <p className="text-cyan-300 text-sm font-medium">{phase.special}</p>
                              </div>
                            )}

                            {/* Highlights */}
                            <div className="grid grid-cols-1 gap-2">
                              {phase.highlights.map((highlight, highlightIndex) => (
                                <div key={highlightIndex} className="flex items-center text-gray-300 text-sm">
                                  <CheckCircle className="h-4 w-4 text-cyan-400 mr-2 flex-shrink-0" />
                                  <span>{highlight}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Right Side - Image (Desktop Only) */}
                        <div className="hidden md:block md:w-80">
                          <div className="w-full h-72 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center border border-cyan-500/30 overflow-hidden">
                            {phase.id === 1 && (
                              <img 
                                src="/images/fase1.jpg" 
                                alt="Fase 1 - Consulenza iniziale" 
                                className="w-full h-full object-cover rounded-2xl"
                              />
                            )}
                            {phase.id === 2 && (
                              <img 
                                src="/images/fase2.jpg" 
                                alt="Fase 2 - Strategia e design" 
                                className="w-full h-full object-cover rounded-2xl"
                              />
                            )}
                            {phase.id === 3 && (
                              <img 
                                src="/images/fase3.png" 
                                alt="Fase 3 - Sviluppo" 
                                className="w-full h-full object-cover rounded-2xl"
                              />
                            )}
                            {phase.id === 4 && (
                              <img 
                                src="/images/fase4.webp" 
                                alt="Fase 4 - Testing & QA" 
                                className="w-full h-full object-cover rounded-2xl"
                              />
                            )}
                            {phase.id === 5 && (
                              <img 
                                src="/images/fase5.jpg" 
                                alt="Fase 5 - Launch" 
                                className="w-full h-full object-cover rounded-2xl"
                              />
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-32 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Perché scegliere il nostro{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                percorso
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Un approccio strutturato che garantisce risultati concreti e duraturi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Tempi certi</h3>
              <p className="text-gray-400">Rispettiamo sempre le scadenze concordate grazie alla nostra metodologia strutturata</p>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Supporto 24/7</h3>
              <p className="text-gray-400">Assistenza continua durante tutto il percorso, non sarai mai lasciato solo</p>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Risultati garantiti</h3>
              <p className="text-gray-400">Ogni fase è progettata per massimizzare il ROI del tuo investimento digitale</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-3xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pronto a iniziare il tuo percorso?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Contattaci per una consulenza gratuita e scopri come possiamo trasformare la tua visione in realtà digitale
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="outline"
              className="bg-white text-cyan-600 border-white hover:bg-cyan-50"
              onClick={scrollToContact}
            >
              Consulenza gratuita
            </Button>
            <Button 
              size="lg"
              className="bg-cyan-700 hover:bg-cyan-800 border-cyan-700"
              icon={ArrowRight}
            >
              Scopri i nostri prezzi
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PercorsoCapitalNet;