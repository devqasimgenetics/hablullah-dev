"use client"
import React, { useState } from 'react';
import Header from '@/components/Navbar';
import HeroSection from '@/components/Showcase';
import HowAreYouFeeling from '@/components/DetailCards/HowAreYouFeeling'
import DetailCards from '@/components/DetailCards/HadeesByTopicDetails'
import NewsletterSection from '@/components/homepage/Newsletter';
import Footer from '@/components/Footer';

import { howAreYouFeeling } from '@/data';

const Index = () => {
  const [toggler, setToggler] = useState(true)

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection 
        imgUrl='/showcase/how-are-you-feeling.png'
      />
      {toggler ? (
        <HowAreYouFeeling
          setToggler={setToggler}
          data={howAreYouFeeling} />
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