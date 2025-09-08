"use client"
import React, { useState } from 'react';
import Header from '@/components/Navbar';
import HeroSection from '@/components/Showcase';
import SummaryOfSurah from '@/components/DetailCards/SummaryOfSurah'
import DetailCards from '@/components/DetailCards/HadeesByTopicDetails'
import NewsletterSection from '@/components/homepage/Newsletter';
import Footer from '@/components/Footer';

import { summaryOfSurrah } from '@/data'

const Index = () => {
  const [toggler, setToggler] = useState(true)

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection 
        imgUrl='/showcase/summary-of-surah.png'
      />
      {toggler ? (
        <SummaryOfSurah
          setToggler={setToggler}
          data={summaryOfSurrah} />
      ) : (
        <DetailCards
          setToggler={setToggler}
        />
      )}
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Index;