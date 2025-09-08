"use client"
import React, { useState } from 'react';

const Testimonials = () => {
  const [currentHadith, setCurrentHadith] = useState(0);

  const hadiths = [
    {
      id: 33,
      text: 'I Bought Barira (A Female Slave). The Prophet (PBUH) Said (To Me), "Buy Her As The Wala Is For The Manumitter." Once She Was Given A Sheep (In Charity). The Prophet (PBUH) Said, "It (The Sheep) Is A Charitable Gift For Her (Barira) And A Gift For Us." Al-Hakam Said, "Barira\'s Husband Was A Free Man." Ibn Abbas Said, "When I Saw Him, He Was A Slave."',
      narrator: '— SAHIH AL BUKHARI'
    },
    {
      id: 34,
      text: 'The Prophet (PBUH) said, "The believer who mixes with people and bears their annoyance with patience will have a greater reward than the believer who does not mix with people and does not show patience with their annoyance."',
      narrator: '— SUNAN IBN MAJAH'
    },
    {
      id: 35,
      text: 'The Prophet (PBUH) said, "Whoever believes in Allah and the Last Day should speak good or remain silent. Whoever believes in Allah and the Last Day should be generous to his neighbor. Whoever believes in Allah and the Last Day should be generous to his guest."',
      narrator: '— SAHIH AL BUKHARI'
    }
  ];

  const nextHadith = () => {
    setCurrentHadith((prev) => (prev + 1) % hadiths.length);
  };

  const prevHadith = () => {
    setCurrentHadith((prev) => (prev - 1 + hadiths.length) % hadiths.length);
  };

  const goToHadith = (index) => {
    setCurrentHadith(index);
  };

  React.useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'ArrowLeft') {
        prevHadith();
      } else if (event.key === 'ArrowRight') {
        nextHadith();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <div 
      style={{ backgroundImage: `url('/imgs/pattern-bg.png')` }}
      className="flex items-center justify-center bg-left bg-contain bg-repeat pb-14 md:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative text-white">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="bg-white text-slate-800 w-14 h-14 flex items-center justify-center font-bold text-lg shadow-lg border border-[#0E2947] rotate-45">
              <img className='-rotate-45' src="/icons/flowbite_quote-solid.svg" alt="" />
            </div>
          </div>

          <div
            style={{ backgroundImage: "url('/imgs/showcase/testimonials-bg.svg')" }}
            className="w-full bg-slate-800 bg-center bg-cover bg-no-repeat px-4 md:px-8 lg:px-12 pt-16 pb-9 text-center">
            <p className="font-medium text-white line-clamp-3 text-base md:text-lg lg:text-xl leading-relaxed md:px-12 mb-4 mx-auto">
              {hadiths[currentHadith].text}
            </p>
            <p className="text-white text-sm md:text-base font-semibold tracking-wider">
              {hadiths[currentHadith].narrator}
            </p>
          </div>

          <div className="flex justify-center space-x-2 pt-8 pb-6">
            {hadiths.map((_, index) => (
              <button
                key={index}
                onClick={() => goToHadith(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${index === currentHadith
                  ? 'bg-[#0267B1] scale-125'
                  : 'bg-[#D9D9D9] hover:bg-gray-400'
                  }`}
                aria-label={`Go to hadith ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;