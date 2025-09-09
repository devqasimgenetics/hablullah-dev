"use client"
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Index = ({ data, setDisplayInfo, setToggler }) => {
  const [itemsToShow, setItemsToShow] = useState(10);

  const handleLoadMore = () => {
    setItemsToShow(prevItems => prevItems + 10);
  };

  const displayedItems = data?.slice(0, itemsToShow) || [];
  const hasMoreItems = data && itemsToShow < data.length;

  return (
    <div className="w-full mb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          {displayedItems.map((item, index) => (
            <div
              key={item.slug || index}
              onClick={() => {
                setToggler(item?.id)
                setDisplayInfo(`${item.english}`)
              }}
              className="bg-[#F1F4F8] cursor-pointer px-5 py-6 hover:bg-gray-100 transition-colors duration-200"
            >
              <div className="flex justify-between items-start">
                {/* Left side - English content */}
                <div className="flex-1">
                  <h3 className="text-[#111111] font-semibold text-sm sm:text-base md:text-xl mb-2">
                    {item.english}
                  </h3>
                  <div className="space-y-1">
                    <div className="flex items-center text-xs sm:text-base text-[#3E5261]">
                      <span className="font-medium">Chapter Number:</span>
                      <span className="ml-1">{item.id}</span>
                    </div>
                  </div>
                </div>

                {/* Right side - Arabic content */}
                <div className="text-right ml-4 mt-auto">
                  <h3 className="text-[#111111] text-lg sm:text-xl md:text-[28px] font-arabic" dir="rtl">
                    {item.arabic}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {hasMoreItems && (
          <div className="flex justify-center">
            <button
              onClick={handleLoadMore}
              className="bg-[#0267B1] text-white font-semibold text-sm hover:bg-black transition-colors cursor-pointer px-6 md:px-14 py-4 md:py-5"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;