import React from 'react';
import Header from '@/components/Navbar';
import HeroSection from '@/components/Showcase';
import DetailCards from '@/components/DetailCards/HadeesByTopic'
import NewsletterSection from '@/components/homepage/Newsletter';
import Footer from '@/components/Footer';

import { hadeesByTopic } from '@/data'

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection 
        imgUrl='/showcase/hadees-by-topic.png'
      />
      <DetailCards data={hadeesByTopic} />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Index;