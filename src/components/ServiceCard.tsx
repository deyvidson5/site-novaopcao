import React from 'react';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  icon: string;
  featured?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  id, 
  title, 
  description, 
  icon, 
  featured = false 
}) => {
  // Dynamically select the icon component
  const IconComponent = (Icons as any)[icon.charAt(0).toUpperCase() + icon.slice(1)] || Icons.HelpCircle;

  return (
    <div 
      id={id}
      className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl flex flex-col ${
        featured ? 'border-l-4 border-black' : ''
      }`}
    >
      <div className="p-6 flex-grow">
        <div className="mb-4">
          <IconComponent className="text-black" size={30} />
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
      </div>
      <div className="px-6 pb-6">
        <Link 
          to={`/contato?service=${encodeURIComponent(title)}`} 
          className="inline-flex items-center text-sm font-medium text-white bg-black px-4 py-2 rounded-md hover:bg-gray-800 transition-colors"
        >
          Solicitar serviço
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;