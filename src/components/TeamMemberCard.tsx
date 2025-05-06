import React from 'react';

interface TeamMemberCardProps {
  name: string;
  role: string;
  description: string;
  image: string;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ 
  name, 
  role, 
  description, 
  image 
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="aspect-w-3 aspect-h-4 relative">
        <img 
          src={image} 
          alt={`${name} - ${role}`} 
          className="object-cover w-full h-64"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-1">{name}</h3>
        <p className="text-gray-500 mb-3 font-medium">{role}</p>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default TeamMemberCard;