import React from 'react';
import Header from '@/components/Navbar';
import HeroSection from '@/components/Showcase';
import DetailCards from '@/components/DetailCards/HowAreYouFeeling'
import NewsletterSection from '@/components/homepage/Newsletter';
import Footer from '@/components/Footer';

import { howAreYouFeeling } from '@/data';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection 
        imgUrl='/showcase/how-are-you-feeling.png'
      />
      <DetailCards data={howAreYouFeeling} />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Index;