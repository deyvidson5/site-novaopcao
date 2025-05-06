import React from 'react';
import { team } from '../data/team';
import TeamMemberCard from '../components/TeamMemberCard';
import { Building, MapPin, Clock, Target, History } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* About Section */}
        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold mb-4">Quem Somos</h1>
              <p className="text-gray-600">
                Conheça nossa história, nossa equipe e nossa missão de fornecer 
                soluções tecnológicas de qualidade.
              </p>
            </div>
            
            <div className="space-y-6 text-gray-700">
              <p>
                Somos uma empresa especializada em soluções tecnológicas, oferecendo serviços 
                de manutenção em computadores, notebooks e celulares, além de trabalhar com 
                redes, sistemas de CFTV e certificados digitais.
              </p>
              <p>
                Nossa equipe é formada por profissionais qualificados e apaixonados por tecnologia, 
                comprometidos em oferecer um atendimento personalizado e soluções eficientes 
                para nossos clientes, sejam eles residenciais ou empresariais.
              </p>
              <p>
                Acreditamos que a tecnologia deve ser uma aliada no dia a dia, e por isso 
                trabalhamos para tornar sua experiência tecnológica a mais tranquila e 
                eficiente possível, sempre com transparência, qualidade e preço justo.
              </p>
            </div>
          </div>
        </div>

        {/* Company Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <Building size={30} className="text-black" />
            </div>
            <h3 className="text-xl font-bold mb-2">Nossa Empresa</h3>
            <p className="text-gray-600">
              Loja de informática completa, oferecendo serviços técnicos especializados 
              e produtos de qualidade.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <MapPin size={30} className="text-black" />
            </div>
            <h3 className="text-xl font-bold mb-2">Localização</h3>
            <p className="text-gray-600">
              Estamos localizados no centro da cidade, em um espaço moderno e 
              confortável para atendê-lo.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <Clock size={30} className="text-black" />
            </div>
            <h3 className="text-xl font-bold mb-2">Horário</h3>
            <p className="text-gray-600">
              Segunda a Sexta: 7:30h às 18h<br />
              Sábado: 7:30h às 11:30h
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <History size={30} className="text-black" />
            </div>
            <h3 className="text-xl font-bold mb-2">Experiência</h3>
            <p className="text-gray-600">
              Mais de 10 anos de experiência no mercado de tecnologia, com foco na 
              qualidade e satisfação do cliente.
            </p>
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="bg-black text-white p-8 rounded-lg mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Target size={24} className="mr-2" />
                <h3 className="text-xl font-bold">Missão</h3>
              </div>
              <p className="text-gray-300">
                Proporcionar soluções tecnológicas de qualidade, com atendimento 
                personalizado e preço justo, garantindo a satisfação de nossos clientes.
              </p>
            </div>
            
            <div>
              <div className="flex items-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye mr-2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                <h3 className="text-xl font-bold">Visão</h3>
              </div>
              <p className="text-gray-300">
                Ser referência na região como empresa de tecnologia, reconhecida pela 
                qualidade dos serviços, inovação e compromisso com os clientes.
              </p>
            </div>
            
            <div>
              <div className="flex items-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star mr-2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <h3 className="text-xl font-bold">Valores</h3>
              </div>
              <ul className="text-gray-300 space-y-2">
                <li>• Qualidade e excelência em tudo que fazemos</li>
                <li>• Honestidade e transparência nas relações</li>
                <li>• Compromisso com o cliente</li>
                <li>• Inovação e atualização constante</li>
                <li>• Respeito e trabalho em equipe</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Nossa Equipe</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <TeamMemberCard 
                key={member.id}
                name={member.name}
                role={member.role}
                description={member.description}
                image={member.image}
              />
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-8 text-center">Por Que Escolher Nossa Empresa?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Profissionalismo</h3>
                <p className="text-gray-600">
                  Nossa equipe é formada por profissionais qualificados e em constante 
                  atualização, garantindo um trabalho de qualidade.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Atendimento Personalizado</h3>
                <p className="text-gray-600">
                  Cada cliente e cada problema é único, por isso oferecemos um 
                  atendimento personalizado para atender suas necessidades específicas.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Transparência</h3>
                <p className="text-gray-600">
                  Trabalhamos com total transparência, desde o diagnóstico até a 
                  conclusão do serviço, sem surpresas no orçamento.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Garantia de Serviço</h3>
                <p className="text-gray-600">
                  Oferecemos garantia em todos os nossos serviços, demonstrando nossa 
                  confiança na qualidade do trabalho realizado.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;