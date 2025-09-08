import Link from 'next/link'

const FeaturedVideos = () => {
  const videos = [
    { title: "Navigating Misconceptions", thumbnail: "/imgs/homepage/podcast-1.png", link: 'https://www.youtube.com/watch?v=6SIka0SUgl0', description: "Join Hablullah in a though provoking podcast episode featuring a profound discussion with Mufti Syed Sabir Hussain." },
    { title: "Rasool S.A.W", thumbnail: "/imgs/homepage/podcast-2.png", link: 'https://www.youtube.com/watch?v=rx2l9DW3t6c', description: "Through the highs and lows, the bonds of Islamic brotherhood remain unbreakable. In a world often divided..." },
    { title: "Balancing Deen", thumbnail: "/imgs/homepage/podcast-3.png", link: 'https://www.youtube.com/watch?v=qjDoXsL8g40', description: "Tune in to our latest podcast episode featuring Moeen Mahmood, the co-founder of Naseeha Institute..." }
  ];

  return (
    <section className='bg-white mb-14 md:mb-28'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left md:text-center mb-6 md:mb-12">
          <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl text-[#111111]">Featured Podcast Videos</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div key={index} className="relative flex flex-col group cursor-pointer">
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedVideos;