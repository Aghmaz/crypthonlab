import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../styles/slider.module.scss";
import { Typewriter } from "react-simple-typewriter";
import { AnimatedTitleLogo, TitleForHeader, TitleLogo } from "./common/Title";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

const HeaderHero = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    dots: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const slides = [
    // {
    //   type: "image",
    //   src: "https://res.cloudinary.com/jobifycloud/image/upload/v1725131907/1720_pu3a30.jpg",
    //   author: "CrypthonLab",
    //   title: "CrypthonLab",
    //   //   topic: "Software Solution",s
    // },
    // {
    //   type: "video",
    //   src: "https://res.cloudinary.com/jobifycloud/video/upload/v1724615828/ai_jnz6jg.mp4",
    // },
    {
      type: "video",
      src: "https://res.cloudinary.com/jobifycloud/video/upload/v1725642244/18069232-uhd_3840_2160_24fps_uhkfgb.mp4",
      author: "CrypthonLab",
      title: "AI-Driven:",
      topic: " Personalization",
      topic2: " at the 💞 of Your Vision",
      topic3: "Precision that aligns seamlessly with your vision",
    },
    {
      type: "video",
      src: "https://res.cloudinary.com/jobifycloud/video/upload/v1725568192/18069235-uhd_3840_2160_24fps_m3v8do.mp4",
      author: "CrypthonLab",
      title: "Software:",
      topic: "💪🏻💥 Tools",
      topic2: "for the ✨ of Your Work",
      topic3: "Efficient software crafted for productivity 💼",
    },
    {
      type: "video",
      src: "https://res.cloudinary.com/jobifycloud/video/upload/v1725558438/3129576-uhd_3840_2160_30fps_nzham4.mp4",
      author: "CrypthonLab",
      title: "AppDriven:",
      topic: "Seamless UX 📱",
      topic2: "in your 🤝, every day",
      topic3: "Engaging apps that connect users and innovation",
    },
    {
      type: "video",
      src: "https://res.cloudinary.com/jobifycloud/video/upload/v1725558510/6128683-uhd_3840_2160_25fps_fqvsoj.mp4",
      author: "CrypthonLab",
      title: "Design¹ˢᵗ:",
      topic: "visual🎨Art",
      topic2: "to enhance 🫵🏻 brand",
      topic3: "Creative visuals that tell your brand's story",
    },
  ];

  return (
    <div className={styles.carousel}>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className={styles.item}>
            {slide.type === "image" ? (
              <img src={slide.src} alt={slide.title} />
            ) : (
              <video src={slide.src} autoPlay loop muted playsInline />
            )}
            <div className={styles.content}>
              <div className={styles.cardWrapper}>
                <div className={styles.author}>{slide.author}</div>
                <div className={styles.title}>{slide.title}</div>
                <div className={styles.topic}>{slide.topic}</div>
                <div className={styles.topic2}>{slide.topic2}</div>
                <div className={styles.author2}>{slide.topic3}</div>
                <div className="hero3">
                  <h1 className={styles.title}>
                    {/* <Typewriter
                    words={["CrypthonLab", "CrypthonLab"]}
                    loop={0}
                    cursor
                    cursorStyle="|"
                    typeSpeed={160}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  /> */}
                  </h1>
                  {/* <h1 className=" crypthonanimation2forHeader">
                  Empowering Buisnesses in it Solutions
                </h1>
                <h1 className={`${styles.title}`}>Best Solutions For </h1>
                <h2 className="lightHeadingForHeader">
                  {" "}
                  Big Data & Technology Solution
                </h2> */}
                </div>
                {/* <div className={styles.buttons}>
                <button>SEE MORE</button>
                <button>SUBSCRIBE</button>
              </div> */}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <button className={styles.nextArrow} onClick={onClick}>
      <RiArrowRightSLine size={25} />
    </button>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <button className={styles.prevArrow} onClick={onClick}>
      <RiArrowLeftSLine size={25} />
    </button>
  );
}

export default HeaderHero;
