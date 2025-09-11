import React, { useEffect, useState } from 'react';

interface StatCardProps {
  title: string;
  description: string;
  chart: React.ReactNode;
}

const StatCard: React.FC<StatCardProps> = ({ title, description, chart }) => {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-2xl hover:transform hover:scale-105 transition-all duration-300">
      <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
      <p className="text-gray-300 mb-6 leading-relaxed">{description}</p>
      <div className="flex justify-center">
        {chart}
      </div>
    </div>
  );
};

// Grafico SVG per Identità Digitale (Percentuale aziende con sito web)
const WebsiteChart: React.FC = () => {
  return (
    <div className="text-center">
      <svg width="200" height="120" viewBox="0 0 200 120" className="mb-4">
        {/* Sfondo grafico */}
        <rect x="20" y="20" width="160" height="80" fill="none" stroke="#374151" strokeWidth="2" rx="8"/>
        
        {/* Barre del grafico */}
        <rect x="40" y="70" width="20" height="20" fill="#ef4444" rx="2"/>
        <rect x="70" y="50" width="20" height="40" fill="#f59e0b" rx="2"/>
        <rect x="100" y="30" width="20" height="60" fill="#10b981" rx="2"/>
        <rect x="130" y="25" width="20" height="65" fill="#06b6d4" rx="2"/>
        
        {/* Etichette */}
        <text x="50" y="105" fill="#9ca3af" fontSize="10" textAnchor="middle">2020</text>
        <text x="80" y="105" fill="#9ca3af" fontSize="10" textAnchor="middle">2021</text>
        <text x="110" y="105" fill="#9ca3af" fontSize="10" textAnchor="middle">2022</text>
        <text x="140" y="105" fill="#9ca3af" fontSize="10" textAnchor="middle">2023</text>
      </svg>
      <p className="text-cyan-400 font-semibold text-lg">85% delle aziende ha un sito web</p>
    </div>
  );
};

// Grafico SVG per Fiducia (Aumento interazioni)
const TrustChart: React.FC = () => {
  return (
    <div className="text-center">
      <svg width="200" height="120" viewBox="0 0 200 120" className="mb-4">
        {/* Linea di crescita */}
        <path 
          d="M 30 80 Q 60 70 90 50 Q 120 30 150 25 Q 170 20 180 15" 
          stroke="#06b6d4" 
          strokeWidth="3" 
          fill="none"
          strokeLinecap="round"
        />
        
        {/* Punti sulla linea */}
        <circle cx="30" cy="80" r="4" fill="#06b6d4"/>
        <circle cx="90" cy="50" r="4" fill="#06b6d4"/>
        <circle cx="150" cy="25" r="4" fill="#06b6d4"/>
        <circle cx="180" cy="15" r="4" fill="#06b6d4"/>
        
        {/* Area sotto la curva */}
        <path 
          d="M 30 80 Q 60 70 90 50 Q 120 30 150 25 Q 170 20 180 15 L 180 90 L 30 90 Z" 
          fill="url(#trustGradient)" 
          opacity="0.3"
        />
        
        {/* Gradiente */}
        <defs>
          <linearGradient id="trustGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8"/>
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.1"/>
          </linearGradient>
        </defs>
        
        {/* Etichette */}
        <text x="30" y="105" fill="#9ca3af" fontSize="10" textAnchor="middle">Gen</text>
        <text x="90" y="105" fill="#9ca3af" fontSize="10" textAnchor="middle">Giu</text>
        <text x="150" y="105" fill="#9ca3af" fontSize="10" textAnchor="middle">Set</text>
        <text x="180" y="105" fill="#9ca3af" fontSize="10" textAnchor="middle">Dic</text>
      </svg>
      <p className="text-cyan-400 font-semibold text-lg">+340% interazioni clienti</p>
    </div>
  );
};

// Grafico SVG per Aumento Clienti (Conversioni)
const ConversionChart: React.FC = () => {
  return (
    <div className="text-center">
      <svg width="200" height="120" viewBox="0 0 200 120" className="mb-4">
        {/* Grafico a torta */}
        <circle cx="100" cy="60" r="35" fill="#374151" stroke="#4b5563" strokeWidth="2"/>
        
        {/* Sezione principale (conversioni) */}
        <path 
          d="M 100 25 A 35 35 0 1 1 85 85 L 100 60 Z" 
          fill="#06b6d4"
        />
        
        {/* Sezione secondaria */}
        <path 
          d="M 100 25 A 35 35 0 0 1 85 85 L 100 60 Z" 
          fill="#1f2937"
        />
        
        {/* Etichette */}
        <text x="120" y="45" fill="#06b6d4" fontSize="12" fontWeight="bold">75%</text>
        <text x="120" y="58" fill="#9ca3af" fontSize="10">Conversioni</text>
        
        <text x="70" y="85" fill="#9ca3af" fontSize="12">25%</text>
        <text x="65" y="98" fill="#9ca3af" fontSize="10">Visitatori</text>
        
        {/* Freccia di crescita */}
        <path d="M 150 30 L 160 25 L 160 35 Z" fill="#10b981"/>
        <line x1="140" y1="40" x2="155" y2="30" stroke="#10b981" strokeWidth="2"/>
      </svg>
      <p className="text-cyan-400 font-semibold text-lg">+250% vendite online</p>
    </div>
  );
};

