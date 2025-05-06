import React, { useState } from 'react';
import { galleryItems } from '../data/gallery';
import GalleryCard from '../components/GalleryCard';

const GalleryPage: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');

  // Get unique categories
  const categories = ['all', ...new Set(galleryItems.map(item => item.category))];
  
  // Filter gallery items
  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Nossa Galeria</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Confira alguns dos nossos trabalhos e serviços realizados. Nossa equipe 
            se orgulha de oferecer soluções de qualidade para nossos clientes.
          </p>
        </div>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-md transition-colors ${
                filter === category 
                  ? 'bg-black text-white' 
                  : 'bg-white text-black border border-gray-300 hover:bg-gray-100'
              }`}
            >
              {category === 'all' ? 'Todos' : category}
            </button>
          ))}
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <GalleryCard
              key={item.id}
              title={item.title}
              category={item.category}
              image={item.image}
            />
          ))}
        </div>
        
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Nenhum item encontrado para esta categoria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default GalleryPage;