"use client";

import Link from 'next/link'
import dynamic from 'next/dynamic';
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

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1280, // <1280px
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 1024, // <1024px
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768, // <768px
        settings: {
          slidesToShow: 3,
          arrows: false, // hide arrows on mobile
        },
      },
      {
        breakpoint: 480, // <480px (small phones)
        settings: {
          slidesToShow: 3,
          arrows: false,
        },
      },
    ],
  };
  

  return (
    <div className="w-full categories-wrapper mb-14 md:mb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-[#111111] mb-10 tracking-wide">
        CATEGORIES
      </h2>

      <Slider {...settings}>
        {categories.map((category, index) => (
          <Link key={index} href={category?.link} className="px-2 md:px-3">
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
                />
              </div>
              <span className="text-sm md:text-lg font-semibold text-[#111111]">
                {category.name}
              </span>
            </div>
          </Link>
        ))}
      </Slider>
      </div>
    </div>
  );
};

export default Categories;
