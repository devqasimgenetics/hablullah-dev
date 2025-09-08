import React from 'react';
import Header from '@/components/Navbar';
import HeroSection from '@/components/Showcase';
import VolunteerForm from '@/components/VolunteerForm'
import NewsletterSection from '@/components/homepage/Newsletter';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection 
        imgUrl='/showcase/collaboration-with-us.png'
      />
      <VolunteerForm title="Contact Us" />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Index;