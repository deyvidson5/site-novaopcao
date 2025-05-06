export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  featured?: boolean;
}

export const services: Service[] = [
  {
    id: 'computer-repair',
    title: 'Manutenção de Computadores',
    description: 'Serviços especializados de reparo, limpeza, formatação e upgrades para desktops.',
    icon: 'computer',
    featured: true
  },
  {
    id: 'notebook-repair',
    title: 'Manutenção de Notebooks',
    description: 'Reparo de telas, teclados, carcaça, troca de componentes e outras soluções para notebooks.',
    icon: 'laptop',
    featured: true
  },
  {
    id: 'phone-repair',
    title: 'Manutenção de Celulares',
    description: 'Troca de telas, baterias, componentes internos e solução de problemas em smartphones.',
    icon: 'smartphone',
    featured: true
  },
  {
    id: 'network',
    title: 'Redes e Cabeamento',
    description: 'Montagem de sistemas de gerenciamento de redes e serviços de cabeamento estruturado.',
    icon: 'network',
    featured: false
  },
  {
    id: 'cctv',
    title: 'Sistemas de CFTV',
    description: 'Instalação e manutenção de sistemas de câmeras de segurança para residências e empresas.',
    icon: 'video',
    featured: true
  },
  {
    id: 'digital-certificates',
    title: 'Certificados Digitais',
    description: 'Emissão e renovação de certificados digitais para pessoas físicas e jurídicas.',
    icon: 'file-certificate',
    featured: true
  },
  {
    id: 'tech-visits',
    title: 'Visitas Técnicas',
    description: 'Atendimento especializado no local para clientes residenciais e empresariais.',
    icon: 'map-pin',
    featured: false
  },
  {
    id: 'accessories',
    title: 'Acessórios',
    description: 'Venda de periféricos e acessórios para computadores, notebooks e smartphones.',
    icon: 'headphones',
    featured: false
  },
  {
    id: 'software',
    title: 'Softwares',
    description: 'Venda e instalação de sistemas de gestão empresarial, antivírus, sistemas operacionais e softwares especializados.',
    icon: 'shield',
    featured: false
  }
];