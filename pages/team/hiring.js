import React, { useState } from "react";
import Head from "next/head";
import { Title, TitleSm } from "@/components/common/Title";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  AiFillBehanceCircle,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { BsFacebook } from "react-icons/bs";
import { FiHeadphones, FiHelpCircle } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/router";
import Loader from "@/components/common/loader";
// Validation Schema
const validationSchema = Yup.object({
  name: Yup.string()
    .required("Name is required")
    .matches(/^[A-Za-z\s]+$/, "Name must contain only letters and spaces")
    .min(3, "Name must be at least 3 characters")
    .max(20, "Name cannot exceed 20 characters"),
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email format"),
  education: Yup.string().required("Education is required"),
  experience: Yup.string().required("Experience is required"),
  projectDetails: Yup.string().required("Project details are required"),
});

const hiring = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      education: "",
      experience: "",
      projectDetails: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const res = await fetch("/api/careerForm", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        const result = await res.json();
        toast(result.message, { type: "success" });

        setTimeout(() => {
          router.push("/");
        }, 1000);
      } catch (error) {
        setLoading(false); // Stop loading
        toast("Error submitting the form", { type: "error" });
      } finally {
        setLoading(false); // Stop loading
      }
    },
  });

  return (
    <>
      <Head>
        <title>Career - CrypthonLab</title>
      </Head>

      <section className="contact bg-top">
        <div className="container">
          <div className="heading-title">
            <TitleSm title="Career" /> <br />
            <br />
            <Title title="Let's Join right now!" className="title-bg" />
          </div>
          <div className="content py flex1">
            <div className="left w-30">
              <div className="contact-details">
                <div className="box">
                  <FiHeadphones size={30} className="icons" />
                  <h3>+44 7938 434588</h3>
                  <span>Call us: Mon - Fri 9 am - 5 pm</span>
                </div>
                <div className="box">
                  <IoLocationOutline size={30} className="icons" />
                  <h3>London</h3>
                  <span>F 61 The Ridgeway United Kingdom Post code E46QW</span>
                </div>
                <div className="box">
                  <FiHelpCircle size={30} className="icons" />
                  <h3>info@crypthonlab.com</h3>
                  <span>Drop us a line anytime!</span>
                </div>
                <div className="box">
                  <BiUserCircle size={30} className="icons" />
                  <h3>info@crypthonlab.com</h3>
                  <span>Career at CrypthonLab</span>
                </div>
              </div>
              <ul>
                <li className="icon">
                  <BsFacebook size={25} />
                </li>
                <li className="icon">
                  <AiFillBehanceCircle size={25} />
                </li>
                <li className="icon">
                  <AiFillInstagram size={25} />
                </li>
                <li className="icon">
                  <AiFillLinkedin size={25} />
                </li>
              </ul>
            </div>
            <div className="right w-70">
              <TitleSm title="Join us" />
              <p className="desc-p">
                Fill out the form below to join our Company.
              </p>

              <form onSubmit={formik.handleSubmit}>
                <div className="grid-2">
                  <div className="inputs">
                    <span>Name</span>
                    <input
                      type="text"
                      name="name"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.name && formik.errors.name ? (
                      <span className="error">{formik.errors.name}</span>
                    ) : null}
                  </div>
                  <div className="inputs">
                    <span>Email</span>
                    <input
                      type="email"
                      name="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.email && formik.errors.email ? (
                      <div className="error">{formik.errors.email}</div>
                    ) : null}
                  </div>
                </div>
                <div className="grid-2">
                  <div className="inputs">
                    <span>Your Education</span>
                    <input
                      type="text"
                      name="education"
                      value={formik.values.education}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.education && formik.errors.education ? (
                      <div className="error">{formik.errors.education}</div>
                    ) : null}
                  </div>
                  <div className="inputs">
                    <span>Your Experience</span>
                    <input
                      type="text"
                      name="experience"
                      value={formik.values.experience}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.experience && formik.errors.experience ? (
                      <div className="error">{formik.errors.experience}</div>
                    ) : null}
                  </div>
                </div>
                <div className="inputs">
                  <span>TELL US A BIT ABOUT YOURSELF & YOUR PAST PROJECT*</span>
                  <textarea
                    cols="30"
                    rows="10"
                    name="projectDetails"
                    value={formik.values.projectDetails}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  ></textarea>
                  {formik.touched.projectDetails &&
                  formik.errors.projectDetails ? (
                    <div className="error">{formik.errors.projectDetails}</div>
                  ) : null}
                </div>
                {loading && <Loader />}

                <button
                  className="button-primary"
                  type="submit"
                  disabled={loading}
                  style={{
                    background: loading ? "transparent" : "",
                    cursor: loading ? "not-allowed" : "pointer",
                    color: loading ? "white" : "",
                  }}
                >
                  {loading ? "Loading..." : "Submit"}
                </button>
              </form>
            </div>
          </div>
        </div>
        <ToastContainer />
      </section>
    </>
  );
};

export default hiring;
