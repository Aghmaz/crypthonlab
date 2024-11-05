import Link from "next/link";
import { TitleLogo } from "./Title";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { RiMenu4Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [activeLink, setActiveLink] = useState("");
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const router = useRouter();

  // Check for window width
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile(); // Initial check
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  useEffect(() => {
    setActiveLink(router.pathname);
  }, [router.pathname]);

  return (
    <header>
      <div className="container">
        <div className="lo" style={{ display: "flex" }}>
          <Link href="/">
            <TitleLogo title="Lab" caption="Crypthon" className="logomin" />
          </Link>
        </div>

        <>
          <nav
            className={open ? "openMenu" : "closeMenu"}
            onClick={() => setOpen(null)}
          >
            <Link
              href="/"
              className={activeLink === "/" ? "activeLink" : "none"}
            >
              Home
            </Link>
            <Link
              href="/threedmodel"
              className={activeLink === "/threedmodel" ? "activeLink" : "none"}
            >
              3D Models
            </Link>
            <Link
              href="/portfolio"
              className={activeLink === "/portfolio" ? "activeLink" : "none"}
            >
              Portfolio
            </Link>
            <Link
              href="/aboutus"
              className={activeLink === "/aboutus" ? "activeLink" : "none"}
            >
              About us
            </Link>
            <Link
              href="/services"
              className={activeLink === "/services" ? "activeLink" : "none"}
            >
              Services
            </Link>
            <Link
              href="/team"
              className={activeLink === "/team" ? "activeLink" : "none"}
            >
              Team
            </Link>
            <Link
              href="/contact"
              className={activeLink === "/contact" ? "activeLink" : "none"}
            >
              Contact us
            </Link>
            <Link href="/bookAppointment">
              <button className="button-primary">Schedule</button>
            </Link>
          </nav>
          {isMobile && (
            <button onClick={() => setOpen(!open)}>
              {open ? <AiOutlineClose size={25} /> : <RiMenu4Line size={25} />}
            </button>
          )}
        </>
      </div>
    </header>
  );
};

export default Header;
