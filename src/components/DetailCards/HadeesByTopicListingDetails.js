"use client"
import React, { useState } from 'react';
import { HiArrowNarrowLeft } from "react-icons/hi";

const Index = ({ data }) => {
  return (
    <div className="w-full mb-24">
      <div className="max-w-7xl mx-auto">
        {data?.map((item, _index) => (
          <div key={_index} className="bg-[#F1F4F8] cursor-pointer px-5 py-6 hover:bg-gray-100 transition-colors duration-200 mb-6">
            <h3 className="text-[#111111] font-semibold text-sm sm:text-base md:text-xl mb-2 sm:mb-5">
              Hadith Number: {item?.id}
            </h3>
            <h3 className="text-[#111111] text-lg sm:text-xl md:text-[30px] font-arabic mb-2 md:mb-3" dir="rtl">
              {item?.arabic}
            </h3>
            <h3 className="text-[#525252] font-medium text-sm sm:text-base md:text-xl mb-2 md:mb-3">
              {item?.english?.text}
            </h3>
            <p className="text-[#3E5261] text-right font-semibold text-sm sm:text-base md:text-xl mb-2 sm:mb-5">
              {item?.english?.narrator}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;