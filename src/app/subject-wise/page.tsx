import React from 'react';
import Header from '@/components/Navbar';
import HeroSection from '@/components/Showcase';
import DetailCards from '@/components/DetailCards/SubjectWise'
import NewsletterSection from '@/components/homepage/Newsletter';
import Footer from '@/components/Footer';

import { subjectWise } from '@/data'

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection 
        imgUrl='/showcase/subject-wise.png'
      />
      <DetailCards data={subjectWise} />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Index;