import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Instagram, Facebook} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-bold text-xl">Nova Opção Informática</span>
            </div>
            <p className="text-gray-300 text-sm">
              Sua loja de informática completa, oferecendo serviços técnicos especializados 
              e produtos de qualidade para atender todas as suas necessidades tecnológicas.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://instagram.com/novaopcaotecnologia" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com/consertasmartcanarana" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-bold text-lg">Links Rápidos</h3>
            <div className="flex flex-col space-y-2">
              <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              <Link to="/servicos" className="text-gray-300 hover:text-white transition-colors">Serviços</Link>
              <Link to="/certificados" className="text-gray-300 hover:text-white transition-colors">Certificados Digitais</Link>
              <Link to="/quem-somos" className="text-gray-300 hover:text-white transition-colors">Quem Somos</Link>
              <Link to="/galeria" className="text-gray-300 hover:text-white transition-colors">Galeria</Link>
              <Link to="/contato" className="text-gray-300 hover:text-white transition-colors">Contato</Link>
            </div>
          </div>

          {/* Services */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-bold text-lg">Nossos Serviços</h3>
            <div className="flex flex-col space-y-2">
              <Link to="/servicos#computer-repair" className="text-gray-300 hover:text-white transition-colors">Manutenção de Computadores</Link>
              <Link to="/servicos#notebook-repair" className="text-gray-300 hover:text-white transition-colors">Manutenção de Notebooks</Link>
              <Link to="/servicos#phone-repair" className="text-gray-300 hover:text-white transition-colors">Manutenção de Celulares</Link>
              <Link to="/servicos#cctv" className="text-gray-300 hover:text-white transition-colors">Sistemas de CFTV</Link>
              <Link to="/servicos#network" className="text-gray-300 hover:text-white transition-colors">Redes e Cabeamento</Link>
              <Link to="/certificados" className="text-gray-300 hover:text-white transition-colors">Certificados Digitais</Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-bold text-lg">Contato</h3>
            <div className="flex flex-col space-y-3">
              <div className="flex items-start gap-2">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span className="text-gray-300">Rua Tenente Portela, 96, Centro, Canarana - MT</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} />
                <a href="tel:6634783673" className="text-gray-300 hover:text-white transition-colors">(66) 3478-3673</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} />
                <a href="mailto:contato@techstore.com.br" className="text-gray-300 hover:text-white transition-colors">financeiro@novaopcaoinformatica.com.br</a>
              </div>
              <div className="flex items-start gap-2">
                <Clock size={18} className="mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>Segunda a Sexta: 7:30h às 18h</p>
                  <p>Sábado: 7:30h às 11:30h</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Nova Opção Informática. Todos os direitos reservados.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Desenvolvido com ❤️
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;