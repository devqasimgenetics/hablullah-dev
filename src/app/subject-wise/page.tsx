"use client"
import React, { useState, useEffect } from 'react';
import Header from '@/components/Navbar';
import HeroSection from '@/components/Showcase';
import SubjectWise from '@/components/DetailCards/SubjectWise'
import DetailCards from '@/components/DetailCards/SubjectWiseDetails'
import NewsletterSection from '@/components/homepage/Newsletter';
import Footer from '@/components/Footer';

import { subjectWise } from '@/data'
import { surahs } from '@/data/details-data-subject-wise'

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
        imgUrl='/showcase/subject-wise.png'
      />
      {savedId ? (
        <DetailCards
          data={detailObj}
          setToggler={setSavedId}
          displayInfo={displayInfo}
        />
      ) : (
        <SubjectWise
          setToggler={setSavedId}
          setDisplayInfo={setDisplayInfo}
          data={subjectWise} />
      )}
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Index;