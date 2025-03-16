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
              <div style={{ marginTop: "-7rem" }}>
                <img
                  src="/images/crypthonlabtransparent.png"
                  width={220}
                  height={180}
                />
              </div>
              {/* <TitleLogo title="Lab" caption="Crypthon" className="logobg" /> */}

              <span>
                <b>US Address:</b> 7901 4th ST N STE 23933 ST Petersburg FL
                33702
              </span>
              <h3>+17869274364</h3>
              <span>
                <b>UK Address:</b> 4 Hunger Down Chingford E46QJ
              </span>
              <h3>+447938434588</h3>
              <span>
                <b>Pakistan Address: </b> 213-E L-block, Model Town Lahore
              </span>
              <h3>+92322 4281032 , +92324 4133319 </h3>
              <span>
                Questions? Reach us <br /> Monday – Friday
              </span>
              <br />
              <br />
              <span style={{ color: "white" }}>info@crypthonlab.com</span>
              <br />

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
                <Link href="/services/1">Big Data & Data Engineering</Link>
              </li>
              <li>
                <Link href="/services/1">Fintech</Link>
              </li>
              <li>
                <Link href="/services/1">Cyber Security</Link>
              </li>
              <li>
                <Link href="/services/5">Enterprise Applications</Link>
              </li>
              <li>
                <Link href="/services/2">Digital Marketing</Link>
              </li>
              <li>
                <Link href="/services/3">AI & Machine Learning</Link>
              </li>
              <li>
                <Link href="/services/3">Mobile App</Link>
              </li>
            </ul>
            <ul>
              <h3>CONNECT</h3>
              <div className="connect">
                <li>
                  <Link href="https://www.facebook.com/profile.php?id=61562734246544">
                    <BsFacebook size={25} />
                  </Link>
                </li>

                <li>
                  <Link href="https://www.instagram.com/crypthontechnologies/">
                    <AiFillInstagram size={25} />
                  </Link>
                </li>
                <li>
                  <Link href="https://www.linkedin.com/company/crypthontechnologies/">
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
