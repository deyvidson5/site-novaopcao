import React from 'react';

interface GalleryCardProps {
  title: string;
  category: string;
  image: string;
}

const GalleryCard: React.FC<GalleryCardProps> = ({ title, category, image }) => {
  return (
    <div className="overflow-hidden rounded-lg shadow-md group transition-all duration-300 hover:shadow-xl">
      <div className="relative aspect-w-4 aspect-h-3">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
          <span className="text-sm text-white/80 uppercase tracking-wider">{category}</span>
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default GalleryCard;