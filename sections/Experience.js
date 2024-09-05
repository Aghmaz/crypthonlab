import { motion } from "framer-motion";
import Image from "next/image";

const ExperienceSection = () => {
  return (
    <section className="experience">
      <div className="container">
        <div className="header">
          <div className="textGroup">
            <hr className="experienceHr1" />
            <h5>Experience</h5>
            <h2>Enhance Your Digital Footprint</h2>
            <p>
              At Crypthon Lab, we leverage our years of expertise to help
              businesses grow their online presence. Our team is dedicated to
              providing cutting-edge solutions tailored to your specific needs,
              ensuring measurable success and sustainable growth.
            </p>
          </div>
          <motion.a
            href="services.html"
            className="getStarted"
            whileHover={{ scale: 1.1 }}
          >
            Get Started
          </motion.a>
        </div>

        <div className="content">
          <motion.div
            className="imageWrapper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="experienceMask">
              <img src="/experience.png" alt="Team" />
            </div>
            <div className="expertiseLabel">
              <hr />
              <h6>Our Expertise</h6>
            </div>
          </motion.div>

          <div className="cards">
            <motion.div className="card" whileHover={{ scale: 1.05 }}>
              <div className="percentage">
                <h3>90%</h3>
              </div>
              <div>
                <h4>Innovative Solutions</h4>
                <p>
                  Crypthon Lab prides itself on a creative approach to every
                  project, ensuring innovative and unique solutions that set our
                  clients apart.
                </p>
              </div>
            </motion.div>

            <motion.div className="card" whileHover={{ scale: 1.05 }}>
              <div className="percentage">
                <h3>99%</h3>
              </div>
              <div>
                <h4>Client Satisfaction</h4>
                <p>
                  We guarantee success through our proven methodologies and
                  client-centric strategies, leading to a 99% satisfaction rate.
                </p>
              </div>
            </motion.div>

            <motion.div className="card" whileHover={{ scale: 1.05 }}>
              <div className="percentage">
                <h3>85%</h3>
              </div>
              <div>
                <h4>Comprehensive Branding</h4>
                <p>
                  Our brand strategy services encompass all aspects of branding,
                  ensuring a cohesive and impactful brand identity.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
