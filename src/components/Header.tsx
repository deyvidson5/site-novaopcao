import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Instagram, MessageCircle} from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'Serviços', path: '/servicos' },
    { title: 'Certificados Digitais', path: '/certificados' },
    { title: 'Quem Somos', path: '/quem-somos' },
    { title: 'Galeria', path: '/galeria' },
    { title: 'Contato', path: '/contato' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black text-white shadow-lg py-2' : 'bg-white text-black py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
          <img
      src="src/images/logo.jpeg"
      alt="Logo"
      className="w-8 h-8" // ajuste o tamanho conforme necessário
    />
            <span className="font-bold text-xl">Nova Opção Informática</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium hover:text-gray-500 transition-colors ${
                  location.pathname === link.path ? 'border-b-2 border-black' : ''
                }`}
              >
                {link.title}
              </Link>
            ))}
          </nav>

          {/* Contact Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:6634783673" className="flex items-center gap-1 hover:text-gray-500 transition-colors">
              <Phone size={18} />
              <span className="text-sm">(66) 3478-3673</span>
            </a>
            <a 
              href="https://instagram.com/novaopcaotecnologia" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-gray-500 transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a 
              href="https://wa.me/556634783673" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 bg-green-600 text-white px-3 py-1 rounded-full hover:bg-green-700 transition-colors"
            >
              <MessageCircle size={16} />
              <span className="text-sm">WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-black focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-md transition-transform duration-300 transform ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium py-2 hover:text-gray-500 transition-colors ${
                  location.pathname === link.path ? 'font-bold' : ''
                }`}
              >
                {link.title}
              </Link>
            ))}
            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
              <a href="tel:6634783673" className="flex items-center gap-1">
                <Phone size={18} />
                <span className="text-sm">(66) 3478-3673</span>
              </a>
              <div className="flex items-center gap-4">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href="https://wa.me/55669XXXXXXXX" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 bg-green-600 text-white px-3 py-1 rounded-full"
                >
                  <MessageCircle size={16} />
                  <span className="text-sm">WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;