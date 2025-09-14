import AboutBanner from "@/components/Frontend/About/Banner/Banner";
import Benefits from "@/components/Frontend/Individual/Benefits/Benefits";
import Recommendation from "@/components/Frontend/School/Recommendation/Recommendation";
import img1 from "@/assets/images/all/bootcamp-banner.png";
import bg from "@/assets/images/all/about-bg.png";
import LiveLearning from "@/components/Frontend/BootcampList/LiveLearining/LiveLearning";
import BootcampBanner from "@/components/Frontend/BootcampList/BootcampBanner/BootcampBanner";

const BootcampListPage = () => {
  return (
    <>
      <BootcampBanner />
      <LiveLearning />
      <Recommendation />
    </>
  );
};

export default BootcampListPage;
