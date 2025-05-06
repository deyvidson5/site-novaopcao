import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, FileDigit, Shield, Building2, CircleDollarSign } from 'lucide-react';

const CertificatesPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="bg-black text-white p-8 md:p-12 rounded-lg mb-12">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">Certificados Digitais</h1>
            <p className="text-xl mb-6">
              Emissão e renovação de certificados digitais para pessoas físicas e jurídicas,
              com atendimento especializado e preços competitivos.
            </p>
            <Link 
              to="/contato?service=Certificados%20Digitais" 
              className="inline-flex items-center bg-white text-black px-6 py-3 rounded-md hover:bg-gray-200 transition-colors"
            >
              Solicitar Certificado
            </Link>
          </div>
        </div>

        {/* What is a Digital Certificate */}
        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-4">O que é um Certificado Digital?</h2>
              <p className="text-gray-600 mb-4">
                Um certificado digital é uma identidade eletrônica que garante autenticidade, 
                confidencialidade e integridade nas transações digitais. É como um documento 
                de identidade virtual, que permite a assinatura de documentos e a realização 
                de diversas operações online com validade jurídica.
              </p>
              <p className="text-gray-600">
                Com um certificado digital, você pode assinar documentos eletrônicos, 
                acessar serviços governamentais, emitir notas fiscais eletrônicas, participar 
                de licitações e muito mais, tudo com total segurança e validade legal.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center items-center">
              <FileDigit size={150} className="text-black opacity-80" />
            </div>
          </div>
        </div>

        {/* Types of Certificates */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Tipos de Certificados Digitais</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">
                <Shield size={40} className="text-black" />
              </div>
              <h3 className="text-xl font-bold mb-2">e-CPF</h3>
              <p className="text-gray-600 mb-4">
                Certificado digital para pessoa física. Garante sua identidade no meio digital, 
                permitindo realizar transações eletrônicas com a mesma validade jurídica da 
                assinatura em papel.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="mt-1 text-green-500 flex-shrink-0" />
                  <span>Assinatura digital em documentos</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="mt-1 text-green-500 flex-shrink-0" />
                  <span>Acesso a serviços online do governo</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="mt-1 text-green-500 flex-shrink-0" />
                  <span>Declaração de Imposto de Renda</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">
                <Building2 size={40} className="text-black" />
              </div>
              <h3 className="text-xl font-bold mb-2">e-CNPJ</h3>
              <p className="text-gray-600 mb-4">
                Certificado digital para pessoa jurídica. Permite que empresas realizem 
                transações eletrônicas com segurança e validade jurídica, facilitando 
                processos burocráticos.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="mt-1 text-green-500 flex-shrink-0" />
                  <span>Emissão de Notas Fiscais Eletrônicas</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="mt-1 text-green-500 flex-shrink-0" />
                  <span>Acesso a portais governamentais empresariais</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="mt-1 text-green-500 flex-shrink-0" />
                  <span>Participação em licitações eletrônicas</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Benefícios do Certificado Digital</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-black text-white rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Segurança</h3>
              <p className="text-gray-600">
                Garante autenticidade, integridade e confidencialidade nas 
                transações digitais e documentos eletrônicos.
              </p>
            </div>
            
            <div className="text-center p-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-black text-white rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-check"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/><path d="m9 9.5 2 2 4-4"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Validade Jurídica</h3>
              <p className="text-gray-600">
                Documentos assinados digitalmente têm o mesmo valor 
                legal que documentos físicos assinados à mão.
              </p>
            </div>
            
            <div className="text-center p-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-black text-white rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-timer"><path d="M10 2h4"/><path d="M12 14v-4"/><path d="M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6"/><path d="M9 17H4v5"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Praticidade</h3>
              <p className="text-gray-600">
                Elimina a necessidade de deslocamento e reduz 
                a burocracia em diversos processos.
              </p>
            </div>
            
            <div className="text-center p-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-black text-white rounded-full mb-4">
                <CircleDollarSign size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">Economia</h3>
              <p className="text-gray-600">
                Reduz custos com impressões, transporte e 
                armazenamento de documentos físicos.
              </p>
            </div>
            
            <div className="text-center p-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-black text-white rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Acessibilidade</h3>
              <p className="text-gray-600">
                Acesso a diversos serviços governamentais e 
                privados de forma online e segura.
              </p>
            </div>
            
            <div className="text-center p-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-black text-white rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-leaf"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9 14 9.28 12.15 10 10"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Sustentabilidade</h3>
              <p className="text-gray-600">
                Contribui para a redução do uso de papel, 
                ajudando a preservar o meio ambiente.
              </p>
            </div>
          </div>
        </div>

        {/* How to Get */}
        <div className="bg-black text-white p-8 rounded-lg mb-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Como Obter seu Certificado Digital</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-4 border border-white/30 rounded-lg">
              <div className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center font-bold text-xl mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-2">Agende um Horário</h3>
              <p className="text-gray-300">
                Entre em contato conosco por telefone, WhatsApp ou pelo formulário em nosso site 
                para agendar o melhor horário para seu atendimento.
              </p>
            </div>
            
            <div className="p-4 border border-white/30 rounded-lg">
              <div className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center font-bold text-xl mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-2">Prepare os Documentos</h3>
              <p className="text-gray-300">
                Reúna a documentação necessária conforme orientações da nossa equipe, 
                que variam de acordo com o tipo de certificado.
              </p>
            </div>
            
            <div className="p-4 border border-white/30 rounded-lg">
              <div className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center font-bold text-xl mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-2">Emissão do Certificado</h3>
              <p className="text-gray-300">
                Compareça em nossa loja no horário agendado com os documentos solicitados 
                para a emissão rápida e segura do seu certificado digital.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <h2 className="text-3xl font-bold mb-4">Pronto para obter seu Certificado Digital?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Nossa equipe especializada está pronta para atendê-lo e fornecer todas as 
            informações necessárias para a emissão do seu certificado digital.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:6634783673" 
              className="bg-black text-white font-medium px-6 py-3 rounded-md hover:bg-gray-800 transition-colors"
            >
              Ligar: (66) 3478-3673
            </a>
            <Link 
              to="/contato?service=Certificados%20Digitais" 
              className="border-2 border-black text-black font-medium px-6 py-3 rounded-md hover:bg-black/5 transition-colors"
            >
              Enviar Mensagem
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificatesPage;