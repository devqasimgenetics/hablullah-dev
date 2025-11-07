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
    { title: "Struggling with 5 daily prayers", link: "/imgs/podcast/podcast-1.jpg", thumbnail: '/imgs/blogs/similar-blog-1.jpg', reference: '— Sunan Ibn Majah, Hadith 4001.', description: "“The prayer is the first deed judged on the Day.”" },
    { title: "5 Things to do last days of Ramazan", link: "/imgs/podcast/podcast-2.jpg", thumbnail: '/imgs/blogs/similar-blog-2.jpg', reference: '— Sahih Bukhari', description: "“Whoever fasts Ramadan with faith and seeking reward will have his past sins forgiven.”" },
    { title: "Getting  Closer To Allah", link: "/imgs/podcast/podcast-3.jpg", thumbnail: '/imgs/blogs/similar-blog-3.jpg', reference: '— Sahih Muslim.', description: "“The closest that a servant comes to his Lord is when he is prostrating.”" }
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
          <div className="text-left px-4 mb-6 md:mb-12">
          <h2 className="font-bold text-[20px] md:text-[26px] lg:text-[28px] text-[#111111]">Similar Blogs</h2>
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
        <div className="text-left px-4 mb-5 md:mb-8">
          <h2 className="font-bold text-[20px] md:text-[26px] lg:text-[28px] text-[#111111]">Similar Blogs</h2>
        </div>

        <div className="relative">
          <Slider {...settings} key={`slider-${sliderKey}-${windowWidth}`}>
            {videos.map((video, index) => (
              <div key={index} className="px-2.5">
                <div className="relative flex flex-col group cursor-pointer">
                    <div className='relative mb-4 md:mb-5'>
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full object-cover rounded"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-[#0267b157] bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all rounded">
                      </div>
                    </div>
                  <div className='flex flex-col h-44 md:h-[160px]'>
                    <h3 className="text-lg md:text-[20px] font-semibold text-[#111111] mb-2 sm:mb-3">{video.title}</h3>
                    <p className="font-medium text-base text-[#525252] mb-2">
                      {video.description.length > 120
                        ? `${video.description.slice(0, 120)}...`
                        : video.description}
                      </p>
                      <p className="font-medium text-base text-[#525252] mb-4 md:mb-4">{video.reference}</p>
                    <Link className='flex items-center gap-2 mt-auto' href={`/blogs/${video.title.toLowerCase().replace(/\s+/g, "-")}`}>
                      <span className="font-semibold text-[#0267B1] text-sm hover:text-black transition-all hover:underline mt-auto">READ MORE</span>
                      <img className='w-5 h-5' src="/imgs/blogs/blog-breadcrumb-arrow.svg" alt="" />
                    </Link>
                  </div>
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
