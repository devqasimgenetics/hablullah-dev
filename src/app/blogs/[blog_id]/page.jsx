import React from 'react';
import Header from '@/components/Navbar';
import HeroSection from '@/components/Showcase';
import SimilarBlogs from '@/components/blogs/SimilarBlogs';
import NewsletterSection from '@/components/homepage/Newsletter';
import Footer from '@/components/Footer';

const BlogDetails = ({ params, imgUrl = '/bg-blog.svg' }) => {
    const { blog_id } = params;

    // Mock data - replace with actual API data
    const blogPost = {
        title: "Struggling with 5 Daily Prayers? A Complete Guide to Finding Consistency",
        date: "October 15, 2024",
        author: "Admin",
        featuredImage: "/imgs/homepage/about-hablullah.png",
        excerpt: "In the journey of life, we often find ourselves at crossroads where difficult decisions must be made...",
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            <Header />

            {blog_id == 'struggling-with-5-daily-prayers' ? (
                <>
                    <section
                        style={{ backgroundImage: `url('/imgs/blogs/${imgUrl}')` }}
                        className="bg-[#0267b1] bg-no-repeat flex items-center justify-center bg-center bg-cover text-white min-h-40 md:min-h-64">

                    </section>

                    <div className="max-w-[1036px] w-full relative -top-20 md:-top-28 mx-auto px-4 sm:px-6 lg:px-8">
                        {/* Main Article */}
                        <main>
                            <article className="overflow-hidden">

                                {/* Article Header */}
                                <div className="bg-white p-4 sm:p-6 md:p-7 lg:p-8 mb-8">
                                    <div className="flex items-center gap-3 font-semibold text-sm text-[#3E5261] mb-2">
                                        <span className="flex items-center gap-2">
                                            BLOGS
                                        </span>
                                        <img className='w-5 h-5' src="/imgs/blogs/blog-breadcrumb-arrow.svg" alt="" />
                                        <span className="flex items-center gap-2">
                                            BLOG DETAIL
                                        </span>
                                    </div>

                                    <h1 className="text-[22px] md:text-[32px] font-bold text-[#111111] leading-[34px] md:leading-[52px] mb-6">
                                        {blogPost.title}
                                    </h1>

                                    {/* Featured Image */}
                                    <div className="relative w-full overflow-hidden bg-gray-200 mb-6">
                                        <img
                                            src={'/imgs/blogs/blog-detail-1.jpg'}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    {/* Introduction */}
                                    <div className="prose prose-lg max-w-none">
                                        <p className="text-lg font-medium text-[#525252] leading-[34px] mb-1.5">
                                            Prayer (Salah) is the heartbeat of a Muslim's spiritual life. It's not just an obligation—it's a direct conversation with Allah, a daily reminder of purpose, and a source of peace in a chaotic world. Yet, let's be honest: for many of us, consistently praying five times a day is one of the hardest struggles.
                                        </p>
                                        <p className="text-lg font-medium text-[#525252] leading-[34px] mb-1.5">
                                            If you've ever felt guilty, inconsistent, or overwhelmed with salah, know this: you are not alone. Countless Muslims—young and old, practicing and new to faith—face this challenge. The key is not to give up, but to understand the struggle and take small, steady steps forward.
                                        </p>
                                    </div>
                                </div>

                                {/* Article Content */}
                                <div>
                                    <main className='flex flex-col-reverse md:flex-row items-start justify-between gap-6'>
                                        <section>
                                            {/* Section 1: Why Do We Struggle */}
                                            <section className="w-full mb-10">
                                                <h2 className="text-xl md:text-[28px] font-bold text-[#111111] mb-4">
                                                    Why Do We Struggle With 5 Daily Prayers?
                                                </h2>
                                                <p className="text-lg font-medium text-[#525252] leading-[34px] mb-6">
                                                    Before fixing the problem, we need to understand it. Here are some of the most common reasons:
                                                </p>

                                                <div className="space-y-6">
                                                    <div className="w-full mb-5">
                                                        <h3 className="text-[22px] font-semibold text-[#111111] mb-2">
                                                            1. The Pace of Modern Life
                                                        </h3>
                                                        <p className="text-base font-medium text-[#525252] leading-[30px]">
                                                            From morning commutes to late-night work or study sessions, our routines often clash with prayer timings. It's easy to say "I'll pray later" and then forget.
                                                        </p>
                                                    </div>

                                                    <div className="w-full mb-5">
                                                        <h3 className="text-[22px] font-semibold text-[#111111] mb-2">
                                                            2. Low Spiritual Energy (Iman)
                                                        </h3>
                                                        <p className="text-base font-medium text-[#525252] leading-[30px]">
                                                            Faith naturally rises and falls. Sometimes the heart feels close to Allah, and sometimes it feels distant. In those low moments, prayer can feel more like a chore than a source of comfort.
                                                        </p>
                                                    </div>

                                                    <div className="w-full mb-5">
                                                        <h3 className="text-[22px] font-semibold text-[#111111] mb-2">
                                                            3. Distractions and Laziness
                                                        </h3>
                                                        <p className="text-base font-medium text-[#525252] leading-[30px]">
                                                            Phones, social media, entertainment, and endless to-do lists make procrastination easy. Shaytan uses every small excuse—"I'll do it after this video" or "I'll pray before sleeping"—to make us delay.
                                                        </p>
                                                    </div>

                                                    <div className="w-full mb-5">
                                                        <h3 className="text-[22px] font-semibold text-[#111111] mb-2">
                                                            4. Environment & Social Pressures
                                                        </h3>
                                                        <p className="text-base font-medium text-[#525252] leading-[30px]">
                                                            At work, school, or public places, it can feel uncomfortable to excuse yourself for prayer, especially if those around you don't share the same faith.
                                                        </p>
                                                    </div>

                                                    <div className="w-full mb-5">
                                                        <h3 className="text-[22px] font-semibold text-[#111111] mb-2">
                                                            5. Weak Habits & Lack of Planning
                                                        </h3>
                                                        <p className="text-base font-medium text-[#525252] leading-[30px]">
                                                            Many of us don't structure our day around salah, we try to "fit salah in." That makes it harder to keep up consistently.
                                                        </p>
                                                    </div>
                                                </div>
                                            </section>

                                            <div className="relative w-full overflow-hidden bg-gray-200 mb-6">
                                                <img
                                                    src={'/imgs/blogs/blog-detail-2.jpg'}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>

                                            {/* Section 2: The Weight of Salah */}
                                            <section className="w-full mb-5">
                                                <h3 className="text-[22px] font-semibold text-[#111111] mb-2">
                                                    The Weight of Salah in Islam
                                                </h3>
                                                <p className="text-base font-medium text-[#525252] leading-[30px] mb-3">
                                                    It's important to remind ourselves why prayer matters so much:
                                                </p>
                                                <ul className="space-y-3 text-base font-medium text-[#525252] leading-[30px]">
                                                    <li className="flex items-start gap-3">
                                                        <span className="text-gray-600 font-bold">•</span>
                                                        <span>Salah is the first act of worship made obligatory after belief in Allah.</span>
                                                    </li>
                                                    <li className="flex items-start gap-3">
                                                        <span className="text-gray-600 font-bold">•</span>
                                                        <span>It was directly given to the Prophet ﷺ during the Mi'raj (Ascension), showing its importance.</span>
                                                    </li>
                                                    <li className="flex items-start gap-3">
                                                        <span className="text-gray-600 font-bold">•</span>
                                                        <span>The Prophet ﷺ said: "The first matter that the slave will be brought to account for on the Day of Judgment is the prayer. If it is sound, then the rest of his deeds will be sound." (Sunan an-Nasa'i)</span>
                                                    </li>
                                                    <li className="flex items-start gap-3">
                                                        <span className="text-gray-600 font-bold">•</span>
                                                        <span>It is a daily spiritual recharge, washing away sins and strengthening the heart.</span>
                                                    </li>
                                                </ul>
                                            </section>

                                            {/* Section 3: Practical Steps */}
                                            <section className="w-full mb-5">
                                                <h2 className="text-[22px] font-semibold text-[#111111] mb-2">
                                                    Practical Steps to Build Consistency
                                                </h2>
                                                <p className="text-base font-medium text-[#525252] leading-[30px] mb-3">
                                                    Now let's get into practical, real-life tips to make praying five times daily easier.
                                                </p>

                                                <div className="space-y-8">
                                                    {/* Step 1 */}
                                                    <div className="w-full">
                                                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                                            1. Anchor Your Day Around Prayer
                                                        </h3>
                                                        <p className="text-base font-medium text-[#525252] leading-[30px] mb-3">
                                                            Instead of fitting prayer into your schedule, fit your schedule around prayer. Treat salah like fixed appointments that cannot be missed.
                                                        </p>
                                                        <p className="text-base font-medium text-[#111111] leading-[30px] mb-2">Example:</p>
                                                        <ul className="space-y-3 text-base font-medium text-[#525252] leading-[30px]">
                                                            <li className="flex items-start gap-2">
                                                                <span className="text-gray-600 font-bold">•</span>
                                                                <span><strong>Fajr:</strong> start your day with it, then plan sleep around it.</span>
                                                            </li>
                                                            <li className="flex items-start gap-2">
                                                                <span className="text-gray-600 font-bold">•</span>
                                                                <span><strong>Dhuhr:</strong> a short break during work or study.</span>
                                                            </li>
                                                            <li className="flex items-start gap-2">
                                                                <span className="text-gray-600 font-bold">•</span>
                                                                <span><strong>Asr:</strong> use it as a pause before evening commitments.</span>
                                                            </li>
                                                            <li className="flex items-start gap-2">
                                                                <span className="text-gray-600 font-bold">•</span>
                                                                <span><strong>Maghrib:</strong> reset between day and night.</span>
                                                            </li>
                                                            <li className="flex items-start gap-2">
                                                                <span className="text-gray-600 font-bold">•</span>
                                                                <span><strong>Isha:</strong> your peaceful closure before rest.</span>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    {/* Step 2 */}
                                                    <div className="w-full mb-5">
                                                        <h2 className="text-[22px] font-semibold text-[#111111] mb-2">
                                                            2. Start Small, Build Up
                                                        </h2>
                                                        <p className="text-lg font-medium text-[#525252] leading-[34px] mb-6">
                                                            If all five feel overwhelming, pick one or two prayers to prioritize. Many scholars advise starting with Fajr and Isha since they are done at home and bookend the day. Slowly add the rest until all five are consistent.
                                                        </p>
                                                    </div>

                                                    {/* Step 3 */}
                                                    <div className="w-full mb-5">
                                                        <h2 className="text-[22px] font-semibold text-[#111111] mb-2">
                                                            3. Leverage Technology
                                                        </h2>
                                                        <ul className="space-y-3 text-base font-medium text-[#525252] leading-[30px]">
                                                            <li className="flex items-start gap-2">
                                                                <span className="text-gray-600 font-bold">•</span>
                                                                <span>Install a reliable adhan app (Muslim Pro, Athan, Pillars, etc.).</span>
                                                            </li>
                                                            <li className="flex items-start gap-2">
                                                                <span className="text-gray-600 font-bold">•</span>
                                                                <span>Set silent reminders or vibration alarms if you're in public spaces.</span>
                                                            </li>
                                                            <li className="flex items-start gap-2">
                                                                <span className="text-gray-600 font-bold">•</span>
                                                                <span>Use widgets or lock-screen features so prayer times are always visible.</span>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    {/* Step 4 */}
                                                    <div className="w-full mb-5">
                                                        <h2 className="text-[22px] font-semibold text-[#111111] mb-2">
                                                            4. Create Prayer-Friendly Spaces
                                                        </h2>
                                                        <p className="text-lg font-medium text-[#525252] leading-[34px] mb-6">
                                                            Keep a prayer mat easily accessible at home, in your bag, or even in your car. At work or school, politely ask for a quiet corner. Most people respect sincere religious needs more than we expect.
                                                        </p>
                                                    </div>

                                                    {/* Step 5 */}
                                                    <div className="w-full mb-5">
                                                        <h2 className="text-[22px] font-semibold text-[#111111] mb-2">
                                                            5. Use Triggers and Habits
                                                        </h2>
                                                        <p className="text-lg font-medium text-[#525252] leading-[34px] mb-6">
                                                            Link salah with existing habits:
                                                        </p>
                                                        <ul className="space-y-3 text-base font-medium text-[#525252] leading-[30px]">
                                                            <li className="flex items-start gap-2">
                                                                <span className="text-gray-600 font-bold">•</span>
                                                                <span><strong>Fajr</strong> → after brushing your teeth.</span>
                                                            </li>
                                                            <li className="flex items-start gap-2">
                                                                <span className="text-gray-600 font-bold">•</span>
                                                                <span><strong>Dhuhr</strong> → after lunch.</span>
                                                            </li>
                                                            <li className="flex items-start gap-2">
                                                                <span className="text-gray-600 font-bold">•</span>
                                                                <span><strong>Asr</strong> → after tea or a short walk.</span>
                                                            </li>
                                                            <li className="flex items-start gap-2">
                                                                <span className="text-gray-600 font-bold">•</span>
                                                                <span><strong>Maghrib</strong> → as soon as you hear the adhan.</span>
                                                            </li>
                                                            <li className="flex items-start gap-2">
                                                                <span className="text-gray-600 font-bold">•</span>
                                                                <span><strong>Isha</strong> → before bed.</span>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    {/* Step 6 */}
                                                    <div className="w-full mb-5">
                                                        <h2 className="text-[22px] font-semibold text-[#111111] mb-2">
                                                            6. Find Prayer Companions
                                                        </h2>
                                                        <p className="text-lg font-medium text-[#525252] leading-[34px] mb-6">
                                                            Praying with family, roommates, or friends creates accountability. If you live alone, try to catch jama'ah (congregation) at a nearby masjid, even once or twice a week—it strengthens consistency.
                                                        </p>
                                                    </div>

                                                    {/* Step 7 */}
                                                    <div className="w-full mb-10">
                                                        <h2 className="text-[22px] font-semibold text-[#111111] mb-2">
                                                            7. Make Dua for Help
                                                        </h2>
                                                        <p className="text-lg font-medium text-[#525252] leading-[34px] mb-1.5">
                                                            Remember: guidance and consistency come only from Allah. Make dua regularly:
                                                        </p>
                                                        <p className="text-lg font-medium text-[#525252] leading-[34px]">
                                                            "O Allah, help me to remember You, thank You, and worship You in the best way."
                                                        </p>
                                                    </div>

                                                    <div className='w-full flex items-start gap-[22px] mb-6'>
                                                        <img className='w-2/4 max-w-full' src="/imgs/blogs/blog-detail-3.jpg" alt="" />
                                                        <img className='w-2/4 max-w-full' src="/imgs/blogs/blog-detail-4.jpg" alt="" />
                                                    </div>

                                                    {/* Step 8 */}
                                                    <div className="w-full mb-6">
                                                        <h2 className="text-[22px] font-semibold text-[#111111] mb-2">
                                                            Dealing With Guilt and Missed Prayers
                                                        </h2>
                                                        <p className="text-lg font-medium text-[#525252] leading-[34px]">
                                                            One of the biggest traps is guilt. When we miss salah, Shaytan makes us feel so ashamed that we avoid trying again.
                                                        </p>
                                                        <p className="text-lg font-medium text-[#111111] leading-[34px]">
                                                            Key reminders:
                                                        </p>
                                                        <ul className="space-y-3 text-base font-medium text-[#525252] leading-[30px]">
                                                            <li className="flex items-start gap-2">
                                                                <span className="text-gray-600 font-bold">•</span>
                                                                <span>Missing prayers doesn't make you a bad Muslim—it makes you human.</span>
                                                            </li>
                                                            <li className="flex items-start gap-2">
                                                                <span className="text-gray-600 font-bold">•</span>
                                                                <span>Islam is about returning to Allah again and again, no matter how many times we fall.</span>
                                                            </li>
                                                            <li className="flex items-start gap-2">
                                                                <span className="text-gray-600 font-bold">•</span>
                                                                <span>Never let guilt turn into despair. Repent, make up what you can, and keep moving forward.</span>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    {/* Step 9 */}
                                                    <div className="w-full mb-8">
                                                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                                            Spiritual Motivations That Help
                                                        </h3>
                                                        <p className="text-lg font-medium text-[#525252] leading-[34px]">
                                                            Beyond the practical steps, here are spiritual reminders that reignite motivation:
                                                        </p>
                                                        <p className="text-lg font-medium text-[#111111] leading-[34px]">
                                                            Key reminders:
                                                        </p>
                                                        <ul className="space-y-3 text-base font-medium text-[#525252] leading-[30px]">
                                                            <li className="flex items-start gap-2">
                                                                <span className="text-gray-600 font-bold">•</span>
                                                                <span>Prayer is light. The Prophet ﷺ said: "Prayer is light." (Muslim). It brings clarity to the heart and mind.</span>
                                                            </li>
                                                            <li className="flex items-start gap-2">
                                                                <span className="text-gray-600 font-bold">•</span>
                                                                <span>Prayer erases sins. The Prophet ﷺ compared salah to bathing in a river five times a day—leaving no dirt behind.</span>
                                                            </li>
                                                            <li className="flex items-start gap-2">
                                                                <span className="text-gray-600 font-bold">•</span>
                                                                <span>Prayer brings peace. Many Muslims report that when they're most stressed, salah brings relief they can't find anywhere else.</span>
                                                            </li>
                                                            <li className="flex items-start gap-2">
                                                                <span className="text-gray-600 font-bold">•</span>
                                                                <span>Prayer is a privilege. Imagine: the King of Kings invites you five times a day into His presence.</span>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    {/* Step 10 */}
                                                    <div className="w-full border-t border-b border-[#BCBCBC] py-4">
                                                        <section className='flex items-center gap-4'>
                                                            <div className='w-12 h-12 bg-gray-100 rounded-full'>
                                                                <img src="/imgs/blogs/fazilat-avatar.png" alt="" />
                                                            </div>
                                                            <div>
                                                                <h3 className="text-[18px] font-medium text-[#111111]">
                                                                    Fazilat Zulfiqar
                                                                </h3>
                                                                <p className="text-sm font-medium text-[#3E5261]">
                                                                    Aug 25, 2025
                                                                </p>
                                                            </div>
                                                        </section>

                                                    </div>
                                                </div>
                                            </section>
                                        </section>
                                        <div>
                                            <div className='w-full md:w-[305px] bg-white border-[#DDDDDD] px-4 py-5'>
                                                <h4 className='font-semibold text-[20px] text-[#111111] leading-[30px]'>Seek </h4>
                                                <h4 className='font-semibold text-[20px] text-[#111111] leading-[30px] mb-2'>Beneficial knowledge.</h4>
                                                <p className='font-medium text-sm text-[#525252] mb-4.5'>Don't miss on new papers!</p>
                                                <input type="text" placeholder='Email' className='w-full h-11 bg-[#F9F9F9] border border-[#DDDDDD] text-black placeholder:text--[#878787] px-3 mb-3' />
                                                <button className='w-full h-11 bg-[#0267B1] text-white font-bold text-sm rounded-none'>SUBSCRIBE</button>
                                            </div>
                                        </div>
                                    </main>

                                </div>
                            </article>
                        </main>
                    </div>

                    <SimilarBlogs />
                </>
            ) : (
                <>
                    <HeroSection>
                        <h1 className='uppercase text-center text-3xl lg:text-5xl xl:text-8xl font-medium'>
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
                </>
            )}

            <NewsletterSection />
            <Footer />
        </div>
    );
};

export default BlogDetails;
