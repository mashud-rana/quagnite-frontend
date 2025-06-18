import Footer from "@/components/Frontend/Layout/Footer/Footer";
import Header from "@/components/Frontend/Layout/Header/Header";

const FrontendLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default FrontendLayout;
