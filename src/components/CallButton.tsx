import React from 'react';
import { Phone } from 'lucide-react';

interface CallButtonProps {
  phoneNumber: string;
}

export const CallButton: React.FC<CallButtonProps> = ({ phoneNumber }) => {
  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <button
      onClick={handleCallClick}
      className="fixed bottom-24 left-6 z-50 bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl group"
      aria-label="Chiamaci direttamente"
    >
      <Phone className="h-6 w-6" />
      
      {/* Tooltip */}
      <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Chiamaci ora
        <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-gray-900"></div>
      </div>
      
      {/* Pulse animation */}
      <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-20"></div>
    </button>
  );
};