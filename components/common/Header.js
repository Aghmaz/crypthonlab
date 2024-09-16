import Link from "next/link";
import { TitleLogo } from "./Title";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { RiMenu4Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [activeLink, setActiveLink] = useState("");
  const [open, setOpen] = useState(false);

  const router = useRouter();
  useEffect(() => {
    setActiveLink(router.pathname);
  }, [router.pathname]);
  return (
    <>
      <header>
        <div className="container">
          <div className="lo" style={{ display: "flex" }}>
            <Link href="/">
              {/* <img
                src="https://res.cloudinary.com/jobifycloud/image/upload/e_background_removal/f_png/v1725218875/1720791524785_pp2u9m.jpg"
                width="20rem"
              /> */}
              <TitleLogo title="Lab" caption="Crypthon" className="logomin" />
            </Link>
          </div>
          <nav
            className={open ? "openMenu" : "closeMenu"}
            onClick={() => setOpen(null)}
          >
            <Link
              href="/"
              className={activeLink == "/" ? "activeLink" : "none"}
            >
              Home
            </Link>
            <Link
              href="/threedmodel"
              className={activeLink == "/threedmodel" ? "activeLink" : "none"}
            >
              3D Models
            </Link>
            <Link
              href="/aboutus"
              className={activeLink == "/aboutus" ? "activeLink" : "none"}
            >
              About Us
            </Link>

            <Link
              href="/services"
              className={activeLink == "/services" ? "activeLink" : "none"}
            >
              Services
            </Link>
            <Link
              href="/team"
              className={activeLink == "/team" ? "activeLink" : "none"}
            >
              Team
            </Link>

            <Link
              href="/contact"
              className={activeLink == "/contact" ? "activeLink" : "none"}
            >
              Contact us
            </Link>
            <Link href="/bookAppointment">
              <button className="button-primary">book an Appointment</button>
            </Link>
          </nav>
          <button onClick={() => setOpen(!open)}>
            {open ? <AiOutlineClose size={25} /> : <RiMenu4Line size={25} />}
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
