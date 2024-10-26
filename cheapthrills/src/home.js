import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';

const getRandomGradient = () => {
  const gradients = [
    'gradient-purple-pink',
    'gradient-blue-teal',
    'gradient-indigo-purple',
    'gradient-green-blue'
  ];
  return gradients[Math.floor(Math.random() * gradients.length)];
};

const HomePage = () => {
  const navigate = useNavigate();
  const [gradient, setGradient] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setGradient(getRandomGradient());
    
    const intervalId = setInterval(() => {
      setGradient(getRandomGradient());
    }, 5000);

    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, []);

  const handleGetStarted = () => {
    navigate('/firstLandingpage');
  };

  return (
    <div className="homepage">
      <div className={`background-gradient ${gradient}`} />
      <div className="noise-overlay" />
      <div className="content-container">
        <div 
          className={`card ${isHovered ? 'card-hovered' : ''} ${isVisible ? 'card-visible' : ''}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <h1 className="title">Hi Rishita</h1>
          <p className="description">
          I met you after 21 years of my life and meeting you and becoming friends with you will undoubtedly remain one of the highlights of my early 20's at least till I am alive ;)
          </p>
          <button 
            className={`cta-button ${isHovered ? 'cta-button-hovered' : ''}`}
            onClick={handleGetStarted}
          >
            <span>Less Go :)</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;