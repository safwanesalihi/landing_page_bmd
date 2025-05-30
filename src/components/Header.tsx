import React, { useState, useEffect } from 'react';

interface HeaderProps {
  logo: string;
  logoAlt: string;
}

export const Header: React.FC<HeaderProps> = ({ logo, logoAlt }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="section-container flex justify-center lg:justify-start">
        <div className="flex items-center">
          <img 
            src={logo} 
            alt={logoAlt}
            className={`transition-all duration-300 ${
              isScrolled 
                ? 'h-12 md:h-14' 
                : 'h-16 md:h-20'
            }`}
          />
          {isScrolled && (
            <div className="h-1 w-16 bg-blue-400 mx-auto lg:mr-0 rounded-full mt-1"></div>
          )}
        </div>
      </div>
    </header>
  );
};
