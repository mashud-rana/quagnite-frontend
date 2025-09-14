import Footer from "@/components/Frontend/Layout/Footer/Footer";
import Header from "@/components/Frontend/Layout/Header/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FrontendLayout = ({ children }) => {
  return (
    <div>
      <ToastContainer />
      <Header />
      <main className="ic_bg_black">{children}</main>
      <Footer />
    </div>
  );
};

export default FrontendLayout;
