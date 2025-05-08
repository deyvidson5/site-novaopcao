export interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
  image: string;
}

export const team: TeamMember[] = [
  {
    id: 'owner',
    name: 'Deyvidson',
    role: 'Técnico',
    description: 'Especialista em manutenção de computadores, notebooks e infraestrutura de redes.',
    image: '/public/images/dey.jpeg'
  },
  {
    id: 'brother-in-law',
    name: 'Higor',
    role: 'Técnico',
    description: 'Especialista em manutenção de celulares, configuração de software e suporte ao cliente.',
    image: '/public/images/higor.jpeg'
  },
  {
    id: 'wife',
    name: 'Maria Fernanda',
    role: 'Vendas/Financeiro',
    description: 'Responsável pela área comercial, atendimento ao cliente e gestão de vendas.',
    image: '/public/images/fer.jpeg'
  },
  {
    id: 'sister-in-law',
    name: 'Ana Eloísa',
    role: 'Certificados Digitais',
    description: 'Especialista em emissão de certificados digitais e suporte comercial.',
    image: '/public/images/elo.jpeg'
  }
];