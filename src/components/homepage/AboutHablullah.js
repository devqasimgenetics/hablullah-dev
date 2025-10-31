import Link from 'next/link'

const AboutHablullah = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 md:pb-28">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12">
                <div>
                    <img className="w-full" src="/imgs/homepage/about-hablullah.png" alt="About Hablullah" />
                </div>
                <div>
                    <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl text-[#111111] mb-3 md:mb-4">About Hablullah</h2>
                    <p className="font-medium text-[#525252] text-sm md:text-base lg:text-lg mb-6 md:mb-10">Hablullah started almost two years ago to help young people find practical guidance from the Quran and Sunnah. We focus on the real concerns of youth and speak in a clear way so faith feels close and useful. Our aim is to remove cultural habits and wrong ideas that hide true Islamic teachings and guide people back to authentic knowledge. Through podcasts, reels, interviews, and real-life stories, we want to make living Islam easier and more meaningful for today’s generation.</p>
                    <Link href={'/about-us'}>
                        <button className="bg-[#0267B1] text-white font-semibold text-sm hover:bg-black transition-colors cursor-pointer px-6 md:px-14 py-4 md:py-5">
                            LEARN MORE
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default AboutHablullah;