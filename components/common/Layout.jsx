import Footer from "./Footer";
import Header from "./Header";
import "react-toastify/dist/ReactToastify.css";
const Layout = (props) => {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
