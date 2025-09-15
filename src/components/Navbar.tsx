import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/listino-prezzi', label: 'Listino prezzi' },
    { path: '/contatti', label: 'Contatti' }
  ];

  const navigate = useNavigate();
  
  const isActivePath = (path: string) => location.pathname === path;
  
  const handleNavigation = (path: string) => {
    if (location.pathname === path) {
      // Se siamo già nella pagina, facciamo solo lo scroll verso l'alto
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Altrimenti navighiamo alla nuova pagina e poi facciamo lo scroll
      navigate(path);
      // Lo scroll viene eseguito dopo che la navigazione è completata
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-cyan-500/20' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button onClick={() => handleNavigation('/')} className="flex items-center space-x-2 group">
            <img 
              src="/images/Flat Vector Logo for 'CapitalNet' Tech Business (1024 x 400 px).png" 
              alt="CapitalNet Logo" 
              className="h-8 w-auto transition-all duration-300" 
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => handleNavigation(link.path)}
                className={`px-4 py-2 rounded-lg transition-all duration-300 font-medium ${
                  isActivePath(link.path)
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25'
                    : 'text-gray-300 hover:text-white hover:bg-cyan-500/10 hover:border-cyan-500/50 border border-transparent'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2 rounded-lg hover:bg-cyan-500/10 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-cyan-500/20 bg-black/95 backdrop-blur-md">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.path}
                  onClick={() => {
                    setIsOpen(false);
                    handleNavigation(link.path);
                  }}
                  className={`px-4 py-3 rounded-lg transition-all duration-300 font-medium ${
                    isActivePath(link.path)
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                      : 'text-gray-300 hover:text-white hover:bg-cyan-500/10'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};