"use client"
import React, { useEffect, useState } from 'react';
import Header from '@/components/Navbar';
import HeroSection from '@/components/Showcase';
import HadeesByTopic from '@/components/DetailCards/HadeesByTopic'
import ListingCards from '@/components/DetailCards/HadeesByTopicListing'
import NewsletterSection from '@/components/homepage/Newsletter';
import Footer from '@/components/Footer';

import { hadeesByTopic } from '@/data'
import { hadees } from '@/data/details-data-hadeesbytopic'

const Index = () => {
  const [savedId, setSavedId] = useState(null)
  const [detailObj, setDetailObj] = useState({})
  const [displayInfo, setDisplayInfo] = useState('')

  useEffect(() => {
    const filteredDetail = hadees?.find((item) => item?.id == savedId) ?? {};

    setDetailObj(filteredDetail)

  }, [savedId])

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {savedId ? (
        <HeroSection>
          <h1 className='text-3xl lg:text-4xl xl:text-6xl font-bold'>{displayInfo}</h1>
        </HeroSection>
      ) : (
        <HeroSection
          imgUrl='/showcase/hadees-by-topic.png'
        />
      )}
      {savedId ? (
        <ListingCards
          data={detailObj}
          setToggler={setSavedId}
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