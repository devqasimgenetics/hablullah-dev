
const Showcase = ({ imgUrl = '/showcase/default-showcase.png' }) => {
    return (
        <section
            style={{ backgroundImage: `url('/imgs${imgUrl}')` }}
            className="bg-gradient-to-r from-blue-900 to-blue-700 bg-no-repeat bg-center bg-cover text-white md:min-h-80 mb-10 md:mb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

            </div>
        </section>
    )
}

export default Showcase;