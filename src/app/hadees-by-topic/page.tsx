"use client"
import React, { useState } from 'react';
import Header from '@/components/Navbar';
import HeroSection from '@/components/Showcase';
import HadeesByTopic from '@/components/DetailCards/HadeesByTopic'
import DetailCards from '@/components/DetailCards/HadeesByTopicDetails'
import NewsletterSection from '@/components/homepage/Newsletter';
import Footer from '@/components/Footer';

import { hadeesByTopic } from '@/data'

const Index = () => {
  const [toggler, setToggler] = useState(true)

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection
        imgUrl='/showcase/hadees-by-topic.png'
      />
      {toggler ? (
        <HadeesByTopic
          setToggler={setToggler}
          data={hadeesByTopic} />
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