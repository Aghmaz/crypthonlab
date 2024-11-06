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
              <span>
                Building #21 K-block commercial,1st floor Model Town Lahore
              </span>
              <br />
              <br />

              <span>
                Questions? Reach us <br /> Monday – Friday
              </span>
              <br />
              <br />
              <span style={{ color: "white" }}>info@crypthonlab.com</span>
              <br />
              <br />
              <h3>+92322 4281032</h3>
              <h3>+92324 4133319</h3>
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
                <Link href="/services/3">Staff Augmentation</Link>
              </li>
              <li>
                <Link href="/services/3">Mobile App</Link>
              </li>
            </ul>
            <ul>
              <h3>CONNECT</h3>
              <div className="connect">
                <li>
                  <Link href="https://www.instagram.com/crypthonlab/">
                    <BsFacebook size={25} />
                  </Link>
                </li>

                <li>
                  <Link href="https://www.facebook.com/profile.php?id=61562734246544">
                    <AiFillInstagram size={25} />
                  </Link>
                </li>
                <li>
                  <Link href="https://www.linkedin.com/company/crypthonlab/posts/?feedView=all">
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
