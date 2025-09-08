"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Phone, Mail, MapPin } from "lucide-react";

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

export default function JoinTeam({ title }) {
  const initialValues = {
    fullName: "",
    email: "",
    phone: "",
    message: "",
  };

  const validationSchema = Yup.object({
    fullName: Yup.string().required("Full name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string()
      .matches(/^[0-9]{7,15}$/, "Enter a valid phone number")
      .required("Phone is required"),
    message: Yup.string().required("Message is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log("Form Data:", values);
    resetForm();
  };

  return (
    <section className='w-full py-8 md:py-14 mb-14 md:mb-28'>
      <div className="max-w-7xl grid md:grid-cols-2 gap-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Left Side Info */}
        <div>
          <h2 className="uppercase text-xl lg:text-2xl font-bold text-[#111111] mb-4">{title ?? 'JOIN OUR TEAM'}</h2>
          <p className="text-[#525252] font-medium text-sm sm:text-base md:text-lg mb-6">
            Are you eager to contribute your skills and time for the sake of
            Allah? Join our team of dedicated volunteers who work tirelessly to
            produce impactful content and engage our audience across various
            platforms.
          </p>

          <div className="hidden sm:block">
            <Socials />
          </div>
        </div>

        {/* Right Side Form */}
        <div className="bg-white md:p-6">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {() => (
              <Form className="space-y-4">
                <div>
                  <label className="block font-semibold text-sm sm:text-base md:text-xl text-[#111111]">
                    Full Name
                  </label>
                  <Field
                    name="fullName"
                    placeholder="Enter Full Name"
                    className="w-full !text-[#1111] border border-[#BCBCBC] outline-0 px-3 py-2 mt-1"
                  />
                  <ErrorMessage
                    name="fullName"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-sm sm:text-base md:text-xl text-[#111111]">
                    Email
                  </label>
                  <Field
                    name="email"
                    type="email"
                    placeholder="Enter Email Address"
                    className="w-full !text-[#1111] border border-[#BCBCBC] outline-0 px-3 py-2 mt-1"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-sm sm:text-base md:text-xl text-[#111111]">
                    Phone
                  </label>
                  <Field
                    name="phone"
                    placeholder="Enter Phone Number"
                    className="w-full !text-[#1111] border border-[#BCBCBC] outline-0 px-3 py-2 mt-1"
                  />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-sm sm:text-base md:text-xl text-[#111111]">
                    Write Message
                  </label>
                  <Field
                    as="textarea"
                    name="message"
                    placeholder="Write Message"
                    rows="4"
                    className="w-full !text-[#1111] border border-[#BCBCBC] outline-0 px-3 py-2 mt-1"
                  />
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0267B1] text-white font-semibold text-sm hover:bg-black hover:text-white transition-colors cursor-pointer px-6 md:px-14 py-4 md:py-5"
                >
                  SEND MESSAGE
                </button>
              </Form>
            )}
          </Formik>
        </div>

        <div className="block sm:hidden mt-6">
            <Socials />
          </div>
      </div>
    </section>
  );
}


const Socials = () => {
  return (
    <>
      <div>
        <div className="space-y-4 text-gray-700">
          <div className="group flex items-center gap-3">
            <div className="bg-[#0267B1] flex items-center justify-center text-white w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14">
              <Phone size={18} />
            </div>
            <span className="font-medium text-base md:text-xl text-[#111111] transition-all hover:underline cursor-pointer">042 - 35297761</span>
          </div>

          <div className="group flex items-center gap-3">
            <div className="bg-[#0267B1] flex items-center justify-center text-white w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14">
              <Mail size={18} />
            </div>
            <span className="font-medium text-base md:text-xl text-[#111111] transition-all hover:underline cursor-pointer">habibullah.live@info.com</span>
          </div>

          <div className="group flex items-center gap-3">
            <div className="bg-[#0267B1] flex items-center justify-center text-white w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14">
              <MapPin size={18} />
            </div>
            <span className="font-medium text-base md:text-xl text-[#111111] transition-all hover:underline cursor-pointer">Commercial, Sundar Industrial Estate</span>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-8">
          <p className="text-sm sm:text-base font-semibold text-[#111111] mb-2">
            SPREAD THE WORD
          </p>
          <div className="flex gap-3">
            <span className="w-10 h-10 md:w-14 md:h-14 flex items-center justify-center transition-all hover:bg-gray-100 cursor-pointer">
              <FaFacebookF className="font-medium text-[#0267B1] text-2xl" />
            </span>
            <span className="w-10 h-10 md:w-14 md:h-14 flex items-center justify-center transition-all hover:bg-gray-100 cursor-pointer">
              <FaInstagram className="font-medium text-[#0267B1] text-2xl" />
            </span>
            <span className="w-10 h-10 md:w-14 md:h-14 flex items-center justify-center transition-all hover:bg-gray-100 cursor-pointer">
              <FaYoutube className="font-medium text-[#0267B1] text-2xl" />
            </span>
            <span className="w-10 h-10 md:w-14 md:h-14 flex items-center justify-center transition-all hover:bg-gray-100 cursor-pointer">
              <FaLinkedinIn className="font-medium text-[#0267B1] text-2xl" />
            </span>
          </div>
        </div>
      </div>
    </>
  )
}