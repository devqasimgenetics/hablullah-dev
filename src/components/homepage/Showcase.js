import Link from 'next/link'

const Showcase = () => {
    return (
        <>
        <section
            style={{ backgroundImage: "url('/imgs/homepage/showcase.png')" }}
            className="hidden md:block bg-[#0267b1] bg-no-repeat bg-center bg-cover text-white mb-14 md:mb-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-left">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-bold leading-16 mb-6">
                        A Reliable Islamic<br />
                        Center To Follow The<br />
                        Quran & Sunnah
                    </h1>
                    <p className="text-sm md:text-base lg:text-xl mb-8 text-blue-100 max-w-3/4 md:max-w-2xl">
                        Hablullah is an organization, which provides a unique <br /> platform for the youth and provides them avenues to <br /> channel
                    </p>
                    // <Link href={'https://play.google.com/store/apps/details?id=com.live.app.hablullah&hl=en&pli=1'} target='_blank'>
                    //     <button className="bg-[#0267B1] text-white font-semibold text-sm hover:bg-white hover:text-black transition-colors cursor-pointer px-6 md:px-14 py-4 md:py-5">
                    //         DOWNLOAD APP NOW
                    //     </button>
                    // </Link>
                </div>
            </div>
        </section>

        <section
            style={{ backgroundImage: "url('/imgs/showcase/responsive-homepage.png')" }}
            className="block md:hidden bg-gradient-to-r from-blue-900 to-blue-700 bg-no-repeat bg-center bg-cover text-white mb-14 md:mb-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-8">
                <div className="text-center pt-10">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-bold mb-6">
                        A Reliable Islamic
                        Center To Follow The
                        Quran & Sunnah
                    </h1>
                    <p className="text-sm md:text-base lg:text-xl mb-8 text-blue-100 mx-auto">
                        Hablullah is an organization, which provides a unique platform for the youth and provides them avenues to channel
                    </p>
                    // <Link href={'https://play.google.com/store/apps/details?id=com.live.app.hablullah&hl=en&pli=1'} target='_blank'>
                    //     <button className="bg-[#0267B1] text-white font-semibold text-sm hover:bg-white hover:text-black transition-colors cursor-pointer px-6 md:px-14 py-4 md:py-5">
                    //         DOWNLOAD APP NOW
                    //     </button>
                    // </Link>
                </div>
            </div>
        </section>
        </>
    )
}

export default Showcase;
