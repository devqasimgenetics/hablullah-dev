'use client'
import Link from 'next/link'
import Slider from 'react-slick'
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
  const videos = [
    { title: "Navigating Misconceptions", thumbnail: "/imgs/homepage/podcast-1.png", link: 'https://www.youtube.com/watch?v=6SIka0SUgl0', description: "Join Hablullah in a though provoking podcast episode featuring a profound discussion with Mufti Syed Sabir Hussain." },
    { title: "Rasool S.A.W", thumbnail: "/imgs/homepage/podcast-2.png", link: 'https://www.youtube.com/watch?v=rx2l9DW3t6c', description: "Through the highs and lows, the bonds of Islamic brotherhood remain unbreakable. In a world often divided..." },
    { title: "Balancing Deen", thumbnail: "/imgs/homepage/podcast-3.png", link: 'https://www.youtube.com/watch?v=qjDoXsL8g40', description: "Tune in to our latest podcast episode featuring Moeen Mahmood, the co-founder of Naseeha Institute..." }
  ];

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
          arrows: false,
        }
      }
    ],
    customPaging: function(i) {
      return <div className="w-3 h-3 bg-gray-300 rounded-full hover:bg-[#0267B1] transition-colors" />
    },
    dotsClass: "slick-dots !flex !justify-center !mt-8 space-x-2"
  };

  return (
    <section className='bg-white hidden sm:block mb-14 md:mb-28'>
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="text-left md:text-center px-4 mb-6 md:mb-12">
          <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl text-[#111111]">Featured Podcast Videos</h2>
        </div>

        <div className="relative">
          <Slider {...settings}>
            {videos.map((video, index) => (
              <div key={index} className="px-4">
                <div className="relative flex flex-col group cursor-pointer">
                  <div className='relative mb-4 md:mb-6'>
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-[#0267b157] bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                    </div>
                  </div>
                  <h3 className="text-base md:text-xl lg:text-2xl font-semibold text-[#111111] mb-2 sm:mb-3">{video.title}</h3>
                  <p className="font-medium text-sm md:text-base lg:text-lg text-[#525252] mb-4 md:mb-5">{video.description}</p>
                  <Link href={video.link} target='_blank'>
                    <span className="font-semibold text-[#0267B1] text-sm md:text-base hover:text-black underline transition-all mt-auto">WATCH VIDEO</span>
                  </Link>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <style jsx global>{`
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
        `}</style>
      </div>
    </section>
  );
};

export default FeaturedVideos;