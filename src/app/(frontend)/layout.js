import Footer from "@/components/Frontend/Layout/Footer/Footer";
import Header from "@/components/Frontend/Layout/Header/Header";

const FrontendLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="ic_bg_black">{children}</main>
      <Footer />
    </div>
  );
};

export default FrontendLayout;
