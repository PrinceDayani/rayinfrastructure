import React, { useState, useEffect, useCallback } from 'react';
import "../styles/Error404.css";

// Import all background images
import bg1 from "../assets/images/hero-bg.jpg";
import bg2 from "../assets/images/BridgeHome.jpg";
import bg3 from "../assets/images/Railway.png";
import bg4 from "../assets/images/hero-bg.jpg";
const Error404 = () => {
  // Arrays defined outside component tSo avoid recreation on every render
  const backgroundImages = [bg1, bg2, bg3, bg4];

  const errorTitles = [
    "Oops, page not found",
    "Looks like you're lost",
    "This page is on vacation",
    "Houston, we have a problem",
    "404: Page Missing in Action",
    "This is awkward...",
    "Well, this is embarrassing"
  ];

  const errorMessages = [
    "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.",
    "We've searched high and low, but couldn't find what you're looking for.",
    "Don't worry, it happens to the best of us. Let's get you back on track.",
    "Maybe this page took a wrong turn at Albuquerque?",
    "Seems like this page is playing hide and seek (and winning).",
    "This page has gone on a digital vacation without leaving a forwarding address.",
    "We've looked everywhere, but this page seems to have vanished into thin air."
  ];

  const buttonTexts = [
    "Back To Homepage",
    "Take Me Home",
    "Return to Safety",
    "Escape Route",
    "Back to Reality",
    "Let's Start Over",
    "Return to Base"
  ];

  // State for current content and background
  const [currentTitle, setCurrentTitle] = useState('');
  const [currentMessage, setCurrentMessage] = useState('');
  const [currentButton, setCurrentButton] = useState('');
  const [currentBackground, setCurrentBackground] = useState('');

  // Memoize the random item function with useCallback
  const getRandomItem = useCallback((array) => {
    return array[Math.floor(Math.random() * array.length)];
  }, []);

  // Set random content and background on mount
  useEffect(() => {
    // Update all content at once
    setCurrentTitle(getRandomItem(errorTitles));
    setCurrentMessage(getRandomItem(errorMessages));
    setCurrentButton(getRandomItem(buttonTexts));
    setCurrentBackground(getRandomItem(backgroundImages));
  }, [getRandomItem]); // Only depend on the memoized function

  return (
    <div 
      className="not-found-container"
      style={{ backgroundImage: `url(${currentBackground})` }}
    >
      <div className="content">
        <h1>404</h1>
        <h2>{currentTitle}</h2>
        <p>{currentMessage}</p>
        <a href="/" className="back-button">
          {currentButton}
        </a>
      </div>
    </div>
  );
};

export default Error404;