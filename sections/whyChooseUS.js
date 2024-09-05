import { motion } from "framer-motion";
import Image from "next/image";

const WhyChooseUsSection = () => {
  return (
    <section className="whyChooseUs">
      <div className="whyChooseContainer">
        <div className="whyChooseHeader">
          <div className="whyChoosetextGroup">
            <hr className="whyChooseHr1" />
            <h5>Work</h5>
            <h2>WHY CHOOSE US</h2>
            <p>
              We believe in Software Quality that is essential to deliver the
              product on time and on the required quality.
            </p>
          </div>
          {/* <motion.a
            href="services.html"
            className="whyChoosegetStarted"
            whileHover={{ scale: 1.1 }}
          >
            Get Started
          </motion.a> */}
        </div>

        <div className="whyChooseContent">
          <div className="Whycards">
            <motion.div className="whycard" whileHover={{ scale: 1.05 }}>
              <div className="whyChoosepercentage">
                <h3>90%</h3>
              </div>
              <div>
                <h4>TIMELY WORK</h4>
                <p>
                  We always plan the Project Development schedule for deploying
                  the Project on time with all completed requirements.
                </p>
              </div>
            </motion.div>

            <motion.div className="whycard" whileHover={{ scale: 1.05 }}>
              <div className="whyChoosepercentage">
                <h3>99%</h3>
              </div>
              <div>
                <h4>RELIABILITY</h4>
                <p>
                  Failure Free Products are our main target.We always develope
                  the most reliable Products without any failure issue on
                  future.
                </p>
              </div>
            </motion.div>

            <motion.div className="whycard" whileHover={{ scale: 1.05 }}>
              <div className="whyChoosepercentage">
                <h3>85%</h3>
              </div>
              <div>
                <h4>MAINTAINABLE</h4>
                <p>
                  Our Products are fully maintainable for the injection of any
                  new Functionality or Requirement.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="whyimageWrapper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="whyMask">
              <img src="/choose.png" alt="Team" />
            </div>
            <div className="whyLabel">
              <hr />
              <h6>Our Expertise</h6>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
