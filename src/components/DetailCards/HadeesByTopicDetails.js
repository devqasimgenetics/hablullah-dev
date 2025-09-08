"use client"
import React, { useState } from 'react';
import { HiArrowNarrowLeft } from "react-icons/hi";

const Index = ({ setToggler }) => {
  return (
    <div className="w-full mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div onClick={() => setToggler(prev => !prev)} className='group w-full flex items-center gap-3 mb-6 sm:mb-8'>
          <span className='text-[#3E5261] text-base md:text-xl lg:text-2xl transition-all group-hover:-left-2'>
            <HiArrowNarrowLeft />
          </span>
          <span className='font-semibold text-base md:text-xl lg:text-2xl text-[#111111] transition-all group-hover:underline cursor-pointer'>Dua</span>
        </div>

        <div className="bg-[#F1F4F8] cursor-pointer px-5 py-6 hover:bg-gray-100 transition-colors duration-200">
          <h3 className="text-[#111111] font-semibold text-sm mb-2">
            Duas for Leaving the House
          </h3>
          <h3 className="text-gray-900 text-right font-semibold text-lg font-arabic mb-4" dir="rtl">
            بِسْمِ اللَّهِ تَوَكَّلْتُ عَلَى اللَّهِ، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ
          </h3>
          <h3 className="text-[#525252] font-medium text-sm mb-3">
            In the name of Allah, I place my trust in Allah, and there is no might nor power except with Allah.
          </h3>
          <h3 className="text-gray-900 text-right font-semibold text-lg mb-2 font-arabic" dir="rtl">
            اللہ کے نام کے ساتھ، میں نے اللہ پر بھروسہ کیا، اور نہ کوئی طاقت نہ کوئی قوت مگر اللہ کے ساتھ۔
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Index;