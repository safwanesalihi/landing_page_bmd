import React from 'react';
import { scrollToContact } from '@/utils/scrollUtils';

interface SectionWrapperProps {
  index: number;
  title: string;
  image: string;
  imageAlt: string;
  children: React.ReactNode;
  ctaText: string;
  ctaAction: () => void;
  additionalContent?: React.ReactNode;
}

/**
 * A wrapper component that applies the alternating background pattern
 * and enforces the consistent layout structure with responsive image positioning
 */
export const SectionWrapper: React.FC<SectionWrapperProps> = ({
  index,
  title,
  image,
  imageAlt,
  children,
  ctaText,
  ctaAction,
  additionalContent
}) => {
  // Determine if this section should have a blue background (odd index)
  // Hero section (index 0) is already blue, so we start alternating from index 1
  const isBlueBackground = index % 2 === 0;
  
  // Determine if image should be on the right or left (alternating)
  // On mobile, image is always below title
  const isImageRight = index % 2 === 0;
  
  // Apply the appropriate background and text colors
  const bgClass = isBlueBackground 
    ? 'bg-gradient-to-l from-blue-800 via-blue-700 to-blue-600 text-white' 
    : 'bg-white text-gray-800';
  
  // Apply the appropriate button style based on background for contrast
  const btnClass = isBlueBackground 
    ? 'btn-on-blue' // White button on blue background
    : 'btn-on-white'; // Blue button on white background
  
  return (
    <section 
      className={`scroll-section min-h-screen ${bgClass} overflow-hidden flex items-center py-4`}
    >
      {/* Background Pattern for blue sections */}
      {isBlueBackground && (
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        </div>
      )}
      
      <div className="section-container relative z-10 py-4 md:py-6">
        {/* Title */}
        <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold ${isBlueBackground ? 'text-white' : 'text-primary'} mb-4 md:mb-8 text-center reveal-animation`}>
          {title}
        </h2>
        
        {/* Content with responsive layout */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Image - On mobile: always below title, On desktop: alternating left/right */}
          <div className={`w-full reveal-animation order-2 ${isImageRight ? 'md:order-2' : 'md:order-1'}`}>
            <img 
              src={image} 
              alt={imageAlt}
              className="w-full h-auto object-cover rounded-2xl shadow-xl"
            />
          </div>
          
          {/* Text Content */}
          <div className={`reveal-animation order-3 ${isImageRight ? 'md:order-1' : 'md:order-2'}`}>
            <div className={`text-xl ${isBlueBackground ? 'text-blue-100' : 'text-gray-700'} mb-4`}>
              {children}
            </div>
            
            {/* CTA Button */}
            <div>
              <button 
                onClick={ctaAction}
                className={`${btnClass} text-xl md:text-2xl`}
              >
                {ctaText}
              </button>
            </div>
          </div>
        </div>
        
        {/* Additional Content (optional) */}
        {additionalContent && (
          <div className="mt-8 w-full reveal-animation">
            {additionalContent}
          </div>
        )}
      </div>
    </section>
  );
};
