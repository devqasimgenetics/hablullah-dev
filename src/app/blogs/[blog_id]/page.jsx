import React from 'react';
import Header from '@/components/Navbar';
import HeroSection from '@/components/Showcase';
import NewsletterSection from '@/components/homepage/Newsletter';
import Footer from '@/components/Footer';

const BlogDetails = ({ params }) => {
    const { blog_id } = params;

    return (
        <div className="min-h-screen bg-white">
            <Header />
            <HeroSection>
                <h1 className='text-3xl lg:text-4xl xl:text-6xl font-bold'>
                    Blogs
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
                            <h2 className="font-bold capitalize text-2xl md:text-3xl lg:text-4xl text-[#111111] mb-3 md:mb-4">
                                {decodeURIComponent(blog_id).replace(/-/g, " ")}
                            </h2>
                            <p className="font-medium text-[#525252] text-sm md:text-base lg:text-lg mb-6 md:mb-10">
                                Hablullah is an organization, which provides a unique platform for
                                the youth and provides them avenues to channel their potential in
                                accordance with Islamic values. Since its inception in 2011,
                                Hablullah is working to create well-balanced individuals, who are
                                not only skilled in their respective fields but also recognize and
                                fulfil their religious obligations and participate actively in
                                their communities.
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

export default BlogDetails;
