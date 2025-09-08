import React from 'react';
import Header from '@/components/Navbar';
import HeroSection from '@/components/Showcase';
import DetailCards from '@/components/DetailCards/SummaryOfSurah'
import NewsletterSection from '@/components/homepage/Newsletter';
import Footer from '@/components/Footer';

import { summaryOfSurrah } from '@/data'

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection 
        imgUrl='/showcase/summary-of-surah.png'
      />
      <DetailCards data={summaryOfSurrah} />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Index;