import React from 'react';
import { services } from '../data/services';
import ServiceCard from '../components/ServiceCard';

const ServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Nossos Serviços</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Oferecemos uma ampla gama de serviços técnicos para atender todas as suas 
            necessidades tecnológicas, com qualidade e preço justo.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
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

        {/* Service Process */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Como Funciona Nosso Atendimento</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-2">Solicitação</h3>
              <p className="text-gray-600">
                Entre em contato por telefone, WhatsApp ou através do formulário em nosso site.
                Descreva seu problema ou necessidade.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-2">Diagnóstico</h3>
              <p className="text-gray-600">
                Nossa equipe técnica avaliará o problema e fará um diagnóstico inicial, 
                fornecendo um orçamento transparente.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-2">Execução</h3>
              <p className="text-gray-600">
                Após a aprovação do orçamento, realizamos o serviço com agilidade e qualidade, 
                mantendo você informado durante todo o processo.
              </p>
            </div>
          </div>
        </div>

        {/* Service Guarantees */}
        <div className="mt-20 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-6 text-center">Nossas Garantias</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Garantia de Serviços</h3>
                <p className="text-gray-600">
                  Todos os nossos serviços de manutenção possuem garantia técnica, 
                  proporcionando tranquilidade e confiança aos nossos clientes.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-timer"><path d="M10 2h4"/><path d="M12 14v-4"/><path d="M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6"/><path d="M9 17H4v5"/></svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Prazo de Entrega</h3>
                <p className="text-gray-600">
                  Comprometemo-nos a cumprir os prazos estabelecidos, respeitando 
                  o tempo dos nossos clientes e a urgência de cada caso.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-receipt-text"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"/><path d="M14 8H8"/><path d="M16 12H8"/><path d="M13 16H8"/></svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Orçamento Detalhado</h3>
                <p className="text-gray-600">
                  Fornecemos orçamentos transparentes, detalhando cada serviço 
                  e peça necessária, sem custos adicionais não informados.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-headphones"><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"/></svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Suporte Pós-Serviço</h3>
                <p className="text-gray-600">
                  Após a conclusão do serviço, continuamos disponíveis para 
                  solucionar dúvidas e fornecer orientações adicionais.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;