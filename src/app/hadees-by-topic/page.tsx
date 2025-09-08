"use client"
import React, { useEffect, useState } from 'react';
import Header from '@/components/Navbar';
import HeroSection from '@/components/Showcase';
import HadeesByTopic from '@/components/DetailCards/HadeesByTopic'
import DetailCards from '@/components/DetailCards/HadeesByTopicDetails'
import NewsletterSection from '@/components/homepage/Newsletter';
import Footer from '@/components/Footer';

import { hadeesByTopic } from '@/data'
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
        imgUrl='/showcase/hadees-by-topic.png'
      />
      {savedId ? (
          <DetailCards
          data={detailObj}
          setToggler={setSavedId}
          displayInfo={displayInfo}
        />
      ) : (
        <HadeesByTopic
          setToggler={setSavedId}
          setDisplayInfo={setDisplayInfo}
          data={hadeesByTopic} />
      )}
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Index;