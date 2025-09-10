"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { data } from './data'

const ProphetBiographyCards = () => {
  const [expandedCards, setExpandedCards] = useState({});

  const toggleExpanded = (cardId) => {
    setExpandedCards(prev => ({
      ...prev,
      [cardId]: !prev[cardId]
    }));
  };

  const isExpanded = (cardId) => expandedCards[cardId] || false;

  // Function to split HTML content into paragraphs and get preview
  const getContentParts = (htmlText) => {
    // Split by </p> tag to separate paragraphs
    const paragraphs = htmlText.split('</p>').filter(p => p.trim());
    
    if (paragraphs.length <= 2) {
      // If 2 or fewer paragraphs, show all content
      return {
        preview: htmlText,
        hasMore: false,
        remaining: ''
      };
    }

    // Show first 2 paragraphs as preview
    const previewParagraphs = paragraphs.slice(0, 2);
    const remainingParagraphs = paragraphs.slice(2);

    return {
      preview: previewParagraphs.join('</p>') + (previewParagraphs.length > 0 ? '</p>' : ''),
      hasMore: remainingParagraphs.length > 0,
      remaining: remainingParagraphs.join('</p>') + '</p>'
    };
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95
    },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut"
      }
    }),
    hover: {
      y: -2,
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  const contentVariants = {
    collapsed: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    expanded: {
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    rest: {
      scale: 1
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.1
      }
    }
  };

  const iconVariants = {
    collapsed: {
      rotate: 0,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    expanded: {
      rotate: 180,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6 pb-24">
      <style jsx>{`
        .verse-text2 {
          color: #0267B1;
          font-style: italic;
          font-weight: 500;
        }
        .ayat-unique {
          color: #0267B1;
          font-style: italic;
          font-weight: 500;
        }
        .ayat {
          color: #0267B1;
          font-style: italic;
          font-weight: 500;
        }
      `}</style>
      
      {data.map((item, index) => {
        const contentParts = getContentParts(item.fullText);
        const shouldShowButton = contentParts.hasMore;

        return (
          <motion.div
            key={item.id}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            className={`bg-white border border-[#BCBCBC] overflow-hidden ${
              item.hasHeader ? 'border-t-4 border-t-blue-500' : ''
            }`}
          >
            <div className="w-full px-5 py-7">
              <motion.h2 
                className="text-xl font-semibold text-gray-900 mb-4"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
              >
                {item.title}
              </motion.h2>
              
              <div className="text-gray-700 leading-relaxed">
                {/* Preview Content (First 2 paragraphs) */}
                <div 
                  dangerouslySetInnerHTML={{ 
                    __html: contentParts.preview 
                  }}
                  className="mb-4"
                />
                
                {/* Expanded Content (Remaining paragraphs) */}
                <AnimatePresence>
                  {isExpanded(item.id) && contentParts.hasMore && (
                    <motion.div
                      variants={contentVariants}
                      initial="collapsed"
                      animate="expanded"
                      exit="collapsed"
                      className="overflow-hidden"
                    >
                      <div 
                        dangerouslySetInnerHTML={{ 
                          __html: contentParts.remaining 
                        }}
                        className="mb-4"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Show Read More button only if there's more content */}
              {shouldShowButton && (
                <motion.button
                  onClick={() => toggleExpanded(item.id)}
                  variants={buttonVariants}
                  initial="rest"
                  whileHover="hover"
                  whileTap="tap"
                  className="inline-flex items-center gap-1 text-[#0267B1] hover:text-black font-medium text-sm transition-colors duration-200 cursor-pointer"
                >
                  <span className="uppercase tracking-wide">
                    {isExpanded(item.id) ? 'Read Less' : 'Read More'}
                  </span>
                  <motion.div
                    variants={iconVariants}
                    animate={isExpanded(item.id) ? "expanded" : "collapsed"}
                    className="ml-1"
                  >
                    <ChevronDown size={16} />
                  </motion.div>
                </motion.button>
              )}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default ProphetBiographyCards;