export const DigitalIdentitySection: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Sfondo fisso con immagine di codice e grafici */}
      <div className="absolute inset-0">
        {/* Sfondo con pattern di codice fisso */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='code' x='0' y='0' width='100' height='100' patternUnits='userSpaceOnUse'%3E%3Ctext x='5' y='15' font-family='monospace' font-size='8' fill='%2306b6d4'%3Efunction()%7B%3C/text%3E%3Ctext x='5' y='25' font-family='monospace' font-size='8' fill='%2310b981'%3E  return data;%3C/text%3E%3Ctext x='5' y='35' font-family='monospace' font-size='8' fill='%2306b6d4'%3E%7D%3C/text%3E%3Ctext x='5' y='50' font-family='monospace' font-size='8' fill='%23f59e0b'%3Econst chart =%3C/text%3E%3Ctext x='5' y='60' font-family='monospace' font-size='8' fill='%2310b981'%3E  %7Btype: 'bar'%7D%3C/text%3E%3Ctext x='5' y='75' font-family='monospace' font-size='8' fill='%2306b6d4'%3Eif(success)%7B%3C/text%3E%3Ctext x='5' y='85' font-family='monospace' font-size='8' fill='%2310b981'%3E  analytics++%3C/text%3E%3Ctext x='5' y='95' font-family='monospace' font-size='8' fill='%2306b6d4'%3E%7D%3C/text%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23code)'/%3E%3C/svg%3E")`
            ,backgroundAttachment: 'fixed',
            backgroundSize: '200px 200px',
            backgroundRepeat: 'repeat'
          }}
        />
        
        {/* Overlay con gradiente */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-blue-900/90 to-gray-800/95" />
        
        {/* Pattern geometrici fissi */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border border-cyan-400 rounded-full"></div>
          <div className="absolute top-40 right-20 w-24 h-24 border border-blue-400 rounded-full"></div>
          <div className="absolute bottom-20 left-1/3 w-40 h-40 border border-cyan-300 rounded-full"></div>
          <div className="absolute bottom-40 right-10 w-20 h-20 border border-blue-300 rounded-full"></div>
          
          {/* Elementi grafici aggiuntivi */}
          <div className="absolute top-1/4 left-1/4 w-16 h-16">
            <svg viewBox="0 0 64 64" className="w-full h-full text-cyan-400">
              <path d="M8 8h48v8H8zM8 24h32v8H8zM8 40h40v8H8z" fill="currentColor" opacity="0.3"/>
            </svg>
          </div>
          
          <div className="absolute top-3/4 right-1/4 w-20 h-20">
            <svg viewBox="0 0 80 80" className="w-full h-full text-blue-400">
              <circle cx="40" cy="40" r="30" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.4"/>
              <path d="M40 10 L50 30 L70 30 L55 45 L60 65 L40 55 L20 65 L25 45 L10 30 L30 30 Z" fill="currentColor" opacity="0.2"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Contenuto in primo piano */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Perché la tua azienda ha bisogno di una{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              presenza digitale
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Nel mondo digitale di oggi, non essere online significa non esistere. 
            Scopri come una forte identità digitale può trasformare il tuo business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          <StatCard
            title="Identità Digitale"
            description="Oggi il 93% dei consumatori cerca online prima di acquistare. Senza una presenza digitale professionale, la tua azienda rimane invisibile ai potenziali clienti che ti stanno già cercando."
            chart={<WebsiteChart />}
          />
          
          <StatCard
            title="Costruisci Fiducia"
            description="Un sito web professionale e un'app ben progettata aumentano la credibilità del tuo brand. I clienti si fidano di più delle aziende con una forte presenza online e interagiscono 3 volte di più."
            chart={<TrustChart />}
          />
          
          <StatCard
            title="Aumenta le Vendite"
            description="Le aziende con una strategia digitale efficace vedono un aumento medio del 250% nelle vendite. Trasforma i visitatori in clienti con un'esperienza digitale ottimizzata."
            chart={<ConversionChart />}
          />
        </div>
      </div>
    </section>
  );
};