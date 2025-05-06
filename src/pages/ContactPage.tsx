import React from 'react';
import ContactForm from '../components/ContactForm';
import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Entre em Contato</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Estamos à disposição para atender suas necessidades. Entre em contato 
            conosco por telefone, WhatsApp, e-mail ou visite nossa loja.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-black text-white p-6">
                <h2 className="text-2xl font-bold mb-2">Informações de Contato</h2>
                <p className="text-gray-300">
                  Diversas formas de entrar em contato com nossa equipe.
                </p>
              </div>
              
              <div className="p-6">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Phone size={20} className="text-black" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-bold mb-1">Telefone</h3>
                      <p className="text-gray-600">
                        <a href="tel:6634783673" className="hover:text-black transition-colors">
                          (66) 3478-3673
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Mail size={20} className="text-black" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-bold mb-1">E-mail</h3>
                      <p className="text-gray-600">
                        <a href="mailto:contato@techstore.com.br" className="hover:text-black transition-colors">
                          contato@techstore.com.br
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <MapPin size={20} className="text-black" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-bold mb-1">Endereço</h3>
                      <p className="text-gray-600">
                        Av. Principal, 1234, Centro<br />
                        Sua Cidade - MT<br />
                        CEP: 78000-000
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Clock size={20} className="text-black" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-bold mb-1">Horário de Funcionamento</h3>
                      <p className="text-gray-600">
                        Segunda a Sexta: 8h às 18h<br />
                        Sábado: 8h às 12h<br />
                        Domingo: Fechado
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="font-bold mb-3">Redes Sociais</h3>
                  <div className="flex space-x-4">
                    <a 
                      href="https://instagram.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                    >
                      <Instagram size={20} className="text-black" />
                    </a>
                    <a 
                      href="https://facebook.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                    >
                      <Facebook size={20} className="text-black" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
        
        {/* Map Section */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Nossa Localização</h2>
            <p className="text-gray-600 mb-4">
              Estamos localizados no centro da cidade, com fácil acesso e estacionamento.
            </p>
          </div>
          
          <div className="h-96 bg-gray-200">
            {/* Here you would embed a Google Maps iframe, but for this example, we'll use a placeholder */}
            <div className="w-full h-full flex items-center justify-center bg-gray-200">
              <p className="text-gray-500">Mapa será carregado aqui</p>
              {/* Example of how a map would be embedded:
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.5498337555!2d-34.90101622457262!3d-7.9354594789426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDI0JzI0LjgiTiA3NcKwMTInMTAuOCJX!5e0!3m2!1sen!2sbr!4v1629391714631!5m2!1sen!2sbr" 
                width="100%" 
                height="100%" 
                style="border:0;" 
                allowFullScreen="" 
                loading="lazy"
              ></iframe>
              */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;