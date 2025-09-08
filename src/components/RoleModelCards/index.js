"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

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

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 10
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
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
    <div className="max-w-4xl mx-auto p-6 space-y-6 mb-24">
      {data.map((item, index) => (
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
              <AnimatePresence mode="wait">
                {isExpanded(item.id) ? (
                  <motion.p
                    key="expanded"
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="mb-4"
                  >
                    {item.fullText}
                  </motion.p>
                ) : (
                  <motion.p
                    key="collapsed"
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="mb-4"
                  >
                    {item.preview}
                  </motion.p>
                )}
              </AnimatePresence>
              
              {item.expandedContent && (
                <AnimatePresence>
                  {isExpanded(item.id) && (
                    <motion.div
                      variants={contentVariants}
                      initial="collapsed"
                      animate="expanded"
                      exit="collapsed"
                      className="overflow-hidden"
                    >
                      <motion.p 
                        className="text-gray-600 italic mb-4"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                      >
                        {item.expandedContent}
                      </motion.p>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>

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
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ProphetBiographyCards;