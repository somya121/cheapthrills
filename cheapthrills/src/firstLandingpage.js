import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import galleryImage from './IMG_1906.jpg';
import './firstLandingpage.css';
const textImageStyles = `
  .bg-clip-text-image {
    background-image: url('./IMG_1906.jpg');
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    background-size: cover;
    background-position: center;
    text-fill-color: transparent;
    -webkit-text-fill-color: transparent;
    opacity: 0.8;
    position: relative;
  }
     .bg-clip-text-image::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: inherit;
    filter: brightness(0.9);
    z-index: -1;
  }
`;
const FirstLandingpage = ({ onEnter }) => {
    const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const showFooter =  true;
  useEffect(() => {
    // Sequence the animations
    setTimeout(() => setShowImage(true), 500);
  }, []);
  const handleClick = () => {
    setIsOpen(true);
    setTimeout(() => {
        navigate('/getStarted');
      if (onEnter) onEnter();
    }, 1000);
  };

  return (
   <>
 <style>{textImageStyles}</style>
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-pink-200 p-8 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-pink-300 rounded-full opacity-20 -translate-x-16 -translate-y-16" />
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-pink-300 rounded-full opacity-20 translate-x-20 translate-y-20" />
      
      {/* Main heading */}
      <h1 className="text-4xl font-bold text-pink-800 mb-12 text-center relative">
        <Sparkles className="inline-block mr-2 text-pink-500" size={32} />
        You are one of my besteststs friend :p
      </h1>

      {/* Card container with hover effects */}
      <div 
        className={`cursor-pointer perspective-1000 transition-all duration-1000 transform-gpu
          ${isOpen ? 'rotate-y-90' : 'rotate-y-0 hover:scale-105 hover:shadow-2xl'}
          relative`}
        onClick={handleClick}
      >
        {/* Main card */}
        <div className="bg-white backdrop-blur-lg bg-opacity-70 rounded-2xl p-8 w-80 h-64 shadow-xl border border-pink-200 flex flex-col items-center justify-center relative">
    
          {/* Content */}
          <h3 className="text-2xl font-bold mb-4 text-pink-800 relative z-10 ">
            Let's check this out?
          </h3>
          <p className="text-pink-600 text-center mb-6 relative z-10">
           In case you've forgotten how awesome you are
          </p>
          
          {/* Subtle animated element */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-pink-200 via-pink-400 to-pink-200 rounded-b-2xl" />
        </div>
      </div>

      {/* Enhanced Footer text */}
      <div className="mt-12 max-w-xl text-center">
        <div className={`transition-opacity duration-1000 ${showFooter ? 'opacity-100' : 'opacity-0'}`}>
          <div className="bg-white bg-opacity-40 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-pink-200">
            <div className="text-pink-700 text-sm leading-relaxed">
            I know you are upset about something and i really wish if you would just speak to me about it, just like I do. Itna toh banta hai na.I don't know what has upset you, was it the conversation, was it me or was it somethig else. But the bottom line is you are upset and i really do care a lottt about the people i love.So doesn't matter what it is, you don't have to feel what you are feeling. I really want you to feel not just ok but happy. I really wish you could just talk about whatsoever is bothering you.I believe itna toh trust i have earned. Bottom line is sad nhi hona hai yar when you have friends to talk to !!!!!
            </div>
          </div>
        </div>
      </div>
{/* Floating Image */}
<div 
        className={`absolute right-8 top-8 transition-all duration-1000 transform
          ${showImage ? 'opacity-100 translate-y-0 rotate-0' : 'opacity-0 -translate-y-8 rotate-6'}
        `}
      >
        <div className="relative group">
          <img 
            src={galleryImage}
            alt="Gallery" 
            className="w-48 h-48 object-cover rounded-lg shadow-xl transform transition-transform group-hover:scale-105"
            style={{
              boxShadow: '0 0 20px rgba(236, 72, 153, 0.3)',
            }}
          />
          {/* Decorative border */}
          <div className="absolute inset-0 border-2 border-pink-300 rounded-lg transform rotate-3 group-hover:rotate-6 transition-transform"/>
        </div>
      </div>
      {/* Floating Image */}
<div 
        className={`absolute left-8 bottom-8 transition-all duration-1000 transform
          ${showImage ? 'opacity-100 translate-y-0 rotate-0' : 'opacity-0 -translate-y-8 rotate-6'}
        `}
      >
        <div className="relative group">
          <img 
            src={galleryImage}
            alt="Gallery" 
            className="w-48 h-48 object-cover rounded-lg shadow-xl transform transition-transform group-hover:scale-105"
            style={{
              boxShadow: '0 0 20px rgba(236, 72, 153, 0.3)',
            }}
          />
          {/* Decorative border */}
          <div className="absolute inset-0 border-2 border-pink-300 rounded-lg transform rotate-3 group-hover:rotate-6 transition-transform"/>
        </div>
      </div>
    </div>
    </>
  );
};

export default FirstLandingpage;
