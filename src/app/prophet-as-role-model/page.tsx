import React from 'react';
import Header from '@/components/Navbar';
import HeroSection from '@/components/Showcase';
import RoleModelCards from '@/components/RoleModelCards'
import NewsletterSection from '@/components/homepage/Newsletter';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection 
        imgUrl='/showcase/prophet-as-role-model.png'
      />
      <RoleModelCards />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Index;