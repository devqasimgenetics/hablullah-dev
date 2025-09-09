
const Showcase = ({ children, imgUrl = '/showcase/default-showcase.png' }) => {
    return (
        <section
            style={{ backgroundImage: `url('/imgs${imgUrl}')` }}
            className="bg-[#0267b1] bg-no-repeat flex items-center justify-center bg-center bg-cover text-white md:min-h-80 mb-10 md:mb-16">
            <div className="max-w-7xl h-full mx-auto px-4 sm:px-6 lg:px-8 py-20">
               {children}
            </div>
        </section>
    )
}

export default Showcase;