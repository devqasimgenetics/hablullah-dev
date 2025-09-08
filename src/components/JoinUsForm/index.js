"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Upload } from "lucide-react";

export default function JoinUsForm() {
  const initialValues = {
    fullName: "",
    email: "",
    phone: "",
    country: "",
    interest: "",
    hearAbout: "",
    about: "",
    availability: [],
    cv: null,
  };

  const validationSchema = Yup.object({
    fullName: Yup.string().required("Full name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string().required("Phone is required"),
    country: Yup.string().required("Country/City is required"),
    interest: Yup.string().required("Area of interest is required"),
    hearAbout: Yup.string().required("This field is required"),
    about: Yup.string().required("Tell us about yourself"),
    cv: Yup.mixed().required("CV is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log("Form Data:", values);
    resetForm();
  };

  return (
    <section className='w-full py-8 md:py-14 mb-14 md:mb-28'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="uppercase text-xl lg:text-2xl font-bold text-[#111111] mb-4">JOIN US</h2>
        <p className="text-[#525252] font-medium text-sm sm:text-base md:text-lg mb-6">
          Submit your CV to apply for available positions and become a part of
          our team dedicated to spreading knowledge, fostering unity in the
          community and striving to bring youth closer to ALLAH.
        </p>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ setFieldValue }) => (
            <Form className="space-y-6">
              {/* Name + Email */}
              <div className="grid md:grid-cols-2 gap-4">
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
              </div>

              {/* Phone + Country */}
              <div className="grid md:grid-cols-2 gap-4">
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
                Country/City
                  </label>
                  <Field
                    name="country"
                    placeholder="Enter Country/City"
                    className="w-full !text-[#1111] border border-[#BCBCBC] outline-0 px-3 py-2 mt-1"
                  />
                  <ErrorMessage
                    name="country"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>

              {/* Area of Interest + How did you hear */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                <label className="block font-semibold text-sm sm:text-base md:text-xl text-[#111111]">
                Area of Interest
                  </label>
                  <Field
                    as="select"
                    name="interest"
                    className="w-full !text-[#1111] border border-[#BCBCBC] outline-0 px-3 py-2 mt-1"
                  >
                    <option value="">Select Option</option>
                    <option value="teaching">Teaching</option>
                    <option value="media">Media</option>
                    <option value="event">Event Management</option>
                  </Field>
                  <ErrorMessage
                    name="interest"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div>
                <label className="block font-semibold text-sm sm:text-base md:text-xl text-[#111111]">
                How Did You Hear About Us?
                  </label>
                  <Field
                    as="select"
                    name="hearAbout"
                    className="w-full !text-[#1111] border border-[#BCBCBC] outline-0 px-3 py-2 mt-1"
                  >
                    <option value="">Select Option</option>
                    <option value="friends">Friends</option>
                    <option value="social">Social Media</option>
                    <option value="ads">Ads</option>
                  </Field>
                  <ErrorMessage
                    name="hearAbout"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>

              {/* About */}
              <div>
              <label className="block font-semibold text-sm sm:text-base md:text-xl text-[#111111]">
              Tell Us About Yourself
                </label>
                <Field
                  as="textarea"
                  name="about"
                  rows="4"
                  placeholder="Write Here"
                  className="w-full !text-[#1111] border border-[#BCBCBC] outline-0 px-3 py-2 mt-1"
                  />
                <ErrorMessage
                  name="about"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Availability */}
              <div>
              <label className="block font-semibold text-sm sm:text-base md:text-xl text-[#111111]">
              Availability
                </label>
                <div className="flex gap-4 flex-wrap">
                  {["Weekdays", "Weekends", "Evenings", "Flexible"].map(
                    (option) => (
                      <label key={option} className="flex items-center gap-2">
                        <Field
                          type="checkbox"
                          name="availability"
                          value={option}
                          className="h-4 w-4"
                        />
                        {option}
                      </label>
                    )
                  )}
                </div>
              </div>

              {/* File Upload */}
              <div>
              <label className="block font-semibold text-sm sm:text-base md:text-xl text-[#111111]">
              Upload Your CV
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-blue-500">
                  <input
                    type="file"
                    name="cv"
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    id="cvUpload"
                    onChange={(event) =>
                      setFieldValue("cv", event.currentTarget.files[0])
                    }
                  />
                  <label
                    htmlFor="cvUpload"
                    className="flex flex-col sm:flex-row items-center justify-center cursor-pointer text-gray-600 gap-3"
                  >
                    <Upload className="w-6 h-6 mb-2" />
                    <span>UPLOAD YOUR CV</span>
                  </label>
                </div>
                <ErrorMessage
                  name="cv"
                  component="div"
                  className="text-red-500 text-sm mt-2"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#0267B1] text-white font-semibold text-sm hover:bg-black hover:text-white transition-colors cursor-pointer px-6 md:px-14 py-4 md:py-5"
                >
                SUBMIT NOW
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
}
