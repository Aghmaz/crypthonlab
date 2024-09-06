import Link from "next/link";
import { TitleLogo } from "./Title";
import { BsFacebook } from "react-icons/bs";
import {
  AiFillBehanceCircle,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="grid-4">
            <div className="logo">
              <TitleLogo title="Lab" caption="Crypthon" className="logobg" />
              <br />
              <span>
                Questions? Reach us <br /> Monday – Friday from 9 am to 5 pm
              </span>
              <br />
              <br />
              <span style={{ color: "white" }}>info@crypthonlab.com</span>
              <br />
              <br />
              <h3>+44 7938 4345888</h3>
              <br />
              <Link href="/bookAppointment">
                <button className="button-primary">Book An Appointement</button>
              </Link>
            </div>
            <ul>
              <h3>COMPANY</h3>
              <li>
                <Link href="/aboutus">About us</Link>
              </li>
              <li>
                <Link href="/team">Our team</Link>
              </li>
              <li>
                <Link href="/services">Service</Link>
              </li>

              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
            <ul>
              <Link href="/services">
                <h3>SERVICES</h3>
              </Link>
              <li>
                <Link href="/services/1">Web Design & Development</Link>
              </li>
              <li>
                <Link href="/services/5">Graphic Designing</Link>
              </li>
              <li>
                <Link href="/services/2">Digital Marketing</Link>
              </li>
              <li>
                <Link href="/services/3">Mobile App</Link>
              </li>
            </ul>
            <ul>
              <h3>CONNECT</h3>
              <div className="connect">
                <li>
                  <Link href="/">
                    <BsFacebook size={25} />
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <AiFillBehanceCircle size={25} />
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <AiFillInstagram size={25} />
                  </Link>
                </li>
                <li>
                  <Link href="https://www.linkedin.com/authwall?trk=gf&trkInfo=AQG1qaEkEXSwgAAAAZGuvdCocLM-o4Ub0aDzDcYBjO0sI0SzdAyUq6XFZyvB0wOsq8SgOGbZE12GhXaIOJgkC4vyplcjvjLTk_k-fznVk0VBMYqCXSg4odkUyCC9_yduyNiD61Q=&original_referer=https://crypthonlab.com/&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fcrypthon-lab-235468319%2F">
                    <AiFillLinkedin size={25} />
                  </Link>
                </li>
              </div>
            </ul>
          </div>
          <div className="legal connect pyf">
            <div className="text">
              <span>© 2023 CrypthonLab. ALL RIGHTS RESERVED.</span>
            </div>
            {/* <div className="connect">
              <span>CrypthonLab</span>
              <span> &nbsp; | &nbsp; </span>
              <span>TERMS & CONDITIONS</span>
            </div> */}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
