'use client'
import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import { RiMenu3Line, RiCloseLine, RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileDropdowns, setMobileDropdowns] = useState({});
  const dropdownRefs = useRef({});

  const dropdownData = {
    quran: {
      label: "QURAN IN LIFE",
      items: [
        { label: "Summary of Surrah", link: "/summary-of-surrah" },
        { label: "Subject Wise", link: "/subject-wise" },
      ],
    },
    dua: {
      label: "DUA",
      items: [
        { label: "How are you feeling?", link: "/how-are-you-feeling" },
        { label: "Situation Wise Dua", link: "/situation-wise-dua" },
      ],
    },
    participate: {
      label: "PARTICIPATE",
      items: [
        { label: "Volunteer", link: "/volunteer-with-us" },
        { label: "Join us", link: "/join-us" },
        { label: "Collaboration", link: "/collaboration-with-us" },
        { label: "Contact us", link: "/contact-us" },
      ],
    },
  };
  

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    setActiveDropdown(null);
    setMobileDropdowns({});
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
    setActiveDropdown(null);
    setMobileDropdowns({});
  };

  const handleDesktopDropdown = (key) => {
    setActiveDropdown(activeDropdown === key ? null : key);
  };

  const handleMobileDropdown = (key) => {
    setMobileDropdowns(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (activeDropdown && dropdownRefs.current[activeDropdown] && 
          !dropdownRefs.current[activeDropdown].contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeDropdown]);

  const DesktopDropdownItem = ({ itemKey, data }) => (
    <li 
      className="relative" 
      ref={el => dropdownRefs.current[itemKey] = el}
    >
      <button
        onClick={() => handleDesktopDropdown(itemKey)}
        className="flex items-center hover:text-[#0267B1] transition-colors cursor-pointer"
      >
        {data.label}
        {activeDropdown === itemKey ? (
          <RiArrowUpSLine className="ml-1 text-lg" />
        ) : (
          <RiArrowDownSLine className="ml-1 text-lg" />
        )}
      </button>
      
      {/* Desktop Dropdown Menu */}
      {activeDropdown === itemKey && (
        <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
          <div className="py-2">
            {data.items.map((item, index) => (
              <Link 
                key={index}
                href={item?.link}
                onClick={() => setActiveDropdown(null)}
              >
                <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#0267B1] transition-colors cursor-pointer">
                  {item?.label}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </li>
  );

  const MobileDropdownItem = ({ itemKey, data }) => (
    <li>
      <button
        onClick={() => handleMobileDropdown(itemKey)}
        className="flex items-center justify-between w-full text-left text-sm text-[#111111] hover:text-[#0267B1] transition-colors py-2"
      >
        {data.label}
        {mobileDropdowns[itemKey] ? (
          <RiArrowUpSLine className="text-lg" />
        ) : (
          <RiArrowDownSLine className="text-lg" />
        )}
      </button>
      
      {/* Mobile Dropdown Items */}
      {mobileDropdowns[itemKey] && (
        <div className="ml-4 mt-2 space-y-2">
          {data.items.map((item, index) => (
            <Link 
              key={index}
              href={item.link}
              onClick={closeSidebar}
            >
              <div className="block py-2 text-sm text-gray-600 hover:text-[#0267B1] transition-colors cursor-pointer border-l-2 border-gray-200 pl-3">
                {item.label}
              </div>
            </Link>
          ))}
        </div>
      )}
    </li>
  );

  return (
    <>
      <header className="bg-white shadow-sm relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div>
              <Link href={'/'}>
                <img src="/imgs/logo.svg" alt="logo" className="h-10 sm:h-16 object-cover" />
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center text-sm font-medium text-[#111111] space-x-6">
              <DesktopDropdownItem itemKey="quran" data={dropdownData.quran} />
              
              <li>
                <Link href={'/hadees-by-topic'}>
                <button className="hover:text-[#0267B1] transition-colors cursor-pointer">
                  HADEES BY TOPIC
                </button>
                </Link>
              </li>
              
              <li>
                <Link href={'/prophet-as-role-model'}>
                <button className="hover:text-[#0267B1] transition-colors cursor-pointer">
                  PROPHET (SAW) AS ROLE MODEL
                </button>
                </Link>
              </li>
              
              <DesktopDropdownItem itemKey="dua" data={dropdownData.dua} />
              <DesktopDropdownItem itemKey="participate" data={dropdownData.participate} />
            </ul>
            
            {/* Desktop CTA Button */}
            <Link className="hidden md:block" href={'/contact-us'}>
              <button className="bg-[#0267B1] max-w-44 flex items-center gap-2 text-white font-semibold text-sm hover:bg-black transition-colors cursor-pointer px-6 py-4 md:py-5">
                <img className='w-5 h-5' src="/icons/whatsapp-icon.svg" alt="" />
                ASK QUESTION
              </button>
            </Link>

            {/* Mobile Menu Button */}
            <button 
              onClick={toggleSidebar}
              className='block md:hidden cursor-pointer p-2 hover:bg-gray-100 rounded-md transition-colors'
              aria-label="Toggle menu"
            >
              <RiMenu3Line className='text-black text-xl' />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* Mobile Sidebar */}
      <div className={`fixed top-0 right-0 w-full h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 md:hidden overflow-y-auto ${
        isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {/* Sidebar Header */}
        <div className="flex justify-between items-center p-5 border-b">
          <span>
            <Link href={'/'}>
              <img src="/imgs/logo.svg" alt="logo" className="h-10 sm:h-16 object-cover" />
            </Link>
          </span>
          <button 
            onClick={closeSidebar}
            className="p-2 hover:bg-gray-100 rounded-md transition-colors"
            aria-label="Close menu"
          >
            <RiCloseLine className='text-black text-xl' />
          </button>
        </div>

        {/* Sidebar Navigation */}
        <nav className="p-6">
          <ul className="space-y-4">
            <MobileDropdownItem itemKey="quran" data={dropdownData.quran} />
            
            <li>
            <Link href={'/hadees-by-topic'}>
              <button 
                onClick={closeSidebar}
                className="block w-full text-left text-sm text-[#111111] hover:text-[#0267B1] transition-colors py-2"
              >
                HADEES BY TOPIC
              </button>
              </Link>
            </li>
            
            <li>
            <Link href={'/prophet-as-role-model'}>
              <button 
                onClick={closeSidebar}
                className="block w-full text-left text-sm text-[#111111] hover:text-[#0267B1] transition-colors py-2"
              >
                PROPHET (SAW) AS ROLE MODEL
              </button>
              </Link>
            </li>
            
            <MobileDropdownItem itemKey="dua" data={dropdownData.dua} />
            <MobileDropdownItem itemKey="participate" data={dropdownData.participate} />
          </ul>

          {/* Mobile CTA Button */}
          <div className="mt-8 pt-8 border-t">
            <Link href={'/contact-us'} onClick={closeSidebar}>
              <button className="bg-[#0267B1] max-w-44 flex items-center justify-center gap-2 text-white font-semibold text-sm hover:bg-black transition-colors w-full px-6 py-4 rounded-md">
                <img className='w-5 h-5' src="/icons/whatsapp-icon.svg" alt="" />
                ASK QUESTION
              </button>
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;