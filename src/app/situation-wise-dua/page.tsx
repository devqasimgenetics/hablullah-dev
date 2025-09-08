import React from 'react';
import Header from '@/components/Navbar';
import HeroSection from '@/components/Showcase';
import DetailCards from '@/components/DetailCards/SituationWiseDua'
import NewsletterSection from '@/components/homepage/Newsletter';
import Footer from '@/components/Footer';

import { situationWiseDua } from '@/data'

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection 
        imgUrl='/showcase/situation-wise-dua.png'
      />
      <DetailCards data={situationWiseDua} />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Index;