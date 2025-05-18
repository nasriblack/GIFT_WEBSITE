import React from 'react';
import { Heart } from 'lucide-react';

interface Memory {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
}

interface MemoryCardProps {
  memory: Memory;
}

const MemoryCard: React.FC<MemoryCardProps> = ({ memory }) => {
  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] h-full flex flex-col">
      <div className="relative overflow-hidden aspect-video">
        <img 
          src={memory.image} 
          alt={memory.title} 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
        <div className="absolute top-3 right-3">
          <Heart className="text-white drop-shadow-lg" fill="#ffffff" size={24} />
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <div className="mb-2 flex justify-between items-start">
          <h3 className="text-xl font-bold text-gray-800">{memory.title}</h3>
          <span className="text-xs text-rose-500 bg-rose-100 px-2 py-1 rounded-full">{memory.date}</span>
        </div>
        
        <p className="text-gray-600 flex-grow">{memory.description}</p>
        
        <div className="mt-4 flex justify-end">
          <span className="text-xs text-rose-400 italic">Memory #{memory.id}</span>
        </div>
      </div>
    </div>
  );
};

export default MemoryCard;