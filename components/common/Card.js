import Link from "next/link";
import { TitleSm } from "./Title";
import { HiOutlineArrowRight } from "react-icons/hi";
import { motion } from "framer-motion";

export const Card = ({ data, caption, show, path }) => {
  return (
    <>
      <div className="card">
        <div className="card-img">
          <img src={data.cover} alt={data.title} />
        </div>
        <div className="card-details">
          {data?.linkedin_url ? (
            <Link href={`${data.linkedin_url}`} className="title-link">
              <TitleSm title={data.title} />
            </Link>
          ) : data?.url ? (
            <Link href={`${path}/${data.url}`} className="title-link">
              <TitleSm title={data.title} />
            </Link>
          ) : (
            <Link href={`${path}/${data.id}`} className="title-link">
              <TitleSm title={data.title} />
            </Link>
          )}

          {data?.linkedin_url ? (
            <Link href={`${data.linkedin_url}`}>
              {caption} <HiOutlineArrowRight className="link-icon" />
            </Link>
          ) : caption && data.url ? (
            <Link href={`${path}/${data.url}`}>
              {caption} <HiOutlineArrowRight className="link-icon" />
            </Link>
          ) : (
            <Link href={`${path}/${data.id}`}>
              {caption} <HiOutlineArrowRight className="link-icon" />
            </Link>
          )}
          {/* {caption && data.url ? (
            <Link href={`${path}/${data.url}`}>
              {caption} <HiOutlineArrowRight className="link-icon" />
            </Link>
          ) : (
            <Link href={`${path}/${data.id}`}>
              {caption} <HiOutlineArrowRight className="link-icon" />
            </Link>
          )} */}
          <div className="flex">
            <span> {data.catgeory} </span>{" "}
            {data.date && <span> / {data.date}</span>}
          </div>

          {show && (
            <ul>
              {data.desc.map((text, i) => (
                <motion.li
                  href="services.html"
                  className="getStarted"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 1 }}
                >
                  <li key={i}> - {text.text}</li>
                </motion.li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};
