import Link from 'next/link'

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

import { MdOutlineMailOutline } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";

const Footer = () => (
    <>
        <footer className="bg-[#F8F8EF] text-[#525252] pt-10 md:pt-14 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <div>
                            <img src="/imgs/logo.svg" alt="logo" className="h-16 object-cover" />
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg md:text-xl text-[#111111] font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {[{ title: 'Home', link: '/' }, { title: 'About Us', link: '/about-us' }, { title: 'Contact Us', link: '/contact-us' }, { title: 'Blogs', link: '/blogs' }]?.map((item, _index) => (
                                <li className="font-medium text-base md:text-lg text-[#525252] transition-all hover:underline cursor-pointer">
                                    <Link href={item.link}>
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg md:text-xl text-[#111111] font-bold mb-4">Contact Us</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2 font-medium text-base md:text-lg text-[#525252] transition-all hover:underline cursor-pointer">
                                <MdOutlineLocalPhone className="text-[#0267B1]" />
                                042 - 35297761</li>
                            <li className="flex items-center gap-2 font-medium text-base md:text-lg text-[#525252] transition-all hover:underline cursor-pointer">
                                <MdOutlineMailOutline className="text-[#0267B1]" />
                                hablullah.live@info.com</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg md:text-xl text-[#111111] font-bold mb-4">Stay Connected With Hablullah</h3>
                        <div className="space-y-3 text-gray-400">
                            <p className="font-medium text-base md:text-lg text-[#525252]">Podcast, videos and much more.</p>
                            <div className='text-xl flex items-center gap-2 sm:gap-3'>
                                <img src="/icons/Google-Play.svg" alt="" />
                                <img src="/icons/Google-Play-2.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <div className="bg-[#0267B1] text-white py-4">
            <div className="max-w-7xl flex items-center justify-between gap-6 mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-xs sm:text-sm">Copyright © 2024 | Powered by HABLULLAH</p>
                <div className='text-xl flex items-center gap-2 sm:gap-3'>
                    <FaFacebookF />
                    <FaInstagram />
                    <FaYoutube />
                </div>
            </div>
        </div>
    </>
);

export default Footer;