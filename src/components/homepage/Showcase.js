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
                            A Youth-Oriented Path <br />
                             to Quranic Guidance <br />
                             and Sunnah Living
                        </h1>
                        <p className="text-sm md:text-base lg:text-xl mb-8 text-blue-100 max-w-3/4 md:max-w-2xl">
                            Watch podcasts, reels, and Quranic lessons that connect faith to everyday life and help youth apply Sunnah in practical ways.
                        </p>
                    </div>
                </div>
            </section>

            <section
                style={{ backgroundImage: "url('/imgs/showcase/responsive-homepage.png')" }}
                className="block md:hidden bg-gradient-to-r from-blue-900 to-blue-700 bg-no-repeat bg-center bg-cover text-white mb-14 md:mb-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-8">
                    <div className="text-center pt-10">
                        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-bold mb-6">
                            A Youth-Oriented Path to Quranic Guidance and Sunnah Living
                        </h1>
                        <p className="text-sm md:text-base lg:text-xl mb-8 text-blue-100 mx-auto">
                            Watch podcasts, reels, and Quranic lessons that connect faith to everyday life and help youth apply Sunnah in practical ways.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Showcase;
