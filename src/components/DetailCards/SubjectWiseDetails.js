"use client"
import React, { useState } from 'react';
import { HiArrowNarrowLeft } from "react-icons/hi";

const Index = ({ data, displayInfo, setToggler }) => {
  return (
    <div className="w-full mb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div onClick={() => setToggler(null)} className='group w-full flex items-center gap-3 mb-6 sm:mb-8'>
          <span className='text-[#3E5261] text-base md:text-xl lg:text-2xl transition-all group-hover:-left-2'>
            <HiArrowNarrowLeft />
          </span>
          <span className='font-semibold text-base md:text-xl lg:text-2xl text-[#111111] transition-all group-hover:underline cursor-pointer'>{displayInfo}</span>
        </div>

        {data?.summaries?.map((item, _index) => (
          <div className="bg-[#F1F4F8] cursor-pointer px-5 py-6 hover:bg-gray-100 transition-colors duration-200 mb-6">
            <h3 className="text-[#111111] font-semibold text-sm sm:text-base md:text-xl mb-2 sm:mb-5">
              {item?.reference}
            </h3>
            <h3 className="text-[#111111] text-lg sm:text-xl md:text-[30px] font-arabic mb-2 md:mb-3" dir="rtl">
              {item?.arabic}
            </h3>
            <h3 className="text-[#525252] font-medium text-sm sm:text-base md:text-xl mb-2 md:mb-3">
              {item?.english}
            </h3>
            <h3 className="text-[#111111] font-urdu text-right font-normal text-lg sm:text-xl md:text-[26px] mb-2 sm:mb-6" dir="rtl">
              {item?.urdu}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;