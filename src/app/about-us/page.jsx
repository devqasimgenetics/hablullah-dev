import React from 'react';
import Header from '@/components/Navbar';
import HeroSection from '@/components/Showcase';
import NewsletterSection from '@/components/homepage/Newsletter';
import Footer from '@/components/Footer';

const AboutHablullah = () => {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <HeroSection>
            <h1 className='uppercase text-center text-3xl lg:text-5xl xl:text-8xl font-medium'>
                About Us
            </h1>
            </HeroSection>
            <section className="bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 md:pb-28">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12">
                        <div>
                            <img
                                className="w-full"
                                src="/imgs/homepage/about-hablullah.png"
                                alt="About Hablullah"
                            />
                        </div>
                        <div>
                            <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl text-[#111111] mb-3 md:mb-4">
                                About Hablullah
                            </h2>
                            <p className="font-medium text-[#525252] text-sm md:text-base lg:text-lg mb-6 md:mb-10">
                                Hablullah started almost two years ago to help young people find practical guidance from the Quran and Sunnah. We focus on the real concerns of youth and speak in a clear way so faith feels close and useful. Our aim is to remove cultural habits and wrong ideas that hide true Islamic teachings and guide people back to authentic knowledge. Through podcasts, reels, interviews, and real-life stories, we want to make living Islam easier and more meaningful for today’s generation.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <NewsletterSection />
            <Footer />
        </div>
    )
}

export default AboutHablullah;
