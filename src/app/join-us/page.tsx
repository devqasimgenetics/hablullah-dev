import React from 'react';
import Header from '@/components/Navbar';
import HeroSection from '@/components/Showcase';
import JoinUsForm from '@/components/JoinUsForm'
import NewsletterSection from '@/components/homepage/Newsletter';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection 
        imgUrl='/showcase/join-us.png'
      />
      <JoinUsForm />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Index;