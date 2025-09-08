"use client"
import React, { useState } from 'react';
import Header from '@/components/Navbar';
import HeroSection from '@/components/Showcase';
import SubjectWise from '@/components/DetailCards/SubjectWise'
import DetailCards from '@/components/DetailCards/HadeesByTopicDetails'
import NewsletterSection from '@/components/homepage/Newsletter';
import Footer from '@/components/Footer';

import { subjectWise } from '@/data'

const Index = () => {
  const [toggler, setToggler] = useState(true)

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection 
        imgUrl='/showcase/subject-wise.png'
      />
      {toggler ? (
        <SubjectWise
          setToggler={setToggler}
          data={subjectWise} />
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