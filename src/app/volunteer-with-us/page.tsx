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
      <HeroSection>
        <h1 className='uppercase text-center text-3xl lg:text-5xl xl:text-8xl font-medium'>Volunteer with us</h1>
      </HeroSection>
        <VolunteerForm title="JOIN OUR TEAM" />
      </div>
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Index;