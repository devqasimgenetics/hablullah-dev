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
      <div className='bg-[#F9F9F9]'>
        <HeroSection 
          imgUrl='/showcase/volunteer-with-us.png'
        />
        <VolunteerForm title="JOIN OUR TEAM" />
      </div>
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Index;