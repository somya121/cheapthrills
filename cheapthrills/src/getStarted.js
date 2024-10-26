import React, { useState, useEffect } from 'react';
import galleryImage from './meme1.jpg';
import galleryImage1 from './cuteTogether.jpg';
import galleryImage2 from './cute1.jpg';
import galleryImage3 from './dandiya.jpg';
import galleryImage4 from './fun2.jpg';
import galleryImage5 from './fun.jpg';



const GetStartedPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showExpandedCards, setShowExpandedCards] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const cards = [
    { 
      id: 1, 
      description: "It's said that meeting any kind person only makes you kinder. You have had such an impact on me. You are literally the most kind person i know.", 
      color: "bg-teal-400",
      image: galleryImage1
    },
    { 
      id: 2,  
      description: "You have the best best smile. Ache hi aate hai tumhare photoss!", 
      color: "bg-cyan-500",
      image:  galleryImage2
    },
    { 
      id: 3, 
      description: "You the the funnest person i know. You crack the best jokes.", 
      color: "bg-sky-500",
      image:  galleryImage4
    },
    { 
      id: 4, 
      description: "You are on of the prettiest and the cutest person i know", 
      color: "bg-indigo-500",
      image:  galleryImage3
    },
    { 
      id: 5, 
      description: "You are too too funy. I love having you as flatmate.", 
      color: "bg-violet-500",
      image:  galleryImage5 
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
      // Auto-expand cards after initial animation
      setTimeout(() => setShowExpandedCards(true), 1000);
    }, 200);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-violet-50 p-8 flex items-center justify-center overflow-hidden">
      <div className="relative w-full max-w-5xl h-[800px] flex items-center justify-center">
        <div
          className={`transition-all duration-5000 ease-out relative -translate-y-[180px] ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Main Card */}
          <div className="bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl p-8 w-72 h-56 shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer relative z-10 border-2 border-white/20">
            <h3 className="text-2xl font-bold mb-3 text-white">
              <img src={galleryImage} alt="Main gallery" className="w-full h-32 object-cover rounded-lg"/>
            </h3>
            <p className="text-violet-100">Let revise why you are the best :* </p>
            <div className="absolute bottom-4 right-4">
              <svg className="w-6 h-6 text-violet-200 animate-bounce" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </div>

          {/* Expanded Cards */}
          {cards.map((card, index) => {
            const totalCards = cards.length;
            const angle = (index * (2 * Math.PI)) / totalCards;
            const radius = 250;
            const x = Math.sin(angle) * radius;
            const y = Math.cos(angle) * radius;

            return (
              <div
                key={card.id}
                onClick={() => setSelectedCard(card)}
                className={`absolute ${card.color} rounded-xl p-6 w-56 shadow-xl cursor-pointer transition-all duration-500 
                  transform hover:scale-110 border border-white/20 backdrop-blur-sm
                  ${showExpandedCards ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <img src={card.image} alt={`Card ${card.id}`} className="w-full h-42 object-cover rounded-lg mb-4"/>
                <p className="text-sm text-white/80">{card.description}</p>
              </div>
            );
          })}
        </div>

        {/* Modal */}
        {selectedCard && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300 backdrop-blur-sm"
            onClick={() => setSelectedCard(null)}
          >
            <div 
              className={`${selectedCard.color} rounded-xl p-8 max-w-md w-11/12 transform transition-all duration-300 scale-100 border border-white/20`}
              onClick={e => e.stopPropagation()}
            >
              <div className="aspect-video bg-white/10 rounded-lg mb-4">
                <img 
                  src={selectedCard.image} 
                  alt={`Card ${selectedCard.id} full view`}
                  className="w-full h-42 object-cover rounded-lg"
                />
              </div>
              <p className="text-white/80">{selectedCard.description}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GetStartedPage;