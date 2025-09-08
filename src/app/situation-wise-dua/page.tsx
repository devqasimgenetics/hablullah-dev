"use client"
import React, { useState, useEffect } from 'react';
import Header from '@/components/Navbar';
import HeroSection from '@/components/Showcase';
import SituationWiseDua from '@/components/DetailCards/SituationWiseDua'
import DetailCards from '@/components/DetailCards/SituationWiseDuaDetails'
import NewsletterSection from '@/components/homepage/Newsletter';
import Footer from '@/components/Footer';

import { situationWiseDua } from '@/data'
import { duas } from '@/data/details-data-situationwisedua'

const Index = () => {
  const [savedId, setSavedId] = useState(null)
  const [detailObj, setDetailObj] = useState({})

  useEffect(() => {
    const filteredDetail = duas?.find((item) => item?.id == savedId) ?? {};

    setDetailObj(filteredDetail)

  }, [savedId])

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection
        imgUrl='/showcase/situation-wise-dua.png'
      />
      {savedId}
      {savedId ? (
        <DetailCards
          data={detailObj}
          setToggler={setSavedId}
        />
      ) : (

        <SituationWiseDua
          setToggler={setSavedId}
          data={situationWiseDua} />
      )}
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Index;