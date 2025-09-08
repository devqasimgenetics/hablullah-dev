"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function PartnerForm() {
  // Validation schema
  const validationSchema = Yup.object({
    fullName: Yup.string().required("Full Name is required"),
    organization: Yup.string().required("Organization is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string()
      .matches(/^[0-9+\-() ]*$/, "Invalid phone number")
      .required("Phone is required"),
    website: Yup.string().url("Enter a valid URL").required("Website is required"),
    collaboration: Yup.string().required("Select type of collaboration"),
    message: Yup.string().required("Message is required"),
  });

  // Initial values
  const initialValues = {
    fullName: "",
    organization: "",
    email: "",
    phone: "",
    website: "",
    collaboration: "",
    message: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log("Form Data:", values);

    toast.success('Your response has been submitted successfully!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    resetForm();
  };

  return (
    <section className='w-full py-8 md:py-14 pb-14 md:pb-28'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white px-4 py-6 md:px-6 md:py-8">
          <h2 className="text-xl lg:text-2xl font-bold text-[#111111] mb-4">PARTNER WITH US</h2>
          <p className="text-[#525252] font-medium text-sm sm:text-base md:text-lg mb-6">
            We believe in the power of working together to achieve greater impact. If
            your organization or initiative shares our vision, let’s collaborate to
            make a difference. Fill in the details below and our team will reach out.
          </p>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-4">
                {/* Row 1 */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-sm sm:text-base md:text-xl text-[#111111]">
                      Full Name
                    </label>
                    <Field
                      type="text"
                      name="fullName"
                      placeholder="Enter Full Name"
                      className="w-full !text-[#111111] border border-[#BCBCBC] outline-0 px-3 py-2 mt-1"
                    />
                    <ErrorMessage
                      name="fullName"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-sm sm:text-base md:text-xl text-[#111111]">
                      Organization
                    </label>
                    <Field
                      type="text"
                      name="organization"
                      placeholder="Enter Organization Name"
                      className="w-full !text-[#111111] border border-[#BCBCBC] outline-0 px-3 py-2 mt-1"
                    />
                    <ErrorMessage
                      name="organization"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-sm sm:text-base md:text-xl text-[#111111]">
                      Email
                    </label>
                    <Field
                      type="email"
                      name="email"
                      placeholder="Enter Email Address"
                      className="w-full !text-[#111111] border border-[#BCBCBC] outline-0 px-3 py-2 mt-1"
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
                      type="text"
                      name="phone"
                      placeholder="Enter Phone Number"
                      className="w-full !text-[#111111] border border-[#BCBCBC] outline-0 px-3 py-2 mt-1"
                    />
                    <ErrorMessage
                      name="phone"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                </div>

                {/* Row 3 */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-sm sm:text-base md:text-xl text-[#111111]">
                      Website
                    </label>
                    <Field
                      type="url"
                      name="website"
                      placeholder="Enter Website Link"
                      className="w-full !text-[#111111] border border-[#BCBCBC] outline-0 px-3 py-2 mt-1"
                    />
                    <ErrorMessage
                      name="website"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-sm sm:text-base md:text-xl text-[#111111]">
                      Type of Collaboration
                    </label>
                    <Field
                      as="select"
                      name="collaboration"
                      className="w-full !text-[#111111] border border-[#BCBCBC] outline-0 px-3 py-2 mt-1"
                    >
                      <option value="">Select Option</option>
                      <option value="sponsorship">Sponsorship</option>
                      <option value="partnership">Partnership</option>
                      <option value="volunteering">Volunteering</option>
                    </Field>
                    <ErrorMessage
                      name="collaboration"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block font-semibold text-sm sm:text-base md:text-xl text-[#111111]">
                    Why Would You Like to Collaborate With Us?
                  </label>
                  <Field
                    as="textarea"
                    name="message"
                    placeholder="Write Here"
                    className="w-full !text-[#111111] border border-[#BCBCBC] outline-0 px-3 py-2 mt-1"
                  />
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#0267B1] text-white font-semibold text-sm hover:bg-black hover:text-white transition-colors cursor-pointer px-6 md:px-14 py-4 md:py-5"
                >
                  {isSubmitting ? "Submitting..." : "SUBMIT NOW"}
                </button>
              </Form>
            )}
          </Formik>
        </div>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </section>
  );
}
