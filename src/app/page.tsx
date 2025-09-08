import React from 'react';
import Header from '@/components/Navbar';
import HeroSection from '@/components/homepage/Showcase';
import Categories from '@/components/homepage/Categories';
import AboutHablullah from '@/components/homepage/AboutHablullah';
import ServicesSection from '@/components/homepage/Features';
import FeaturedVideos from '@/components/homepage/Podcasts';
import BlogSection from '@/components/homepage/Blogs';
import Testimonials from '@/components/homepage/Testimonials';
import NewsletterSection from '@/components/homepage/Newsletter';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div
        style={{ backgroundImage: `url('/imgs/pattern-bg.png')` }}
        className="bg-left bg-contain bg-repeat">
        <HeroSection />
        <Categories />
        <AboutHablullah />
      </div>
      <ServicesSection />
      <FeaturedVideos />
      <BlogSection />
      <Testimonials />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Index;