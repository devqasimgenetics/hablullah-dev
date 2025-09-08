"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const ProphetBiographyCards = () => {
  const [expandedCards, setExpandedCards] = useState({});

  const biographyData = [
    {
      id: 'intro',
      title: 'The Ummah Of Prophet PBUH',
      preview: 'Prophet Muhammad (SAW) is revered as the final messenger of Islam, a beacon of guidance whose life serves as a perfect example for all of humanity. His noble character, compassionate heart, and unwavering commitment to justice and mercy have inspired countless individuals across generations. This comprehensive account delves into the various roles he played throughout his blessed life – as a son, father, husband, leader, teacher, and more.',
      fullText: 'Prophet Muhammad (SAW) is revered as the final messenger of Islam, a beacon of guidance whose life serves as a perfect example for all of humanity. His noble character, compassionate heart, and unwavering commitment to justice and mercy have inspired countless individuals across generations. This comprehensive account delves into the various roles he played throughout his blessed life – as a son, father, husband, leader, teacher, and more. Through stories from Hadith and verses from the Quran, we explore how the Prophet (SAW) embodied the teachings of Islam in every aspect of his life, offering timeless lessons for those who seek to follow in his footsteps. His legacy continues to guide millions of believers worldwide, serving as a source of spiritual strength and moral guidance in their daily lives.',
      hasHeader: false
    },
    {
      id: 'son',
      title: 'Hazrat Muhammad (SAW) As A Son',
      preview: 'Prophet Muhammad (SAW) was born in the city of Mecca to Abdullah and Amina. His father passed away before his birth, and his mother passed away when he was just six years old. Despite this early loss, the Prophet (SAW) always held his parents in the highest regard, exemplifying the ideal behavior towards one\'s parents. In his lifetime, the Prophet (SAW) frequently spoke about the importance of being kind and respectful to one\'s parents. Even after their death, he showed reverence by praying for them. The Prophet (SAW) emphasized the importance of honoring parents, saying,',
      fullText: 'Prophet Muhammad (SAW) was born in the city of Mecca to Abdullah and Amina. His father passed away before his birth, and his mother passed away when he was just six years old. Despite this early loss, the Prophet (SAW) always held his parents in the highest regard, exemplifying the ideal behavior towards one\'s parents. In his lifetime, the Prophet (SAW) frequently spoke about the importance of being kind and respectful to one\'s parents. Even after their death, he showed reverence by praying for them. The Prophet (SAW) emphasized the importance of honoring parents, saying, "Paradise lies at the feet of your mother." He taught that after worship of Allah, the greatest deed is kindness to parents. His own example of love and respect for his parents, despite their early death, serves as a timeless lesson for all Muslims about the sacred duty of honoring one\'s parents.',
      hasHeader: false
    },
    {
      id: 'father',
      title: 'Hazrat Muhammad (SAW) As A Father',
      preview: 'Prophet Muhammad (SAW) was born in the city of Mecca to Abdullah and Amina. His father passed away before his birth, and his mother passed away when he was just six years old. Despite this early loss, the Prophet (SAW) always held his parents in the highest regard, exemplifying the ideal behavior towards one\'s parents. In his lifetime, the Prophet (SAW) frequently spoke about the importance of being kind and respectful to one\'s parents. Even after their death, he showed reverence by praying for them. The Prophet (SAW) emphasized the importance of honoring parents, saying,',
      fullText: 'Prophet Muhammad (SAW) was born in the city of Mecca to Abdullah and Amina. His father passed away before his birth, and his mother passed away when he was just six years old. Despite this early loss, the Prophet (SAW) always held his parents in the highest regard, exemplifying the ideal behavior towards one\'s parents. In his lifetime, the Prophet (SAW) frequently spoke about the importance of being kind and respectful to one\'s parents. Even after their death, he showed reverence by praying for them. The Prophet (SAW) emphasized the importance of honoring parents, saying, "A father gives his child nothing better than a good education." As a father, the Prophet (SAW) was tender, loving, and patient with his children. He would play with them, show them affection, and teach them through his actions. His relationship with his daughter Fatimah (RA) was particularly exemplary, showing deep love and respect.',
      hasHeader: false
    },
    {
      id: 'husband',
      title: 'Hazrat Muhammad (SAW) As A Husband',
      preview: 'Prophet Muhammad (SAW) was the epitome of kindness, respect, and love as a husband. He was married to Khadijah (RA) for 25 years until her death, and she remained his only wife during that time. Their marriage was marked by deep mutual respect and love. Khadijah (RA) was the first to believe in his prophethood and supported him in every way.',
      fullText: 'Prophet Muhammad (SAW) was the epitome of kindness, respect, and love as a husband. He was married to Khadijah (RA) for 25 years until her death, and she remained his only wife during that time. Their marriage was marked by deep mutual respect and love. Khadijah (RA) was the first to believe in his prophethood and supported him in every way. The Prophet (SAW) treated all his wives with fairness and compassion. He was gentle and considerate, always ensuring their well-being. Aisha (RA) reported that the Prophet (SAW) would help with household chores, saying, "He would mend his clothes, repair his shoes, and help with household work." His example as a husband demonstrates the importance of mutual respect, kindness, and shared responsibility in marriage.',
      expandedContent: 'The Prophet (SAW) treated all his wives with fairness and compassion. He was gentle and considerate, always ensuring their well-being. Aisha (RA) reported that the Prophet (SAW) would help with household chores, saying,',
      hasHeader: false
    }
  ];

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
      {biographyData.map((item, index) => (
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