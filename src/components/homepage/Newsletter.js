import Link from 'next/link'

const NewsletterSection = () => (
    <section className="bg-white border-t border-[#111111] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <h2 className="uppercase font-bold text-xl md:text-3xl lg:text-4xl text-[#111111]">if you need our help!</h2>
                <Link
                    href="https://wa.me/923082221628"
                    target="_blank"
                    rel="noopener noreferrer"
                >                    
                    <button className="bg-[#0267B1] flex items-center gap-2 text-white font-semibold text-sm hover:bg-black transition-colors cursor-pointer px-6 md:px-14 py-4 md:py-5">
                        <img className='w-5 h-5' src="/icons/whatsapp-icon.svg" alt="" />
                        ASK A QUESTION
                    </button>
                </Link>
            </div>
        </div>
    </section>
);

export default NewsletterSection;