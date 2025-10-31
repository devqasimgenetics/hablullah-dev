// import React from 'react';
// import Header from '@/components/Navbar';
// import HeroSection from '@/components/Showcase';
// import BlogSection from '@/components/homepage/Blogs';
// import NewsletterSection from '@/components/homepage/Newsletter';
// import Footer from '@/components/Footer';

// const Blogs = () => {
//     return (
//         <div className="min-h-screen bg-white">
//             <Header />
//             <HeroSection>
//                 <h1 className='text-3xl lg:text-4xl xl:text-6xl font-bold'>Blogs</h1>
//             </HeroSection>
//             <section className="bg-white">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 md:pb-28">
//                     <BlogSection />
//                 </div>
//             </section>
//             <NewsletterSection />
//             <Footer />
//         </div>
//     )
// }

// export default Blogs;

import Link from "next/link";
import Image from "next/image";
import { client } from "../../libs/contentful"

async function getBlogs() {
  const res = await client.getEntries({ content_type: "blogs" });
  return res.items;
}

export default async function BlogsPage() {
  const blogs = await getBlogs();

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-10 text-center">All Blogs</h1>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
        {blogs.map((blog) => (
          <Link
            key={blog.sys.id}
            href={`/blogs/${blog.fields.slug}`}
            className="rounded-xl overflow-hidden shadow hover:shadow-lg transition"
          >
            {/* {blog.fields.thumbnail && (
              <Image
                src={`https:${blog.fields.thumbnail.fields.file.url}`}
                alt={blog.fields.title}
                width={400}
                height={250}
                className="w-full h-56 object-cover"
              />
            )} */}
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{blog.fields.title}</h2>
              <p className="text-gray-600 text-sm line-clamp-3">
                {blog.fields.excerpt}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
