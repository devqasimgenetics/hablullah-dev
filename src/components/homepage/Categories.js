"use client";

import Link from 'next/link'
import dynamic from 'next/dynamic';
import { useState, useEffect, useCallback } from 'react';
const Slider = dynamic(() => import('react-slick'), { ssr: false });
import { ChevronLeft, ChevronRight } from "lucide-react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Arrow Components
const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="hidden md:flex absolute left-0 top-1/2 transform -translate-y-1/2 z-10 
               border border-[#0267B1] text-[#0267B1] p-2 rounded-sm 
               hover:bg-[#0267B1] hover:text-white transition"
  >
    <ChevronLeft size={18} />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="hidden md:flex absolute right-0 top-1/2 transform -translate-y-1/2 z-10 
               border border-[#0267B1] text-[#0267B1] p-2 rounded-sm 
               hover:bg-[#0267B1] hover:text-white transition"
  >
    <ChevronRight size={18} />
  </button>
);

const Categories = () => {
  const [isClient, setIsClient] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const [sliderKey, setSliderKey] = useState(0);

  const categories = [
    { name: "Quran", link: '/subject-wise', icon: "quran-icon.svg" },
    { name: "Dua", link: '/situation-wise-dua', icon: "dua-icon.svg" },
    { name: "Seerah", link: '/summary-of-surrah', icon: "seerah-icon.svg" },
    { name: "Qirat", link: '/hadees-by-topic', icon: "qirat-icon.svg" },
    { name: "Society", link: '/summary-of-surrah', icon: "society-icon.svg" },
    { name: "Quran", link: '/subject-wise', icon: "quran-icon.svg" },
    { name: "Dua", link: '/situation-wise-dua', icon: "dua-icon.svg" },
    { name: "Seerah", link: '/summary-of-surrah', icon: "seerah-icon.svg" },
  ];

  // Handle window resize
  const handleResize = useCallback(() => {
    setWindowWidth(window.innerWidth);
    // Force slider to re-render on resize
    setSliderKey(prev => prev + 1);
  }, []);

  useEffect(() => {
    setIsClient(true);
    setWindowWidth(window.innerWidth);
    
    // Add resize listener
    window.addEventListener('resize', handleResize);
    
    // Force re-render after a short delay to ensure proper initialization
    const timer = setTimeout(() => {
      setSliderKey(prev => prev + 1);
    }, 100);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timer);
    };
  }, [handleResize]);

  // Calculate slides to show based on window width
  const getSlidesToShow = useCallback(() => {
    if (windowWidth >= 1280) return 5;
    if (windowWidth >= 1024) return 4;
    if (windowWidth >= 768) return 3;
    if (windowWidth >= 480) return 3;
    return 3; // For very small screens
  }, [windowWidth]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: getSlidesToShow(),
    slidesToScroll: 1,
    arrows: windowWidth >= 768,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    variableWidth: false,
    centerMode: false,
    // Disable responsive array since we're handling it manually
    responsive: undefined,
  };

  // Show loading state during hydration
  if (!isClient) {
    return (
      <div className="w-full categories-wrapper mb-14 md:mb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-[#111111] mb-10 tracking-wide">
            CATEGORIES
          </h2>
          <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {categories.slice(0, getSlidesToShow()).map((category, index) => (
              <div key={index} className="flex flex-col items-center bg-[#F7F9FC] 
                              min-h-[120px] md:min-h-[150px] 
                              px-3 md:px-5 py-5 md:py-8 
                              rounded-md shadow-sm text-center animate-pulse">
                <div className="w-10 h-10 md:w-14 md:h-14 bg-gray-200 rounded mb-3 md:mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-16"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full categories-wrapper mb-14 md:mb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#111111] mb-10 tracking-wide">
          CATEGORIES
        </h2>

        <div className="relative">
          <Slider {...settings} key={sliderKey}>
            {categories.map((category, index) => (
              <div key={index} className="px-2 md:px-3">
                <Link href={category?.link}>
                  <div className="flex flex-col items-center bg-[#F7F9FC] 
                                  hover:bg-[#eef2f7] transition 
                                  min-h-[120px] md:min-h-[150px] 
                                  px-3 md:px-5 py-5 md:py-8 
                                  rounded-md shadow-sm text-center">
                    <div className="w-10 h-10 md:w-14 md:h-14 flex items-center justify-center mb-3 md:mb-4">
                      <img
                        src={`/icons/${category.icon}`}
                        alt={category.name}
                        className="w-8 h-8 md:w-12 md:h-12 object-contain"
                        loading="lazy"
                      />
                    </div>
                    <span className="text-sm md:text-lg font-semibold text-[#111111]">
                      {category.name}
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Categories;