import React from 'react';
import Header from '@/components/Navbar';
import HeroSection from '@/components/Showcase';
import BlogSection from '@/components/homepage/Blogs';
import NewsletterSection from '@/components/homepage/Newsletter';
import Footer from '@/components/Footer';

const Blogs = () => {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <HeroSection>
                <h1 className='text-3xl lg:text-4xl xl:text-6xl font-bold'>Blogs</h1>
            </HeroSection>
            <section className="bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 md:pb-28">
                    <BlogSection />
                </div>
            </section>
            <NewsletterSection />
            <Footer />
        </div>
    )
}

export default Blogs;
