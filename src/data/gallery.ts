export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: '1',
    title: 'Manutenção de Computadores',
    category: 'Reparos',
    image: '/public/images/services/desktop.jpeg'
  },
  {
    id: '2',
    title: 'Montagem de Rede',
    category: 'Redes',
    image: '/public/images/services/rede.jpg'
  },
  {
    id: '3',
    title: 'Reparo de Celulares',
    category: 'Reparos',
    image: '/public/images/services/celular.jpg'
  },
  {
    id: '4',
    title: 'Instalação de CFTV',
    category: 'Segurança',
    image: '/public/images/services/cftv.jpg'
  },
  {
    id: '5',
    title: 'Reparo de Notebook',
    category: 'Reparos',
    image: '/public/images/services/teclado.jpg'
  },
  {
    id: '6',
    title: 'Venda de Acessórios',
    category: 'Produtos',
    image: '/public/images/services/vendas.jpg'
  }
];