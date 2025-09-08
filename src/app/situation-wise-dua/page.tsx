"use client"
import React, { useState } from 'react';
import Header from '@/components/Navbar';
import HeroSection from '@/components/Showcase';
import SituationWiseDua from '@/components/DetailCards/SituationWiseDua'
import DetailCards from '@/components/DetailCards/HadeesByTopicDetails'
import NewsletterSection from '@/components/homepage/Newsletter';
import Footer from '@/components/Footer';

import { situationWiseDua } from '@/data'

const Index = () => {
  const [toggler, setToggler] = useState(true)

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection 
        imgUrl='/showcase/situation-wise-dua.png'
      />
      {toggler ? (
        <SituationWiseDua
          setToggler={setToggler}
          data={situationWiseDua} />
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