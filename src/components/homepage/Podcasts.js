'use client'
import Link from 'next/link'
import { useState, useEffect, useCallback } from 'react'
import dynamic from 'next/dynamic'
const Slider = dynamic(() => import('react-slick'), { ssr: false })
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

// Custom Arrow Components
const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-all"
    aria-label="Next slide"
  >
    <svg className="w-6 h-6 text-[#0267B1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  </button>
)

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-all"
    aria-label="Previous slide"
  >
    <svg className="w-6 h-6 text-[#0267B1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
  </button>
)

const FeaturedVideos = () => {
  const [isClient, setIsClient] = useState(false)
  const [windowWidth, setWindowWidth] = useState(0)
  const [sliderKey, setSliderKey] = useState(0)

  const videos = [
    { title: "Second Marriage: Truth, Challenges & Islamic Perspective", thumbnail: "/imgs/podcast/podcast-1.jpg", link: 'https://www.youtube.com/watch?v=JxyZKpt5cyU', description: "Islam allows second marriage under certain conditions, but it also comes with immense responsibilities, justice, and emotional balance. This discussion covers the true wisdom behind the permission of multiple marriages in Islam and the realities that come with it in today’s society. Dr. Asiya Madni and the panel explore why many second marriages fail, the misconceptions around them, and what Islam truly teaches about fairness, respect, and emotional care for all spouses. The episode also sheds light on how ego, cultural pressure, and lack of understanding have distorted this sacred allowance into a source of conflict rather than harmony." },
    { title: "From Music to Deen: A Journey of Faith & Transformation | Bashi Malik", thumbnail: "/imgs/podcast/podcast-2.jpg", link: 'https://www.youtube.com/watch?v=eJF5Ui_EkHI', description: "In this inspiring episode of the Hablullah Podcast, we listen to the remarkable journey of a Bashi Malik who was once deeply involved in music, songs, and the world of entertainment. From his college days to university life, he was surrounded by rhythms and melodies, but something within him longed for more - something beyond temporary pleasure. This podcast explores how Allah guided him away from music and towards the beauty of Islam. He shares how he left behind his passion for songs for the sake of Deen, and how he redirected his art into meaningful Islamic expressions like nasheeds and creative Islamic arts." },
    { title: "Arab Islamic Summit & Sumud Flotilla | Silence of the Ummah, Hope of Resistance", thumbnail: "/imgs/podcast/podcast-3.jpg", link: 'https://www.youtube.com/watch?v=d89PI_4eqbs', description: "We discuss the recent Arab Islamic Summit and the daring mission of the Sumud Flotilla. The Muslim Ummah today faces one of the most painful realities of our time: the informed attacks of Israel on innocent people and the silence of Muslim leaders. The Prophet Muhammad ﷺ had already prophesized that a time would come when Muslims would be many in number, but weak in strength, because of their love for the world and fear of death. The Arab Islamic Summit was seen as a moment of hope, but it turned into a disappointment with nothing more than verbal condemnations and empty statements. On the other hand, the Sumud Flotilla became a ray of light in these dark times. Brave souls dared to break the blockade, risking their lives to deliver aid to innocents. Their courage reminds us what true resistance and sacrifice look like." }
  ];

  // Handle window resize
  const handleResize = useCallback(() => {
    const newWidth = window.innerWidth
    setWindowWidth(newWidth)
    // Force slider to re-render on resize with delay
    setTimeout(() => {
      setSliderKey(prev => prev + 1)
    }, 150)
  }, [])

  useEffect(() => {
    setIsClient(true)
    setWindowWidth(window.innerWidth)
    
    // Add resize listener
    window.addEventListener('resize', handleResize)
    
    // Force re-render after mounting to ensure proper initialization
    const timer = setTimeout(() => {
      setSliderKey(prev => prev + 1)
    }, 200)

    // Additional timer for mobile devices that might need more time
    const mobileTimer = setTimeout(() => {
      if (window.innerWidth < 768) {
        setSliderKey(prev => prev + 1)
      }
    }, 500)

    return () => {
      window.removeEventListener('resize', handleResize)
      clearTimeout(timer)
      clearTimeout(mobileTimer)
    }
  }, [handleResize])

  // Calculate slides to show based on window width
  const getSlidesToShow = useCallback(() => {
    if (windowWidth >= 1024) return 3
    if (windowWidth >= 768) return 2
    return 1.2 // Changed from 1.2 to 1 for mobile
  }, [windowWidth])

  // Check if arrows should be shown
  const shouldShowArrows = useCallback(() => {
    return windowWidth >= 768
  }, [windowWidth])

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: getSlidesToShow(),
    slidesToScroll: 1,
    nextArrow: shouldShowArrows() ? <NextArrow /> : null,
    prevArrow: shouldShowArrows() ? <PrevArrow /> : null,
    arrows: shouldShowArrows(),
    variableWidth: false,
    centerMode: false,
    adaptiveHeight: false,
    // Disable responsive array since we're handling it manually
    responsive: undefined,
    customPaging: function(i) {
      return <div className="w-3 h-3 bg-gray-300 rounded-full hover:bg-[#0267B1] transition-colors" />
    },
    dotsClass: "slick-dots !flex !justify-center !mt-8 space-x-2"
  }

  // Show loading state during hydration with proper grid layout
  if (!isClient) {
    return (
      <section className='bg-white mb-14 md:mb-28'>
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="text-left md:text-center px-4 mb-6 md:mb-12">
            <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl text-[#111111]">Featured Podcast Videos</h2>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
              {videos.map((video, index) => (
                <div key={index} className="animate-pulse">
                  <div className="bg-gray-200 w-full h-80 mb-4 md:mb-6 rounded"></div>
                  <div className="h-6 bg-gray-200 rounded mb-2 w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2 w-full"></div>
                  <div className="h-4 bg-gray-200 rounded mb-4 w-5/6"></div>
                  <div className="h-4 bg-gray-200 rounded w-24"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className='bg-white mb-14 md:mb-28'>
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="text-left md:text-center px-4 mb-6 md:mb-12">
          <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl text-[#111111]">Featured Podcast Videos</h2>
        </div>

        <div className="relative">
          <Slider {...settings} key={`slider-${sliderKey}-${windowWidth}`}>
            {videos.map((video, index) => (
              <div key={index} className="px-4">
                <div className="relative flex flex-col group cursor-pointer">
                  <Link href={video.link} target='_blank'>
                    <div className='relative mb-4 md:mb-6'>
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full aspect-video object-cover rounded"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-[#0267b157] bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all rounded">
                      </div>
                    </div>
                  </Link>
                  <Link href={video.link} target='_blank'>
                    <h3 className="text-base md:text-xl lg:text-2xl font-semibold text-[#111111] mb-2 sm:mb-3">{video.title}</h3>
                  </Link>
                  <p className="font-medium text-sm md:text-base lg:text-lg text-[#525252] mb-4 md:mb-5">
                    {video.description.length > 120
                      ? `${video.description.slice(0, 120)}...`
                      : video.description}
                    </p>
                  <Link href={video.link} target='_blank'>
                    <span className="font-semibold text-[#0267B1] text-sm md:text-base hover:text-black underline transition-all mt-auto">WATCH VIDEO</span>
                  </Link>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <style jsx global>{`
          .slick-slider {
            margin: 0;
          }
          .slick-slide {
            height: auto;
          }
          .slick-slide > div {
            height: 100%;
          }
          .slick-dots {
            bottom: -40px !important;
          }
          .slick-dots li {
            margin: 0 4px !important;
          }
          .slick-dots li div {
            width: 12px !important;
            height: 12px !important;
          }
          .slick-dots li.slick-active div {
            background-color: #0267B1 !important;
          }
          @media (max-width: 768px) {
            .slick-slider {
              padding: 0 !important;
            }
            .slick-list {
              padding: 0 !important;
            }
          }
        `}</style>
      </div>
    </section>
  )
}

export default FeaturedVideos
