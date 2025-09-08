import Link from 'next/link'
import { FaChevronRight } from "react-icons/fa";

const BlogSection = () => {
  const blogs = [
    {
      title: "Struggling with 5 daily prayers",
      excerpt: "“The prayer is the first deed judged on the Day.",
      image: "/imgs/homepage/blog-card-2.png",
      reference: "Sunan Ibn Majah, Hadith 4001"
    },
    {
      title: "5 Things to do last days of Ramazan",
      excerpt: "“Whoever fasts Ramadan with faith and seeking reward will have his past sins forgiven.",
      image: "/imgs/homepage/blog-card-3.png",
      reference: "Sahih Bukhari"
    },
    {
      title: "Getting  Closer To Allah",
      excerpt: "The closest that a servant comes to his Lord is when he is prostrating.",
      image: "/imgs/homepage/blog-card-4.png",
      reference: "Sahih Muslim."
    }
  ];

  return (
    <section className="w-full mb-14 md:mb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-6 md:mb-12">
          <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl text-[#111111]">Our Latest Blogs</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-9">
          <div>
            <article className="group overflow-hidden">
              <div className="relative">
                <img
                  src='/imgs/homepage/blog-card-1.png'
                  alt='blog thumbnail'
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-[#0267b157] bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                </div>
              </div>
              <div className="w-full py-5 md:py-6">
                <h3 className="text-xl md:text-2xl font-semibold text-[#111111] capitalize mb-2 md:mb-4">5 Things to do last days of Ramazan</h3>
                <p className="font-medium text-sm md:text-base text-[#525252] mb-3">“Whoever fasts Ramadan with faith and seeking reward will have his past sins forgiven.”</p>
                <p className="font-medium text-sm md:text-base text-[#525252] mb-4">— Sahih Bukhari</p>
                <Link href={'/blogs/five-things-to-do-last-days-of-ramzan'}>
                  <span className="flex items-center gap-2 font-semibold text-[#0267B1] text-sm md:text-base hover:text-black hover:underline uppercase transition-all mt-auto cursor-pointer">
                    Read More
                    <FaChevronRight className="text-xs sm:text-sm" />
                  </span>
                </Link>
              </div>
            </article>
          </div>
          <div>
            {blogs.map((blog, index) => (
              <article key={index} className="group flex overflow-hidden mb-6">
                <div className="relative h-fit">
                  <img
                    src={blog?.image}
                    alt={blog?.title}
                    className="w-28 h-28 sm:w-auto sm:h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-[#0267b157] bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                  </div>
                </div>
                <div className="w-full px-4">
                  <h3 className="text-base md:text-lg lg:text-xl font-semibold text-[#111111] capitalize mb-3">{blog?.title}</h3>
                  <p className="font-medium text-sm md:text-base text-[#525252] mb-3">{blog?.excerpt}</p>
                  <p className="font-medium text-sm md:text-base text-[#525252] mb-4">— {blog?.reference}</p>
                  <Link href={`/blogs/${blog.title.toLowerCase().replace(/\s+/g, "-")}`}>
                    <button className="flex items-center gap-2 font-semibold text-[#0267B1] text-sm md:text-base hover:text-black hover:underline uppercase transition-all cursor-pointer">
                      Read More
                      <FaChevronRight className="text-xs sm:text-sm" />
                    </button>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;