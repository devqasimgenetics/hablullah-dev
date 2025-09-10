"use client"
import React, { useState, useEffect } from 'react';
import Header from '@/components/Navbar';
import HeroSection from '@/components/Showcase';
import HowAreYouFeeling from '@/components/DetailCards/HowAreYouFeeling'
import DetailCards from '@/components/DetailCards/HowAreYouFeelingDetails'
import NewsletterSection from '@/components/homepage/Newsletter';
import Footer from '@/components/Footer';

import { howAreYouFeeling } from '@/data';
import { duas } from '@/data/details-data-feelingwisedua'

const Index = () => {
  const [savedId, setSavedId] = useState(null)
  const [detailObj, setDetailObj] = useState({})
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const filteredDetail = duas?.find((item) => item?.id === savedId) ?? {};

    setDetailObj(filteredDetail)

  }, [savedId])

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection>
        <h1 className='uppercase text-center text-3xl lg:text-5xl xl:text-8xl font-medium'>How are you feeling?</h1>
      </HeroSection>
      {savedId ? (
          <DetailCards
            data={detailObj}
            setToggler={setSavedId}
          />
      ) : (
        <HowAreYouFeeling
          currentPage={currentPage} 
          setCurrentPage={setCurrentPage}
          setToggler={setSavedId}
          data={howAreYouFeeling} />
      )}
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Index;