"use client"
import React, { useEffect, useState } from 'react';
import Header from '@/components/Navbar';
import HeroSection from '@/components/Showcase';
import SummaryOfSurah from '@/components/DetailCards/SummaryOfSurah'
import DetailCards from '@/components/DetailCards/SummaryOfSurahDetails'
import NewsletterSection from '@/components/homepage/Newsletter';
import Footer from '@/components/Footer';

import { summaryOfSurrah } from '@/data'
import { surahs } from '@/data/details-data-summaryofsurah'

const Index = () => {
  const [savedId, setSavedId] = useState(null)
  const [detailObj, setDetailObj] = useState({})
  const [displayInfo, setDisplayInfo] = useState('')

  useEffect(() => {
    const filteredDetail = surahs?.find((item) => item?.id == savedId) ?? {};

    setDetailObj(filteredDetail)

  }, [savedId])

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection 
        imgUrl='/showcase/summary-of-surah.png'
      />
      {savedId ? (
          <DetailCards
            data={detailObj}
            setToggler={setSavedId}
            displayInfo={displayInfo}
          />
      ) : (
        <SummaryOfSurah
          setToggler={setSavedId}
          setDisplayInfo={setDisplayInfo}
          data={summaryOfSurrah} />
      )}
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Index;