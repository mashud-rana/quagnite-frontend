import BootcampHeading from "@/components/Student/Bootcamps/BootcampHeading/BootcampHeading";
import BootcampNavber from "@/components/Student/Bootcamps/BootcampNavber/BootcampNavber";

const BootcampLayout = ({ children }) => {
  return (
    <div>
      <BootcampHeading />

      <BootcampNavber />
      <div>{children}</div>
    </div>
  );
};

export default BootcampLayout;
