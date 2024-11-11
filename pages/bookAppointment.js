import { useState } from "react";
import DateTimeStep from "../components/DateTimeStep ";
import BasicDetailsStep from "../components/BasicDetailsStep";
import { Button, Steps } from "antd";
const { Step } = Steps;
import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import { Title, TitleSm } from "@/components/common/Title";
import Loader from "@/components/common/loader";
import { useRouter } from "next/router";
import {
  AiFillBehanceCircle,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { BsFacebook } from "react-icons/bs";
import { FiHeadphones, FiHelpCircle } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
const validationSchema = Yup.object().shape({
  date: Yup.string().required("Please select a date"),
  timeSlot: Yup.object().shape({
    section: Yup.string().required("Please select a time slot"),
    time: Yup.string(),
  }),
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string().required("Phone number is required"),
  note: Yup.string().required("Please provide project details"),
  budget: Yup.number().required("Please provide your budget"),
});
export default function BookingForm() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      note: "",
      budget: "",
      date: "",
      timeSlot: { section: "", time: "" },
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        setLoading(true);
        const res = await fetch("/api/sendEmail", {
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
        }, 100);
      } catch (error) {
        setLoading(false);
        toast("Error submitting the form", { type: "error" });
      } finally {
        setLoading(false);
      }
    },
  });

  const steps = [
    {
      title: "Date & Time",
      content: <DateTimeStep formik={formik} />,
    },
    {
      title: "Basic Details",
      content: <BasicDetailsStep formik={formik} />,
    },
  ];

  // const next = () => {
  //   if (
  //     current === 0 &&
  //     formik.values.date &&
  //     formik.values.timeSlot.section &&
  //     formik.values.timeSlot.time
  //   ) {
  //     setCurrent(current + 1);
  //   } else if (
  //     current === 1 &&
  //     formik.values.name &&
  //     formik.values.email &&
  //     formik.values.phone &&
  //     formik.values.note
  //   ) {
  //     formik.handleSubmit();
  //   } else {
  //     formik.validateForm();
  //   }
  // };
  const next = async () => {
    const errors = await formik.validateForm();

    if (current === 0 && !errors.date && !errors.timeSlot) {
      setCurrent(current + 1);
    } else if (
      current === 1 &&
      !errors.name &&
      !errors.email &&
      !errors.phone &&
      !errors.note &&
      !errors.budget &&
      !errors.date
    ) {
      formik.handleSubmit();
    } else {
      formik.setTouched({
        ...formik.touched,
        date: true,
        timeSlot: { section: true, time: true },
        name: true,
        email: true,
        phone: true,
        note: true,
        budget: true,
      });
    }
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <section className="contact bg-top">
      <div className="container">
        <div className="heading-title">
          {/* <TitleSm title="Book An Appointment" />

          <Title title="Let's start right now!" className="title-bg" /> */}
        </div>
        <div className="content py flex1">
          <div className="left w-30">
            <div className="contact-deatils">
              <div className="box">
                <FiHeadphones size={30} className="icons" />
                <h3>US Number: +17869274364</h3>
                <h3>UK Number: +447938434588</h3>
                <h3>Pakistan Numbers: </h3>
                <h3>+923224281032,+923244133319 </h3>
                <span>Call us: Mon - Fri</span>
              </div>
              <div className="box">
                <IoLocationOutline size={30} className="icons" />
                <br />
                <b>US Address:</b> 7901 4th ST N STE 23933 ST Petersburg FL
                33702
                <span></span>
                <br />
                <br />
                <span>
                  <b>UK Address:</b> 4 Hunger Down Chingford E46QJ
                </span>
                <br />
                <br />
                <span>
                  <b>Paksitan Address: </b> 213-E L-block, Model Town Lahore
                </span>
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
              {/* <li className="icon">
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
            </li> */}
            </ul>
          </div>
          <div className="right w-70">
            <Steps current={current} className="stepColor">
              {steps.map((item) => (
                <Step
                  type="inline"
                  //   className="stepColor"
                  key={item.title}
                  title={item.title}
                />
              ))}
            </Steps>
            {/* <TitleSm title="Make an online enquiry" /> */}
            <p className="desc-p">Please select the Date & Time</p>

            {/* <form onSubmit={formik.handleSubmit}> */}
            {loading && <Loader />}
            <div className="steps-content">{steps[current].content}</div>
            <div className="steps-action">
              {current < steps.length - 1 && (
                <Button
                  type="primary"
                  onClick={() => next()}
                  style={{ width: "5rem" }}
                >
                  Next
                </Button>
              )}
              <div
                className="grid-2"
                style={{
                  textAlign: "center",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                {current === steps.length - 1 && (
                  <Button
                    type="primary"
                    onClick={() => next()}
                    disabled={loading}
                    style={{
                      width: "5rem",
                      background: loading ? "transparent" : "",
                      cursor: loading ? "not-allowed" : "pointer",
                      color: loading ? "white" : "",
                    }}
                  >
                    {loading ? "loading" : "submit"}
                  </Button>
                )}
                {current > 0 && !loading && (
                  <Button
                    style={{ margin: "0 0px", width: "5rem" }}
                    onClick={() => prev()}
                  >
                    Previous
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
}
