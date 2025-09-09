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
  const [displayInfo, setDisplayInfo] = useState({})

  useEffect(() => {
    const filteredDetail = hadees?.find((item) => item?.id == savedId) ?? {};

    setDetailObj(filteredDetail)

  }, [savedId])

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {savedId ? (
        <HeroSection>
          <div className='w-full flex flex-col-reverse sm:flex-row items-center justify-between gap-4 sm:gap-6'>
            <h1 className='uppercase text-3xl lg:text-4xl xl:text-5xl font-bold'>{displayInfo?.english}</h1>
            <h1 className='text-3xl lg:text-4xl xl:text-8xl font-bold font-arabic'>{displayInfo?.arabic}</h1>
          </div>
        </HeroSection>
      ) : (
        <HeroSection>
            <h1 className='uppercase text-center text-3xl lg:text-5xl xl:text-8xl font-medium'>Hadees by Topic</h1>
        </HeroSection>
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