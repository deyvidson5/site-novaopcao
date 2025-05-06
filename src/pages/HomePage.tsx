import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Phone, Clock, CheckCircle2 } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data/services';

const HomePage: React.FC = () => {
  // Filter featured services
  const featuredServices = services.filter(service => service.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-black text-white h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Tecnologia" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Soluções em Tecnologia para seu Negócio e Vida
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              Serviços técnicos especializados, produtos de qualidade e 
              atendimento personalizado para resolver seus problemas tecnológicos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/servicos" 
                className="bg-white text-black font-medium px-6 py-3 rounded-md hover:bg-gray-200 transition-colors text-center"
              >
                Nossos Serviços
              </Link>
              <Link 
                to="/contato" 
                className="border-2 border-white text-white font-medium px-6 py-3 rounded-md hover:bg-white/10 transition-colors text-center"
              >
                Fale Conosco
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nossos Serviços</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Oferecemos soluções completas em tecnologia para atender todas as suas necessidades, 
              seja na manutenção de equipamentos ou implementação de sistemas.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <ServiceCard 
                key={service.id}
                id={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
                featured={service.featured}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/servicos" 
              className="inline-flex items-center text-black font-medium hover:underline"
            >
              Ver todos os serviços
              <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Por Que Escolher Nossa Empresa?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Com mais de 10 anos de experiência no mercado, nossa equipe está preparada para oferecer 
              o melhor serviço com agilidade, qualidade e preço justo.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 border border-gray-200 rounded-lg text-center hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-black text-white rounded-full mb-4">
                <CheckCircle2 size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Profissionais Qualificados</h3>
              <p className="text-gray-600">Técnicos com experiência e treinamento constante.</p>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-lg text-center hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-black text-white rounded-full mb-4">
                <Clock size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Atendimento Rápido</h3>
              <p className="text-gray-600">Priorizamos a agilidade sem comprometer a qualidade.</p>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-lg text-center hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-black text-white rounded-full mb-4">
                <Phone size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Suporte Personalizado</h3>
              <p className="text-gray-600">Atendimento personalizado para cada cliente e situação.</p>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-lg text-center hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-black text-white rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-badge-dollar-sign"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 18V6"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Preço Justo</h3>
              <p className="text-gray-600">Transparência nos orçamentos e valores competitivos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Precisa de suporte técnico?</h2>
            <p className="text-xl mb-8">
              Entre em contato agora mesmo e receba um atendimento rápido e personalizado 
              para resolver seu problema tecnológico.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:6634783673" 
                className="bg-white text-black font-medium px-6 py-3 rounded-md hover:bg-gray-200 transition-colors flex items-center justify-center"
              >
                <Phone size={18} className="mr-2" />
                (66) 3478-3673
              </a>
              <Link 
                to="/contato" 
                className="border-2 border-white text-white font-medium px-6 py-3 rounded-md hover:bg-white/10 transition-colors"
              >
                Entrar em Contato
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;