"use client"
import React, { useState } from 'react';
import { HiArrowNarrowLeft } from "react-icons/hi";
import DetailsCard from './HadeesByTopicListingDetails'

const Index = ({ data, displayInfo, setDisplayInfo, setToggler, setIsDetailPageOpen }) => {
  const [hadiths, setHadiths] = useState([])
  const [loading, setLoading] = useState(false)
  const [itemsToShow, setItemsToShow] = useState(10);

  const handleLoadMore = () => {
    setItemsToShow(prevItems => prevItems + 10);
  };

  const displayedItems = data?.books?.slice(0, itemsToShow) || [];
  const hasMoreItems = data?.books && itemsToShow < data?.books?.length;

  const fetchHadithData = async (chapterId) => {
    setLoading(true);

    try {
      const hadithUrl = `https://hadithsahihbukhari-1-default-rtdb.asia-southeast1.firebasedatabase.app/hadiths.json?orderBy="chapterId"&equalTo=${chapterId}`;
      const response = await fetch(hadithUrl);
      const result = await response.json();
      const hadithList = result ? Object.values(result) : [];
      setHadiths(hadithList);
    } catch (error) {
      console.error("Error fetching hadiths:", error);
      setHadiths([]);
    } finally {
      setLoading(false);
      setIsDetailPageOpen(true)
    }
  };

  return (
    <div className="w-full mb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div onClick={() => {
          setHadiths([])
          hadiths?.length <= 0 && setToggler(null)
          setIsDetailPageOpen(false)
        }} className='group w-full flex items-center gap-3 mb-6 sm:mb-8'>
          <span className='text-[#3E5261] text-base md:text-xl lg:text-2xl transition-all group-hover:-left-2'>
            <HiArrowNarrowLeft />
          </span>
          <span className='font-semibold text-base md:text-xl lg:text-2xl text-[#111111] transition-all group-hover:underline cursor-pointer'>{displayInfo?.english} <span className='font-normal font-arabic'>({displayInfo?.arabic})</span></span>
        </div>


        {hadiths?.length && loading == false ? (
          <>
            <DetailsCard
              data={hadiths}
            />
          </>
        ) : (
          <>
            {/* Items Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
              {displayedItems.map((item, index) => (
                <div
                  key={item.slug || index}
                  onClick={() => {
                    fetchHadithData(item?.id)
                    // setDisplayInfo({...displayInfo, arabic: item?.arabic})
                  }}
                  className="bg-[#F1F4F8] cursor-pointer px-5 py-6 hover:bg-gray-100 transition-colors duration-200"
                >
                  {/* Left side - English content */}
                  <div className="flex-1">
                    <h3 className="text-[#111111] font-semibold text-sm sm:text-base md:text-xl mb-2">
                      {item.english}
                    </h3>

                    {/* Right side - Arabic content */}
                    <div className="flex justify-between items-start">
                      <div className="space-y-1">
                        <div className="flex items-center text-xs sm:text-base text-[#3E5261]">
                          <span className="font-medium">Chapter Number:</span>
                          <span className="ml-1">{item.id}</span>
                        </div>
                      </div>

                      <div className="text-right ml-4 mt-auto">
                        <h3 className="text-[#111111] text-lg sm:text-xl md:text-[28px] font-arabic" dir="rtl">
                          {item.arabic}
                        </h3>
                      </div>
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
          </>
        )}
      </div>
    </div>
  );
};

export default Index;