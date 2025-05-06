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
    image: 'https://images.pexels.com/photos/4065876/pexels-photo-4065876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '2',
    title: 'Montagem de Rede',
    category: 'Redes',
    image: 'https://images.pexels.com/photos/2881232/pexels-photo-2881232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '3',
    title: 'Reparo de Celulares',
    category: 'Reparos',
    image: 'https://images.pexels.com/photos/3568544/pexels-photo-3568544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '4',
    title: 'Instalação de CFTV',
    category: 'Segurança',
    image: 'https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '5',
    title: 'Reparo de Notebook',
    category: 'Reparos',
    image: 'src/images/services/teclado.png'
  },
  {
    id: '6',
    title: 'Venda de Acessórios',
    category: 'Produtos',
    image: 'https://images.pexels.com/photos/5989917/pexels-photo-5989917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];