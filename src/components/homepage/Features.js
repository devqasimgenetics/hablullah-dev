import React from 'react';
import Link from 'next/link'

const IslamicGuidanceComponent = () => {
  return (
    <div className='bg-[#F8F8EF] py-8 md:py-14 mb-14 md:mb-28'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white overflow-hidden">
            <div className="relative h-80">
              <img
                src="/imgs/homepage/feature-card-1.png"
                alt="Quran and candle"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full px-5 py-6">
              <h3 className="text-lg md:text-2xl font-bold text-[#111111] mb-3">Quran In Life</h3>
              <p className="font-medium text-[#525252] text-sm md:text-base leading-relaxed mb-6 md:mb-7">
                Feeling lost in the rush of everyday life? Let the Quran be your compass.
                Whether it's a few lines in the morning or a comforting verse at night,
                discover how Allah's words can ground your heart. Make it a habit and
                watch as its guidance gradually transforms your thoughts and
                relationships for the better.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <Link href={'/summary-of-surrah'}>
                  <button className="bg-[#0267B1] text-white font-semibold text-sm hover:bg-black transition-colors cursor-pointer px-6 md:px-14 py-4 md:py-5">
                    SUMMARY OF SURAH
                  </button>
                </Link>
                <Link href={'/subject-wise'}>
                  <button className="bg-[#F3FBFF] text-[#0267B1] border border-[#0267B1] font-semibold text-sm hover:bg-black hover:text-white transition-colors cursor-pointer px-6 md:px-14 py-4 md:py-5">
                    SUBJECT WISE
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Dua Card */}
          <div className="bg-white overflow-hidden">
            <div className="relative h-80">
              <img
                src="/imgs/homepage/feature-card-2.png"
                alt="Hands in prayer with prayer beads"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full px-5 py-6">
              <h3 className="text-lg md:text-2xl font-bold text-[#111111] mb-3">Dua</h3>
              <p className="font-medium text-[#525252] text-sm md:text-base leading-relaxed mb-6 md:mb-7">
                Struggling with exams, debt, or heartbreak? Find the perfect supplication
                and speak from your heart. These concise, authentic duas make it easy to
                turn to Allah whenever you need Him most. Embrace the power of earnest
                prayer and witness how it brings peace to your soul and clarity to your
                journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <Link href={'/situation-wise-dua'}>
                  <button className="bg-[#0267B1] text-white font-semibold text-sm hover:bg-black transition-colors cursor-pointer px-6 md:px-14 py-4 md:py-5">
                    SITUATION WISE DUA
                  </button>
                </Link>
                <Link href={'/how-are-you-feeling'}>
                  <button className="bg-[#F3FBFF] text-[#0267B1] border border-[#0267B1] font-semibold text-sm hover:bg-black hover:text-white transition-colors cursor-pointer px-6 md:px-14 py-4 md:py-5">
                    HOW ARE YOU FEELING
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden">
          <div className="md:flex justify-between gap-10">
            <div className="md:w-2/4">
              <img
                src="/imgs/homepage/feature-card-3.png"
                alt="Quran with prayer beads and Islamic calligraphy"
                className="w-full h-64 md:h-full object-cover"
              />
            </div>
            <div className="md:w-2/4 p-6 md:p-8">
              <div className="hidden md:block text-[#0267B1] text-sm font-medium uppercase tracking-wide mb-2">
                HADEES BY TOPIC
              </div>
              <h2 className="text-lg md:text-2xl lg:text-3xl font-bold text-[#111111] mb-4">
                Prophetic Wisdom At Your Fingertips
              </h2>
              <p className="font-medium text-[#525252] text-sm md:text-lg leading-relaxed mb-6 md:mb-8">
                Explore the Prophet ﷺ's timeless teachings categorized for real-life
                issues like parenting, relationships, leadership, and more. Find the
                perfect hadees for every situation and let the Sunnah enrich your path.
                With each hadees, you'll gain practical tools to navigate today's
                challenges with faith and integrity.
              </p>
              <Link href={'/hadees-by-topic'}>
                <button className="w-full sm:w-fit bg-[#0267B1] text-white font-semibold text-sm hover:bg-black transition-colors cursor-pointer px-6 md:px-14 py-4 md:py-5">
                  LEARN MORE
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IslamicGuidanceComponent;