import { expertise } from "@/assets/data/dummydata";
import { Title, TitleSm } from "@/components/common/Title";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { Collapse } from "antd";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
const { Panel } = Collapse;

const SinglePost = () => {
  const [activeKey, setActiveKey] = useState([]);
  const onChange = (key) => setActiveKey(key);
  const router = useRouter();
  const { id } = router.query;
  const post = expertise.find((post) => post.id === parseInt(id));

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 2 } }, // Increased duration
  };

  const slideInUp = {
    hidden: { y: 100, opacity: 0 }, // Increased y value for more noticeable effect
    visible: { y: 0, opacity: 1, transition: { duration: 2 } },
  };
  const containerVariants = {
    // hidden: { opacity: 0, x: -100 },
    // visible: {
    //   opacity: 1,
    //   x: 0,
    //   transition: {
    //     duration: 0.5,
    //     ease: "easeInOut",
    //     when: "beforeChildren",
    //     staggerChildren: 0.3,
    //   },
    // },
  };

  const imageVariants = {
    // hidden: { opacity: 0, scale: 0.5 },
    // visible: {
    //   opacity: 1,
    //   scale: 1,
    //   transition: { duration: 1, ease: "easeInOut" },
    // },
  };

  return (
    <>
      <Head>
        <title>{post?.title ? post?.title : ""}</title>
      </Head>
      <motion.section
        className=" post-details bg-top"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.div className="container" variants={containerVariants}>
          <div className="heading-title">
            <Title
              title={post?.title ? post?.title : ""}
              className="title-bg"
            />
            <TitleSm title={post?.subtitle ? post?.subtitle : ""} />
            <motion.div className="img py">
              <img
                src={post?.cover}
                alt={post?.title}
                width="100%"
                height="100%"
                className="round"
              />
            </motion.div>
            <div className="desc">
              <TitleSm title={post?.tagline ? post?.tagline : ""} />
              <p className="desc-p">
                {post?.description ? post?.description : ""}
              </p>
              <section className="section">
                <div className="container">
                  <h2>{post?.practiceTitle}</h2>
                  <p>{post?.practiceAreas ? post?.practiceAreas : ""}</p>
                  <div className="grid">
                    {post?.benefits?.map((item) => (
                      <motion.div
                        className="card"
                        key={item.title}
                        // variants={slideInUp}
                      >
                        <span>{item?.img} </span>
                        {/* <img alt="money-icon" src={item?.img} width="100px" /> */}
                        <h3>{item?.title}</h3>
                        <p>{item?.description}</p>
                        <a href="">LEARN MORE</a>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>
              <TitleSm
                title={
                  post?.additionalInfoTitle ? post?.additionalInfoTitle : ""
                }
              />
              <p className="desc-p">
                {post?.additionalInfo ? post?.additionalInfo : ""}
              </p>
            </div>
          </div>

          <div className="heading-titl">
            <div className="desc">
              <TitleSm title={post?.partnerInfo ? post?.partnerInfo : ""} />
              <p className="desc-p">
                {post?.partnerInfoDescription
                  ? post?.partnerInfoDescription
                  : ""}
              </p>
              <TitleSm title={post?.seoTitle ? post?.seoTitle : ""} />
              <p className="desc-p">
                {post?.seoDescription ? post?.seoDescription : ""}
              </p>
            </div>
          </div>

          <div className="faq-section">
            <h1 className="faq-title">Frequently Asked Questions</h1>
            <div className="grid-2">
              <Collapse activeKey={activeKey} onChange={onChange} ghost>
                {post?.FAQ?.map((item, index) => (
                  <Panel
                    header={item.question}
                    key={index}
                    className="faq-panel"
                  >
                    <span>{item.answer}</span>
                  </Panel>
                ))}
              </Collapse>
              <div className="faq-im">
                <img
                  src="https://res.cloudinary.com/jobifycloud/image/upload/e_background_removal/f_png/v1725131923/2112.i301.022.S.m004.c13.Support_faq_concepts_isometric_composition_atvxtk.jpg"
                  width="70%"
                  className="faq-img"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </motion.section>
    </>
  );
};

export default SinglePost;
