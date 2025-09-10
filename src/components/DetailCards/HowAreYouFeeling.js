"use client"
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Index = ({ setToggler, data, currentPage, setCurrentPage }) => {
  const itemsPerPage = 10; // You can adjust this number

  // Calculate pagination
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = data.slice(startIndex, endIndex);

  // Handle page changes
  const goToPage = (page) => {
    setCurrentPage(page);
    // Scroll to top when page changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToPrevious = () => {
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    }
  };

  const goToNext = () => {
    if (currentPage < totalPages) {
      goToPage(currentPage + 1);
    }
  };

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      // Show all pages if total is less than or equal to max visible
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Show pages with ellipsis logic
      if (currentPage <= 3) {
        // Show first 3 pages, then ellipsis, then last page
        for (let i = 1; i <= 3; i++) pages.push(i);
        if (totalPages > 4) pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        // Show first page, ellipsis, then last 3 pages
        pages.push(1);
        if (totalPages > 4) pages.push('...');
        for (let i = totalPages - 2; i <= totalPages; i++) pages.push(i);
      } else {
        // Show first page, ellipsis, current page area, ellipsis, last page
        pages.push(1);
        pages.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i);
        pages.push('...');
        pages.push(totalPages);
      }
    }

    return pages;
  };

  return (
    <div className="w-full mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          {currentItems.map((item, index) => (
            <div
              key={item.slug || index}
              onClick={() => setToggler(item.id)}
              className="bg-[#F1F4F8] cursor-pointer px-5 py-6 hover:bg-gray-100 transition-colors duration-200"
            >
              <div className="flex justify-between items-start">
                {/* Left side - English content */}
                <div className="flex-1">
                  <h3 className="text-[#111111] font-semibold text-sm sm:text-base md:text-xl mb-2">
                    {item.englishTransliteration}
                  </h3>
                  <div className="space-y-1">
                    <div className="flex items-center text-xs sm:text-base text-[#3E5261]">
                      <span className="font-medium">Dua Number:</span>
                      <span className="ml-1">{item.number}</span>
                    </div>
                  </div>
                </div>

                {/* Right side - Arabic content */}
                <div className="text-right ml-4 mt-auto">
                <h3 className="text-[#111111] text-lg sm:text-xl md:text-[28px] font-urdu" dir="rtl">
                  {item.arabic}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center space-x-2">
            {/* Previous Button */}
            <button
              onClick={goToPrevious}
              disabled={currentPage === 1}
              className={`
                flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-sm font-medium border border-[#0267B1] transition-colors duration-200 cursor-pointer
                ${currentPage === 1
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                }
              `}
            >
              <ChevronLeft className="w-4 h-4 text-[#0267B1]" />
            </button>

            {/* Page Numbers */}
            <div className="flex items-center space-x-3">
              {getPageNumbers().map((page, index) => (
                <React.Fragment key={index}>
                  {page === '...' ? (
                    <span className="px-3 py-2 text-gray-500">...</span>
                  ) : (
                    <button
                      onClick={() => goToPage(page)}
                      className={`
                         w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-sm font-medium border transition-colors duration-200 cursor-pointer
                        ${currentPage === page
                          ? 'bg-[#0267B1] border-[#0267B1] text-white'
                          : 'text-[#8F8F8F] border-[#D9D9D9] hover:bg-gray-100 hover:text-gray-900'
                        }
                      `}
                    >
                      {page}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={goToNext}
              disabled={currentPage === totalPages}
              className={`
                flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-sm font-medium border border-[#0267B1] transition-colors duration-200 cursor-pointer
                ${currentPage === totalPages
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                }
              `}
            >
              <ChevronRight className="w-4 h-4 text-[#0267B1]" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;